// js/script.js
const GEOJSON_SOURCE = 'geoJSON/countries.geojson'; 

const countryBiomeMap = {
    // Américas
    "Brazil": "tropical-forest", "Argentina": "savanna", "Chile": "temp-forest", "Peru": "tropical-forest",
    "Colombia": "tropical-forest", "Mexico": "savanna", "United States": "temp-forest", "Canada": "taiga",
    "Greenland": "tundra", "Dominican Rep.": "tropical-forest", "Cuba": "tropical-forest", "Haiti": "tropical-forest",
    "Jamaica": "tropical-forest", "Costa Rica": "tropical-forest", "Panama": "tropical-forest", "Guatemala": "tropical-forest",
    "Honduras": "tropical-forest", "Nicaragua": "tropical-forest", "El Salvador": "tropical-forest", "Ecuador": "tropical-forest",
    "Bolivia": "savanna", "Paraguay": "savanna", "Uruguay": "savanna", "Venezuela": "tropical-forest", "Guyana": "tropical-forest",
    "Suriname": "tropical-forest", "French Guiana": "tropical-forest",
    
    // Europa
    "France": "temp-forest", "United Kingdom": "temp-forest", "Germany": "temp-forest", "Spain": "temp-forest",
    "Norway": "taiga", "Sweden": "taiga", "Finland": "taiga", "Russia": "taiga", "Italy": "temp-forest",
    "Portugal": "temp-forest", "Greece": "temp-forest", "Poland": "temp-forest", "Ukraine": "temp-forest",
    "Iceland": "tundra", "Ireland": "temp-forest", "Austria": "temp-forest", "Switzerland": "temp-forest",
    
    // África
    "Egypt": "desert", "Algeria": "desert", "Libya": "desert", "Sudan": "desert", "Nigeria": "tropical-forest",
    "Congo": "tropical-forest", "Dem. Rep. Congo": "tropical-forest", "Kenya": "savanna", "South Africa": "savanna",
    "Angola": "savanna", "Mali": "desert", "Mauritania": "desert", "Niger": "desert", "Chad": "desert",
    "Ethiopia": "savanna", "Somalia": "desert", "Tanzania": "savanna", "Zambia": "savanna", "Zimbabwe": "savanna",
    "Botswana": "savanna", "Namibia": "desert", "Morocco": "desert", "Madagascar": "tropical-forest",
    
    // Ásia
    "China": "temp-forest", "India": "tropical-forest", "Japan": "temp-forest", "Indonesia": "tropical-forest",
    "Saudi Arabia": "desert", "Iran": "desert", "Thailand": "tropical-forest", "Vietnam": "tropical-forest",
    "Mongolia": "savanna", "Kazakhstan": "savanna", "Pakistan": "desert", "Iraq": "desert", "Turkey": "temp-forest",
    "Myanmar": "tropical-forest", "Malaysia": "tropical-forest", "Philippines": "tropical-forest", "South Korea": "temp-forest",
    "North Korea": "temp-forest", "Afghanistan": "desert", "Uzbekistan": "desert", "Turkmenistan": "desert",
    
    // Oceania
    "Australia": "desert", "New Zealand": "temp-forest", "Papua New Guinea": "tropical-forest", "Fiji": "tropical-forest"
};

const biomesData = {
    'tundra': { nome: 'Tundra', cor: '#A5B4FC', desc: 'Clima polar, vegetação rasteira e solo permafrost.' },
    'taiga': { nome: 'Taiga', cor: '#065F46', desc: 'Floresta boreal composta principalmente por coníferas.' },
    'temp-forest': { nome: 'Floresta Temperada', cor: '#34D399', desc: 'Quatro estações definidas e árvores caducifólias.' },
    'tropical-forest': { nome: 'Floresta Tropical', cor: '#059669', desc: 'Alta pluviosidade e biodiversidade exuberante.' },
    'desert': { nome: 'Deserto', cor: '#FBBF24', desc: 'Região com extrema escassez de água e clima árido.' },
    'savanna': { nome: 'Savana / Cerrado', cor: '#F59E0B', desc: 'Campos tropicais com vegetação adaptada à seca.' }
};

document.addEventListener('DOMContentLoaded', () => {
    const svg = d3.select("#world-map");
    const width = 1000, height = 500;
    const g = svg.append("g");

    const zoom = d3.zoom()
        .scaleExtent([1, 25])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });

    svg.call(zoom);

    const projection = d3.geoNaturalEarth1().scale(160).translate([width / 2, height / 2]);
    const pathGenerator = d3.geoPath().projection(projection);

    d3.json(GEOJSON_SOURCE).then(data => {
        projection.fitSize([width, height], data);

        g.selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("d", pathGenerator)
            .attr("class", "country-path")
            .attr("fill", d => {
                const name = d.properties.name;
                const biomeKey = countryBiomeMap[name] || assignGlobalBiome(d);
                return biomesData[biomeKey].cor;
            })
            .attr("stroke", "#FFFFFF")
            .attr("stroke-width", 0.5)
            .on("mouseover", function(event, d) {
                const name = d.properties.name;
                const biomeKey = countryBiomeMap[name] || assignGlobalBiome(d);
                const biome = biomesData[biomeKey];
                
                showPopup(event, biome, name);
                updateDetails(biome, name);
                
                // Efeito Premium de Destaque
                d3.select(this)
                    .transition().duration(200)
                    .attr("stroke-width", 2)
                    .attr("fill-opacity", 0.9);
                
                d3.select(this).raise();
            })
            .on("mouseout", function() {
                document.getElementById('map-popup').style.display = 'none';
                d3.select(this)
                    .transition().duration(200)
                    .attr("stroke-width", 0.5)
                    .attr("fill-opacity", 1);
            })
            .on("mousemove", (event) => {
                const popup = document.getElementById('map-popup');
                popup.style.left = (event.pageX + 15) + "px";
                popup.style.top = (event.pageY - 20) + "px";
            });

        renderLegend();
        setupControls(svg, zoom);

    }).catch(err => {
        console.error("Erro ao carregar o GeoJSON:", err);
    });

    function assignGlobalBiome(d) {
        let lat = 0;
        try { lat = d3.geoCentroid(d)[1]; } catch(e) {}
        if (lat > 60 || lat < -60) return 'tundra';
        if (lat > 40) return 'taiga';
        if (lat > 22) return 'temp-forest';
        if (lat < 23 && lat > -23) return 'tropical-forest';
        return 'savanna';
    }

    function showPopup(event, data, countryName) {
        const popup = document.getElementById('map-popup');
        popup.innerHTML = `<h4>${countryName}</h4><p>${data.nome}</p>`;
        popup.style.display = 'block';
    }

    function updateDetails(data, countryName) {
        const sidebar = document.getElementById('biome-details');
        sidebar.innerHTML = `
            <div class="details-container" style="animation: fadeIn 0.5s ease">
                <h2 style="color:${data.cor}">${countryName}</h2>
                <span class="biome-badge" style="background:${data.cor}">${data.nome}</span>
                <div class="biome-hero" style="background:${data.cor}15; color:${data.cor}">🌿</div>
                <div class="detail-content">
                    <p class="main-desc">${data.desc}</p>
                    <div class="detail-grid">
                        <div class="detail-box">
                            <strong>📊 STATUS</strong>
                            <p>Monitorado</p>
                        </div>
                        <div class="detail-box">
                            <strong>🐾 RIQUEZA</strong>
                            <p>Biodiversa</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderLegend() {
        const legend = document.getElementById('legend');
        legend.innerHTML = '<p class="panel-title">🌿 Legenda de Biomas</p><ul class="legend-list"></ul>';
        const list = legend.querySelector('.legend-list');
        Object.keys(biomesData).forEach(key => {
            const item = biomesData[key];
            list.innerHTML += `
                <li class="legend-item">
                    <span class="color-box" style="background:${item.cor}"></span>
                    ${item.nome}
                </li>`;
        });
    }

    function setupControls(svg, zoom) {
        d3.select("#zoom-in").on("click", () => svg.transition().call(zoom.scaleBy, 1.5));
        d3.select("#zoom-out").on("click", () => svg.transition().call(zoom.scaleBy, 0.7));
        d3.select("#reset-zoom").on("click", () => svg.transition().call(zoom.transform, d3.zoomIdentity));
    }
});
