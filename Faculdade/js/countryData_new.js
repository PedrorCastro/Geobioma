const countryData = {
"Indonesia": {
        biome: "tropical-forest",
        symbol: "🦧",
        animals: ["Orangotango", "Tigre-de-sumatra", "Dragão-de-komodo", "Rinoceronte-de-java", "Probóscide"],
        animalImgs: [
            { name: "Orangotango", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/320px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Jacarta", population: "275 milhões", area: "1.904.569 km²", climate: "Equatorial / Tropical"
    },
    "Malaysia": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Kuala Lumpur", population: "30 milhões", area: "330.803 km²", climate: "Tropical / Subtropical"
    },
"Chile": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Puma", "Vicunha", "Chinchila", "Pudú"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Andean_condor_%28Vultur_gryphus%29.jpg/320px-Andean_condor_%28Vultur_gryphus%29.jpg" },
            { name: "Puma", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mountain_lion_cougar.jpg/320px-Mountain_lion_cougar.jpg" },
            { name: "Pudú", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Pudu_puda.jpg/320px-Pudu_puda.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Laguna_Arco_Iris.jpg/480px-Laguna_Arco_Iris.jpg",
        capital: "Santiago", population: "19 milhões", area: "756.102 km²", climate: "Mediterrâneo / Andino"
    },
    "Bolivia": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Sucre", population: "10 milhões", area: "1.098.581 km²", climate: "Tropical / Equatorial"
    },
"Peru": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Lama", "Condor-dos-Andes", "Vicunha", "Urso-de-óculos", "Anta-andina"],
        animalImgs: [
            { name: "Lama", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Machu_Picchu.jpg/320px-Above_Machu_Picchu.jpg" },
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Andean_condor_%28Vultur_gryphus%29.jpg/320px-Andean_condor_%28Vultur_gryphus%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Machu_Picchu%2C_Peru.jpg/480px-Machu_Picchu%2C_Peru.jpg",
        capital: "Lima", population: "33 milhões", area: "1.285.216 km²", climate: "Tropical / Andino"
    },
"Argentina": {
        biome: "savanna",
        symbol: "🦬",
        animals: ["Puma", "Guanaco", "Condor-dos-Andes", "Mara-patagônica", "Tatuíra"],
        animalImgs: [
            { name: "Puma", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mountain_lion_cougar.jpg/320px-Mountain_lion_cougar.jpg" },
            { name: "Guanaco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Lama_guanicoe_09022006.jpg/320px-Lama_guanicoe_09022006.jpg" },
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Andean_condor_%28Vultur_gryphus%29.jpg/320px-Andean_condor_%28Vultur_gryphus%29.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Buenos Aires", population: "46 milhões", area: "2.780.400 km²", climate: "Temperado / Semiárido"
    },
    "Dhekelia Sovereign Base Area": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Cyprus": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Nicosia", population: "858 mil", area: "9.251 km²", climate: "Tropical / Subtropical"
    },
"India": {
        biome: "tropical-forest",
        symbol: "🐯",
        animals: ["Tigre-de-bengala", "Elefante-asiático", "Leopardo", "Cobras-najas", "Pavão"],
        animalImgs: [
            { name: "Tigre-de-bengala", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/320px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Nova Délhi", population: "1.4 bilhão", area: "3.287.263 km²", climate: "Tropical / Monções"
    },
"China": {
        biome: "temp-forest",
        symbol: "🐼",
        animals: ["Panda-gigante", "Grou-de-Manchúria", "Tigre-do-sul-da-China", "Ibis-japonês", "Takin"],
        animalImgs: [
            { name: "Panda-gigante", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/320px-Grosser_Panda.JPG" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Great_Wall_of_China_July_2006.jpg/480px-Great_Wall_of_China_July_2006.jpg",
        capital: "Pequim", population: "1.4 bilhão", area: "9.596.960 km²", climate: "Continental / Tropical"
    },
    "Israel": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Jerusalem", population: "8,3 milhões", area: "20.770 km²", climate: "Desértico / Árido"
    },
    "Palestine": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Ramallah", population: "5,5 milhões", area: "5.655 km²", climate: "Desértico / Árido"
    },
    "Lebanon": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Beirut", population: "4,1 milhões", area: "10.452 km²", climate: "Desértico / Árido"
    },
    "Ethiopia": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Addis Ababa", population: "88 milhões", area: "1.104.300 km²", climate: "Tropical / Equatorial"
    },
    "South Sudan": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Juba", population: "11 milhões", area: "619.745 km²", climate: "Tropical / Equatorial"
    },
    "Somalia": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Mogadishu", population: "11 milhões", area: "637.657 km²", climate: "Tropical / Equatorial"
    },
"Kenya": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Guepardo", "Hipopótamo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/320px-Lion_waiting_in_Namibia.jpg" },
            { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/320px-African_Bush_Elephant.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Nairóbi", population: "54 milhões", area: "580.367 km²", climate: "Tropical / Semiárido"
    },
    "Malawi": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Lilongwe", population: "16 milhões", area: "118.484 km²", climate: "Tropical / Equatorial"
    },
    "United Republic of Tanzania": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Dodoma", population: "47 milhões", area: "945.087 km²", climate: "Tropical / Equatorial"
    },
    "Syria": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Damascus", population: "23 milhões", area: "185.180 km²", climate: "Desértico / Árido"
    },
    "Somaliland": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
"France": {
        biome: "temp-forest",
        symbol: "🐓",
        animals: ["Galo-da-França", "Raposa-vermelha", "Lince-europeu", "Veado-nobre", "Lampreia"],
        animalImgs: [
            { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Red_Fox_%28Vulpes_vulpes%29_-_British_Wildlife_Centre-3.jpg/320px-Red_Fox_%28Vulpes_vulpes%29_-_British_Wildlife_Centre-3.jpg" },
            { name: "Lince-europeu", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Eurasian_lynx_%28Lynx_lynx%29.jpg/320px-Eurasian_lynx_%28Lynx_lynx%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/480px-Tour_Eiffel_Wikimedia_Commons.jpg",
        capital: "Paris", population: "68 milhões", area: "643.801 km²", climate: "Oceânico / Mediterrâneo"
    },
    "Suriname": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Paramaribo", population: "534 mil", area: "163.820 km²", climate: "Tropical / Equatorial"
    },
    "Guyana": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Georgetown", population: "785 mil", area: "214.969 km²", climate: "Tropical / Equatorial"
    },
    "South Korea": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Seoul", population: "50 milhões", area: "100.210 km²", climate: "Tropical / Subtropical"
    },
    "North Korea": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Pyongyang", population: "25 milhões", area: "120.538 km²", climate: "Tropical / Subtropical"
    },
    "Morocco": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Rabat", population: "33 milhões", area: "446.550 km²", climate: "Desértico / Árido"
    },
    "Western Sahara": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "El Aaiún", population: "586 mil", area: "266.000 km²", climate: "Desértico / Árido"
    },
    "Costa Rica": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "San José", population: "4,7 milhões", area: "51.100 km²", climate: "Tropical / Equatorial"
    },
    "Nicaragua": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Managua", population: "6,1 milhões", area: "130.373 km²", climate: "Tropical / Equatorial"
    },
    "Republic of the Congo": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Brazzaville", population: "4,6 milhões", area: "342.000 km²", climate: "Tropical / Equatorial"
    },
    "Democratic Republic of the Congo": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Kinshasa", population: "69 milhões", area: "2.344.858 km²", climate: "Tropical / Equatorial"
    },
    "Bhutan": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Leopardo-das-neves", "Iaque", "Cabra-montesa", "Lama"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Iaque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Simien_Mts_12.jpg/480px-Simien_Mts_12.jpg",
        capital: "Thimphu", population: "755 mil", area: "38.394 km²", climate: "Tropical / Subtropical"
    },
    "Ukraine": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Kyiv", population: "43 milhões", area: "603.700 km²", climate: "Temperado / Continental"
    },
"Belarus": {
        biome: "temp-forest",
        symbol: "🐻",
        animals: ["Lince-europeu", "Alce", "Urso-pardo", "Grou", "Ganso-selvagem"],
        animalImgs: [
            { name: "Urso-pardo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/320px-2010-kodiak-bear-1.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Minsk_Cathedral.jpg/480px-Minsk_Cathedral.jpg",
        capital: "Minsk", population: "9.5 milhões", area: "207.600 km²", climate: "Temperado / Continental"
    },
"Namibia": {
        biome: "desert",
        symbol: "🦁",
        animals: ["Leão", "Guepardo", "Rinoceronte-negro", "Elefante-africano", "Órix"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/320px-Lion_waiting_in_Namibia.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Windhoek", population: "2.5 milhões", area: "824.292 km²", climate: "Desértico / Semiárido"
    },
"South Africa": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Rinoceronte-branco", "Leopardo", "Elefante-africano", "Avestruz"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/320px-Lion_waiting_in_Namibia.jpg" },
            { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/320px-African_Bush_Elephant.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Pretória", population: "60 milhões", area: "1.221.037 km²", climate: "Temperado / Semiárido"
    },
    "Saint Martin": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Sint Maarten": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Oman": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Muscat", population: "4,1 milhões", area: "309.500 km²", climate: "Desértico / Árido"
    },
    "Uzbekistan": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Leopardo-das-neves", "Iaque", "Cabra-montesa", "Lama"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Iaque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Simien_Mts_12.jpg/480px-Simien_Mts_12.jpg",
        capital: "Tashkent", population: "30 milhões", area: "447.400 km²", climate: "Montanhoso / Continental"
    },
    "Kazakhstan": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Leopardo-das-neves", "Iaque", "Cabra-montesa", "Lama"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Iaque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Simien_Mts_12.jpg/480px-Simien_Mts_12.jpg",
        capital: "Nur-Sultan", population: "17 milhões", area: "2.724.900 km²", climate: "Montanhoso / Continental"
    },
    "Tajikistan": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Leopardo-das-neves", "Iaque", "Cabra-montesa", "Lama"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Iaque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Simien_Mts_12.jpg/480px-Simien_Mts_12.jpg",
        capital: "Dushanbe", population: "8,2 milhões", area: "143.100 km²", climate: "Montanhoso / Continental"
    },
"Lithuania": {
        biome: "temp-forest",
        symbol: "🦊",
        animals: ["Lince-europeu", "Veado-nobre", "Cisne", "Lontra", "Águia"],
        animalImgs: [
            { name: "Lontra", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Otter_%28Lutra_lutra%29.jpg/320px-Otter_%28Lutra_lutra%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vilnius_old_town.jpg/480px-Vilnius_old_town.jpg",
        capital: "Vilnius", population: "2.8 milhões", area: "65.300 km²", climate: "Continental"
    },
"Brazil": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Boto-cor-de-rosa", "Tamanduá-bandeira", "Mico-leão-dourado"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" },
            { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hyacinth-macaw.jpg/320px-Hyacinth-macaw.jpg" },
            { name: "Boto-cor-de-rosa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Boto_cor_de_rosa.jpg/320px-Boto_cor_de_rosa.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Brasília", population: "215 milhões", area: "8.515.767 km²", climate: "Tropical / Equatorial"
    },
    "Uruguay": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Montevideo", population: "3,4 milhões", area: "181.034 km²", climate: "Tropical / Equatorial"
    },
    "Mongolia": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Leopardo-das-neves", "Iaque", "Cabra-montesa", "Lama"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Iaque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Simien_Mts_12.jpg/480px-Simien_Mts_12.jpg",
        capital: "Ulaanbaatar", population: "3,0 milhões", area: "1.564.110 km²", climate: "Montanhoso / Continental"
    },
"Russia": {
        biome: "taiga",
        symbol: "🐻",
        animals: ["Urso-pardo", "Tigre-siberiano", "Lince-euroasiático", "Lobo-cinzento", "Caribú"],
        animalImgs: [
            { name: "Urso-pardo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/320px-2010-kodiak-bear-1.jpg" },
            { name: "Tigre-siberiano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Amur_Tiger_Vladivostok_Zoo.jpg/320px-Amur_Tiger_Vladivostok_Zoo.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lake_Baikal_from_the_Space.jpg/480px-Lake_Baikal_from_the_Space.jpg",
        capital: "Moscou", population: "144 milhões", area: "17.098.242 km²", climate: "Continental / Polar"
    },
"Czechia": {
        biome: "temp-forest",
        symbol: "🦌",
        animals: ["Veado-nobre", "Lince-europeu", "Águia-real", "Corvo", "Grou"],
        animalImgs: [
            { name: "Lince-europeu", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Eurasian_lynx_%28Lynx_lynx%29.jpg/320px-Eurasian_lynx_%28Lynx_lynx%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Prague_Mala_Strana.jpg/480px-Prague_Mala_Strana.jpg",
        capital: "Praga", population: "10.7 milhões", area: "78.871 km²", climate: "Temperado / Continental"
    },
"Germany": {
        biome: "temp-forest",
        symbol: "🦅",
        animals: ["Lobo-europeu", "Cegonha-branca", "Lince-europeu", "Ouriço-europeu", "Veado-nobre"],
        animalImgs: [
            { name: "Lobo-europeu", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kolm%C3%A5rden_Wolf.jpg/320px-Kolm%C3%A5rden_Wolf.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Neuschwanstein_Castle_SW_view.jpg/480px-Neuschwanstein_Castle_SW_view.jpg",
        capital: "Berlim", population: "84 milhões", area: "357.114 km²", climate: "Oceânico / Continental"
    },
"Estonia": {
        biome: "taiga",
        symbol: "🦌",
        animals: ["Rena", "Lince-europeu", "Alce", "Coruja", "Castor"],
        animalImgs: [
            { name: "Rena", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reindeer_-_Troms%C3%B8.jpg/320px-Reindeer_-_Troms%C3%B8.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tallinn_old_town.jpg/480px-Tallinn_old_town.jpg",
        capital: "Tallinn", population: "1.3 milhão", area: "45.227 km²", climate: "Subártico / Marítimo"
    },
"Latvia": {
        biome: "taiga",
        symbol: "🦌",
        animals: ["Lince-europeu", "Alce", "Aguia", "Corvo", "Castor"],
        animalImgs: [
            { name: "Alce", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Northern_Moose_%28Alces_alces_borealis%29.jpg/320px-Northern_Moose_%28Alces_alces_borealis%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Riga_Old_Town.jpg/480px-Riga_Old_Town.jpg",
        capital: "Riga", population: "1.9 milhão", area: "64.589 km²", climate: "Marítimo / Continental"
    },
"Norway": {
        biome: "taiga",
        symbol: "🦌",
        animals: ["Rena-norueguesa", "Lemingue", "Urso-pardo", "Lobo-cinzento", "Salmão-atlântico"],
        animalImgs: [
            { name: "Rena-norueguesa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Reindeer_Svalbard_1.jpg/320px-Reindeer_Svalbard_1.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Geiranger-fjord%2C_Norway.jpg/480px-Geiranger-fjord%2C_Norway.jpg",
        capital: "Oslo", population: "5 milhões", area: "385.207 km²", climate: "Subártico / Oceânico"
    },
"Sweden": {
        biome: "taiga",
        symbol: "🦌",
        animals: ["Alce-europeu", "Urso-pardo", "Lince-europeu", "Lobo-cinzento", "Doninhas"],
        animalImgs: [
            { name: "Alce-europeu", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Moose_superior.jpg/320px-Moose_superior.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stockholm_-_Kastellet_2013.jpg/480px-Stockholm_-_Kastellet_2013.jpg",
        capital: "Estocolmo", population: "10 milhões", area: "450.295 km²", climate: "Temperado / Subártico"
    },
"Finland": {
        biome: "taiga",
        symbol: "🦉",
        animals: ["Coruja-das-neves", "Urso-pardo", "Lince-europeu", "Rena", "Lobo-cinzento"],
        animalImgs: [
            { name: "Coruja-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Snowy_Owl_%28Bubo_scandiacus%29.jpg/320px-Snowy_Owl_%28Bubo_scandiacus%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rovaniemi_Aurora.jpg/480px-Rovaniemi_Aurora.jpg",
        capital: "Helsinki", population: "5.5 milhões", area: "338.455 km²", climate: "Subártico / Continental"
    },
    "Vietnam": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Hanoi", population: "90 milhões", area: "331.212 km²", climate: "Tropical / Subtropical"
    },
    "Cambodia": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Phnom Penh", population: "15 milhões", area: "181.035 km²", climate: "Tropical / Subtropical"
    },
    "Luxembourg": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Luxembourg", population: "550 mil", area: "2.586 km²", climate: "Temperado / Continental"
    },
    "United Arab Emirates": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Abu Dhabi", population: "9,4 milhões", area: "83.600 km²", climate: "Desértico / Árido"
    },
    "Belgium": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Brussels", population: "11 milhões", area: "30.528 km²", climate: "Temperado / Continental"
    },
"Georgia": {
        biome: "mountain",
        symbol: "🦅",
        animals: ["Aguia-dourada", "Leopardo-das-neves", "Cabra-montesa", "Urso-pardo", "Coruja"],
        animalImgs: [
            { name: "Aguia-dourada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Golden_Eagle_%28Aquila_chrysaetos%29.jpg/320px-Golden_Eagle_%28Aquila_chrysaetos%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Tbilisi_skyline.jpg/480px-Tbilisi_skyline.jpg",
        capital: "Tbilisi", population: "4 milhões", area: "69.700 km²", climate: "Montanhoso / Mediterrâneo"
    },
"North Macedonia": {
        biome: "mountain",
        symbol: "🦅",
        animals: ["Cabra-montesa", "Aguia-real", "Veado", "Lince-europeu", "Coruja"],
        animalImgs: [
            { name: "Cabra-montesa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Chamois_in_Tatra.jpg/320px-Chamois_in_Tatra.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Skopje_Old_Bridge.jpg/480px-Skopje_Old_Bridge.jpg",
        capital: "Skopje", population: "2 milhões", area: "25.713 km²", climate: "Continental / Mediterrâneo"
    },
"Albania": {
        biome: "mountain",
        symbol: "🦉",
        animals: ["Aguia-dourada", "Cabra-montesa", "Veado", "Urso-pardo", "Pardal"],
        animalImgs: [
            { name: "Aguia-dourada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Golden_Eagle_%28Aquila_chrysaetos%29.jpg/320px-Golden_Eagle_%28Aquila_chrysaetos%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Tirana_Mountain_View.jpg/480px-Tirana_Mountain_View.jpg",
        capital: "Tirana", population: "2.8 milhões", area: "28.748 km²", climate: "Mediterrâneo / Continental"
    },
"Azerbaijan": {
        biome: "mountain",
        symbol: "🦅",
        animals: ["Aguia", "Coruja", "Cabra-montesa", "Guepardo", "Grou"],
        animalImgs: [
            { name: "Coruja", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Great_Horned_Owl_%28Bubo_virginianus%29.jpg/320px-Great_Horned_Owl_%28Bubo_virginianus%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baku_Fire_Tower.jpg/480px-Baku_Fire_Tower.jpg",
        capital: "Baku", population: "10 milhões", area: "86.600 km²", climate: "Semiarido / Montanhoso"
    },
"Kosovo": {
        biome: "mountain",
        symbol: "🦅",
        animals: ["Cabra-montesa", "Lince-europeu", "Águia-real", "Veado", "Coruja"],
        animalImgs: [
            { name: "Lince-europeu", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Eurasian_lynx_%28Lynx_lynx%29.jpg/320px-Eurasian_lynx_%28Lynx_lynx%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Pristina_view.jpg/480px-Pristina_view.jpg",
        capital: "Pristina", population: "1.8 milhão", area: "10.908 km²", climate: "Continental / Mediterrâneo"
    },
    "Turkey": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Ankara", population: "77 milhões", area: "783.562 km²", climate: "Tropical / Subtropical"
    },
"Spain": {
        biome: "mediterranean",
        symbol: "🐂",
        animals: ["Lince-ibérico", "Cegonha-branca", "Águia-imperial-ibérica", "Urso-pardo-cantábrico", "Flamingo"],
        animalImgs: [
            { name: "Lince-ibérico", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Lynx_pardinus_-_01.jpg/320px-Lynx_pardinus_-_01.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Alhambra_%28Granada%29.jpg/480px-Alhambra_%28Granada%29.jpg",
        capital: "Madrid", population: "47 milhões", area: "505.990 km²", climate: "Mediterrâneo / Semiárido"
    },
    "Laos": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Vientiane", population: "6,7 milhões", area: "236.800 km²", climate: "Tropical / Subtropical"
    },
    "Kyrgyzstan": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Leopardo-das-neves", "Iaque", "Cabra-montesa", "Lama"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Iaque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Simien_Mts_12.jpg/480px-Simien_Mts_12.jpg",
        capital: "Bishkek", population: "5,8 milhões", area: "199.951 km²", climate: "Montanhoso / Continental"
    },
"Armenia": {
        biome: "mountain",
        symbol: "🦅",
        animals: ["Leopardo-das-neves", "Aguia-dourada", "Cabra-montesa", "Urso-pardo", "Coruja"],
        animalImgs: [
            { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Snow_leopard_%28Panthera_uncia%29.jpg/320px-Snow_leopard_%28Panthera_uncia%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Yerevan_Mountain_View.jpg/480px-Yerevan_Mountain_View.jpg",
        capital: "Erevan", population: "3 milhões", area: "29.743 km²", climate: "Montanhoso / Continental"
    },
    "Denmark": {
        biome: "taiga",
        symbol: "🌲",
        animals: ["Lobo-cinzento", "Alce", "Lince-euroasiático", "Urso-pardo", "Caribú"],
        animalImgs: [
            { name: "Lobo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Alce", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Lince-euroasiático", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lake_Baikal_from_the_Space.jpg/480px-Lake_Baikal_from_the_Space.jpg",
        capital: "Copenhagen", population: "5,7 milhões", area: "43.094 km²", climate: "Subártico / Oceânico"
    },
    "Libya": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Tripoli", population: "6,3 milhões", area: "1.759.540 km²", climate: "Desértico / Árido"
    },
    "Tunisia": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Tunis", population: "11 milhões", area: "163.610 km²", climate: "Desértico / Árido"
    },
"Romania": {
        biome: "temp-forest",
        symbol: "🦌",
        animals: ["Urso-pardo", "Lobo-europeu", "Veado", "Águia-real", "Lince-europeu"],
        animalImgs: [
            { name: "Urso-pardo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Brown_bear_in_Piatra_Craiului_National_Park.jpg/320px-Brown_bear_in_Piatra_Craiului_National_Park.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bran_Castle%2C_Romania.jpg/480px-Bran_Castle%2C_Romania.jpg",
        capital: "Bucareste", population: "19 milhões", area: "238.397 km²", climate: "Continental / Mediterrâneo"
    },
"Hungary": {
        biome: "temp-forest",
        symbol: "🦅",
        animals: ["Grou", "Veado-nobre", "Pato-selvagem", "Raposa-vermelha", "Cisne"],
        animalImgs: [
            { name: "Grou", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Common_black_grouse_%28male%29.jpg/320px-Common_black_grouse_%28male%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Budapest_Hungary_Parliament.jpg/480px-Budapest_Hungary_Parliament.jpg",
        capital: "Budapeste", population: "9.7 milhões", area: "93.030 km²", climate: "Continental"
    },
"Slovakia": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Cabra-montesa", "Lince-europeu", "Águia-real", "Veado", "Urso-pardo"],
        animalImgs: [
            { name: "Cabra-montesa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Chamois_in_Tatra.jpg/320px-Chamois_in_Tatra.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/High_Tatras_Slovakia.jpg/480px-High_Tatras_Slovakia.jpg",
        capital: "Bratislava", population: "5.4 milhões", area: "49.035 km²", climate: "Continental"
    },
"Poland": {
        biome: "temp-forest",
        symbol: "🦉",
        animals: ["Bisonte-europeu", "Lince-europeu", "Urso-pardo", "Águia-real", "Cisne"],
        animalImgs: [
            { name: "Bisonte-europeu", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bison_bonasus_Bialowieza_dz3.jpg/320px-Bison_bonasus_Bialowieza_dz3.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Wawel_Castle_1.JPG/480px-Wawel_Castle_1.JPG",
        capital: "Varsóvia", population: "38 milhões", area: "312.696 km²", climate: "Continental"
    },
    "Ireland": {
        biome: "taiga",
        symbol: "🌲",
        animals: ["Lobo-cinzento", "Alce", "Lince-euroasiático", "Urso-pardo", "Caribú"],
        animalImgs: [
            { name: "Lobo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Alce", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Lince-euroasiático", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lake_Baikal_from_the_Space.jpg/480px-Lake_Baikal_from_the_Space.jpg",
        capital: "Dublin", population: "6,4 milhões", area: "70.273 km²", climate: "Subártico / Oceânico"
    },
"United Kingdom": {
        biome: "temp-forest",
        symbol: "🦁",
        animals: ["Corvo-da-torre", "Texugo-europeu", "Ouriço-europeu", "Lontra-europeia", "Esquilo-vermelho"],
        animalImgs: [
            { name: "Corvo-da-torre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Corvus_corax_-_Raven_%28crop%29.jpg/320px-Corvus_corax_-_Raven_%28crop%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/BigBen2008.jpg/480px-BigBen2008.jpg",
        capital: "Londres", population: "67 milhões", area: "243.610 km²", climate: "Oceânico / Temperado"
    },
"Greece": {
        biome: "mediterranean",
        symbol: "🦉",
        animals: ["Coruja-da-Atena", "Lobo-cinzento", "Coelho-europeu", "Golfinho-comum", "Tartaruga-loggerhead"],
        animalImgs: [
            { name: "Coruja-da-Atena", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Athene_noctua_Luc_Viatour_new.jpg/320px-Athene_noctua_Luc_Viatour_new.jpg" },
            { name: "Tartaruga-loggerhead", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Loggerhead_sea_turtle.jpg/320px-Loggerhead_sea_turtle.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Santorini_Greece.jpg/480px-Santorini_Greece.jpg",
        capital: "Atenas", population: "11 milhões", area: "131.957 km²", climate: "Mediterrâneo"
    },
    "Zambia": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Lusaka", population: "15 milhões", area: "752.612 km²", climate: "Tropical / Equatorial"
    },
    "Sierra Leone": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Freetown", population: "6,2 milhões", area: "71.740 km²", climate: "Tropical / Equatorial"
    },
    "Guinea": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Conakry", population: "11 milhões", area: "245.857 km²", climate: "Tropical / Equatorial"
    },
    "Liberia": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Monrovia", population: "4,4 milhões", area: "111.369 km²", climate: "Tropical / Equatorial"
    },
    "Central African Republic": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Bangui", population: "4,7 milhões", area: "622.984 km²", climate: "Tropical / Equatorial"
    },
    "Sudan": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Khartoum", population: "37 milhões", area: "1.886.068 km²", climate: "Desértico / Árido"
    },
    "Djibouti": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Djibouti", population: "886 mil", area: "23.200 km²", climate: "Tropical / Equatorial"
    },
    "Eritrea": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Asmara", population: "6,5 milhões", area: "117.600 km²", climate: "Tropical / Equatorial"
    },
    "Austria": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Leopardo-das-neves", "Iaque", "Cabra-montesa", "Lama"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Iaque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Simien_Mts_12.jpg/480px-Simien_Mts_12.jpg",
        capital: "Vienna", population: "8,5 milhões", area: "83.871 km²", climate: "Temperado / Continental"
    },
    "Iraq": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Baghdad", population: "36 milhões", area: "438.317 km²", climate: "Desértico / Árido"
    },
"Italy": {
        biome: "mediterranean",
        symbol: "🐺",
        animals: ["Lobo-cinzento", "Lobo-apenino", "Camurça", "Lampreia", "Cavalo-selvagem"],
        animalImgs: [
            { name: "Lobo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kolm%C3%A5rden_Wolf.jpg/320px-Kolm%C3%A5rden_Wolf.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/480px-Colosseo_2020.jpg",
        capital: "Roma", population: "59 milhões", area: "301.340 km²", climate: "Mediterrâneo / Alpino"
    },
"Switzerland": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Cabra-montesa", "Marmota-das-alpes", "Águia-dourada", "Camurça"],
        animalImgs: [
            { name: "Cabra-montesa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Rupicapra_rupicapra_Dolomites.jpg/320px-Rupicapra_rupicapra_Dolomites.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Switzerland_landscape.jpg/480px-Switzerland_landscape.jpg",
        capital: "Berna", population: "8.7 milhões", area: "41.285 km²", climate: "Temperado / Alpino"
    },
    "Iran": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Tehran", population: "78 milhões", area: "1.648.195 km²", climate: "Desértico / Árido"
    },
    "Netherlands": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Amsterdam", population: "17 milhões", area: "41.850 km²", climate: "Temperado / Continental"
    },
    "Liechtenstein": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Vaduz", population: "37 mil", area: "160 km²", climate: "Temperado / Continental"
    },
    "Ivory Coast": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Yamoussoukro", population: "24 milhões", area: "322.463 km²", climate: "Tropical / Equatorial"
    },
    "Republic of Serbia": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Belgrade", population: "7,2 milhões", area: "49.037 km²", climate: "Temperado / Continental"
    },
    "Mali": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Bamako", population: "16 milhões", area: "1.240.192 km²", climate: "Tropical / Equatorial"
    },
    "Senegal": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Dakar", population: "14 milhões", area: "196.722 km²", climate: "Tropical / Equatorial"
    },
"Nigeria": {
        biome: "tropical-forest",
        symbol: "🦅",
        animals: ["Águia-coroada", "Elefante-africano", "Chimpanzé", "Mandrill", "Pantera-africana"],
        animalImgs: [
            { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/320px-African_Bush_Elephant.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Abuja", population: "220 milhões", area: "923.768 km²", climate: "Tropical / Equatorial"
    },
    "Benin": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Porto-Novo", population: "10,0 milhões", area: "112.622 km²", climate: "Tropical / Equatorial"
    },
    "Angola": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Luanda", population: "24 milhões", area: "1.246.700 km²", climate: "Tropical / Equatorial"
    },
"Croatia": {
        biome: "mediterranean",
        symbol: "🦅",
        animals: ["Golfinho-comum", "Veado-nobre", "Urso-pardo", "Lontra", "Águia-real"],
        animalImgs: [
            { name: "Golfinho-comum", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tursiops_truncatus_01.jpg/320px-Tursiops_truncatus_01.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dubrovnik_Panorama.jpg/480px-Dubrovnik_Panorama.jpg",
        capital: "Zagreb", population: "4 milhões", area: "56.594 km²", climate: "Mediterrâneo / Continental"
    },
"Slovenia": {
        biome: "mountain",
        symbol: "🦅",
        animals: ["Lince-europeu", "Cabra-montesa", "Urso-pardo", "Águia-real", "Lontra"],
        animalImgs: [
            { name: "Lontra", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Otter_%28Lutra_lutra%29.jpg/320px-Otter_%28Lutra_lutra%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Lake_Bled_Slovenia.jpg/480px-Lake_Bled_Slovenia.jpg",
        capital: "Liubliana", population: "2.1 milhões", area: "20.273 km²", climate: "Alpino / Continental"
    },
    "Qatar": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Doha", population: "2,3 milhões", area: "11.586 km²", climate: "Desértico / Árido"
    },
"Saudi Arabia": {
        biome: "desert",
        symbol: "🐫",
        animals: ["Camelo-árabe", "Oryx-arábico", "Lince-arábico", "Houbara", "Cobra-cornuda"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/CamelCase.jpg/320px-CamelCase.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Riade", population: "35 milhões", area: "2.149.690 km²", climate: "Desértico / Árido"
    },
    "Botswana": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Gaborone", population: "2,0 milhões", area: "582.000 km²", climate: "Tropical / Equatorial"
    },
    "Zimbabwe": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Harare", population: "13 milhões", area: "390.757 km²", climate: "Tropical / Equatorial"
    },
    "Pakistan": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Leopardo-das-neves", "Iaque", "Cabra-montesa", "Lama"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Iaque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Simien_Mts_12.jpg/480px-Simien_Mts_12.jpg",
        capital: "Islamabad", population: "188 milhões", area: "881.912 km²", climate: "Tropical / Subtropical"
    },
"Bulgaria": {
        biome: "temp-forest",
        symbol: "🐺",
        animals: ["Lince-europeu", "Urso-pardo", "Veado-nobre", "Grou", "Cisne"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Red_Deer_-_stag.jpg/320px-Red_Deer_-_stag.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rila_Monastery.jpg/480px-Rila_Monastery.jpg",
        capital: "Sófia", population: "7 milhões", area: "110.994 km²", climate: "Continental / Mediterrâneo"
    },
    "Thailand": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Bangkok", population: "65 milhões", area: "513.120 km²", climate: "Tropical / Subtropical"
    },
    "San Marino": {
        biome: "mediterranean",
        symbol: "🍋",
        animals: ["Lince-ibérico", "Cegonha-branca", "Tartaruga-loggerhead", "Macaco-de-Barbária", "Coelho-europeu"],
        animalImgs: [
            { name: "Lince-ibérico", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Cegonha-branca", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tartaruga-loggerhead", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Alhambra_%28Granada%29.jpg/480px-Alhambra_%28Granada%29.jpg",
        capital: "City of San Marino", population: "33 mil", area: "61 km²", climate: "Mediterrâneo"
    },
    "Haiti": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Port-au-Prince", population: "11 milhões", area: "27.750 km²", climate: "Tropical / Equatorial"
    },
    "Dominican Republic": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Santo Domingo", population: "10 milhões", area: "48.671 km²", climate: "Tropical / Equatorial"
    },
    "Chad": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "N'Djamena", population: "13 milhões", area: "1.284.000 km²", climate: "Tropical / Equatorial"
    },
    "Kuwait": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Kuwait City", population: "3,3 milhões", area: "17.818 km²", climate: "Desértico / Árido"
    },
    "El Salvador": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "San Salvador", population: "6,4 milhões", area: "21.041 km²", climate: "Tropical / Equatorial"
    },
    "Guatemala": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Guatemala City", population: "16 milhões", area: "108.889 km²", climate: "Tropical / Equatorial"
    },
    "East Timor": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Dili", population: "1,2 milhões", area: "14.874 km²", climate: "Tropical / Subtropical"
    },
    "Brunei": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Bandar Seri Begawan", population: "393 mil", area: "5.765 km²", climate: "Tropical / Subtropical"
    },
    "Monaco": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Monaco", population: "37 mil", area: "2 km²", climate: "Temperado / Continental"
    },
    "Algeria": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Algiers", population: "39 milhões", area: "2.381.741 km²", climate: "Desértico / Árido"
    },
    "Mozambique": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Maputo", population: "25 milhões", area: "801.590 km²", climate: "Tropical / Equatorial"
    },
    "eSwatini": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Lobamba", population: "1,1 milhões", area: "17.364 km²", climate: "Tropical / Equatorial"
    },
    "Burundi": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Bujumbura", population: "9,5 milhões", area: "27.834 km²", climate: "Tropical / Equatorial"
    },
    "Rwanda": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Kigali", population: "11 milhões", area: "26.338 km²", climate: "Tropical / Equatorial"
    },
    "Myanmar": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Naypyidaw", population: "54 milhões", area: "676.578 km²", climate: "Tropical / Subtropical"
    },
    "Bangladesh": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Dhaka", population: "157 milhões", area: "147.570 km²", climate: "Tropical / Subtropical"
    },
    "Andorra": {
        biome: "mediterranean",
        symbol: "🍋",
        animals: ["Lince-ibérico", "Cegonha-branca", "Tartaruga-loggerhead", "Macaco-de-Barbária", "Coelho-europeu"],
        animalImgs: [
            { name: "Lince-ibérico", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Cegonha-branca", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tartaruga-loggerhead", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Alhambra_%28Granada%29.jpg/480px-Alhambra_%28Granada%29.jpg",
        capital: "Andorra la Vella", population: "82 mil", area: "467 km²", climate: "Mediterrâneo"
    },
    "Afghanistan": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Kabul", population: "26 milhões", area: "652.230 km²", climate: "Tropical / Subtropical"
    },
"Montenegro": {
        biome: "mountain",
        symbol: "🦌",
        animals: ["Cabra-montesa", "Lince-europeu", "Urso-pardo", "Aguia-dourada", "Veado"],
        animalImgs: [
            { name: "Aguia-dourada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Golden_eagle_perched.jpg/320px-Golden_eagle_perched.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kotor_Bay_Montenegro.jpg/480px-Kotor_Bay_Montenegro.jpg",
        capital: "Podgorica", population: "0.62 milhão", area: "13.812 km²", climate: "Mediterrâneo / Alpino"
    },
"Bosnia and Herzegovina": {
        biome: "temp-forest",
        symbol: "🦁",
        animals: ["Lince-europeu", "Veado", "Urso-pardo", "Águia-real", "Cabra-montesa"],
        animalImgs: [
            { name: "Águia-real", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Golden_eagle_in_flight.jpg/320px-Golden_eagle_in_flight.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Sarajevo_old_town.jpg/480px-Sarajevo_old_town.jpg",
        capital: "Sarajevo", population: "3.3 milhões", area: "51.209 km²", climate: "Continental / Mediterrâneo"
    },
    "Uganda": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Kampala", population: "35 milhões", area: "241.550 km²", climate: "Tropical / Equatorial"
    },
    "US Naval Base Guantanamo Bay": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Cuba": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Havana", population: "11 milhões", area: "109.884 km²", climate: "Tropical / Equatorial"
    },
    "Honduras": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Tegucigalpa", population: "8,7 milhões", area: "112.492 km²", climate: "Tropical / Equatorial"
    },
    "Ecuador": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Quito", population: "16 milhões", area: "276.841 km²", climate: "Tropical / Equatorial"
    },
"Colombia": {
        biome: "tropical-forest",
        symbol: "🦜",
        animals: ["Tucano", "Onça-pintada", "Tapir", "Boto-cor-de-rosa", "Preguiça-de-três-dedos"],
        animalImgs: [
            { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Toucan_Beak.jpg/320px-Toucan_Beak.jpg" },
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Bogotá", population: "52 milhões", area: "1.141.748 km²", climate: "Tropical / Andino"
    },
    "Paraguay": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Asunción", population: "6,9 milhões", area: "406.752 km²", climate: "Tropical / Equatorial"
    },
    "Brazilian Island": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
"Portugal": {
        biome: "mediterranean",
        symbol: "🐓",
        animals: ["Lince-ibérico", "Golfinho-comum", "Cegonha-branca", "Pato-real", "Texugo-europeu"],
        animalImgs: [
            { name: "Lince-ibérico", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Lynx_pardinus_-_01.jpg/320px-Lynx_pardinus_-_01.jpg" },
            { name: "Golfinho-comum", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Common_Bottlenose_Dolphin_noaa.jpg/320px-Common_Bottlenose_Dolphin_noaa.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pena_Palace.jpg/480px-Pena_Palace.jpg",
        capital: "Lisboa", population: "10 milhões", area: "92.212 km²", climate: "Mediterrâneo / Oceânico"
    },
"Moldova": {
        biome: "temp-forest",
        symbol: "🦔",
        animals: ["Lince-europeu", "Veado", "Coelho", "Pato-selvagem", "Corvo"],
        animalImgs: [
            { name: "Veado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fallow_deer_%28male%29.jpg/320px-Fallow_deer_%28male%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Chisinau_City_Center.jpg/480px-Chisinau_City_Center.jpg",
        capital: "Chișinău", population: "2.6 milhões", area: "33.846 km²", climate: "Continental"
    },
    "Turkmenistan": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Condor-dos-Andes", "Leopardo-das-neves", "Iaque", "Cabra-montesa", "Lama"],
        animalImgs: [
            { name: "Condor-dos-Andes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Iaque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Simien_Mts_12.jpg/480px-Simien_Mts_12.jpg",
        capital: "Ashgabat", population: "5,8 milhões", area: "488.100 km²", climate: "Montanhoso / Continental"
    },
    "Jordan": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Amman", population: "6,7 milhões", area: "89.342 km²", climate: "Desértico / Árido"
    },
"Nepal": {
        biome: "mountain",
        symbol: "🏔️",
        animals: ["Leopardo-das-neves", "Iaque", "Panda-vermelho", "Faisão-do-nepal"],
        animalImgs: [
            { name: "Leopardo-das-neves", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Snow_leopard_%28Panthera_uncia%29%2C_Shenzhen.jpg/320px-Snow_leopard_%28Panthera_uncia%29%2C_Shenzhen.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mount_Everest_as_seen_from_Drukair2.jpg/480px-Mount_Everest_as_seen_from_Drukair2.jpg",
        capital: "Katmandu", population: "30 milhões", area: "147.516 km²", climate: "Frio de Montanha"
    },
    "Lesotho": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Maseru", population: "2,1 milhões", area: "30.355 km²", climate: "Tropical / Equatorial"
    },
    "Cameroon": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Yaoundé", population: "20 milhões", area: "475.442 km²", climate: "Tropical / Equatorial"
    },
    "Gabon": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Libreville", population: "1,7 milhões", area: "267.668 km²", climate: "Tropical / Equatorial"
    },
    "Niger": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Niamey", population: "17 milhões", area: "1.267.000 km²", climate: "Tropical / Equatorial"
    },
    "Burkina Faso": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Ouagadougou", population: "17 milhões", area: "272.967 km²", climate: "Tropical / Equatorial"
    },
    "Togo": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Lomé", population: "7,0 milhões", area: "56.785 km²", climate: "Tropical / Equatorial"
    },
    "Ghana": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Accra", population: "27 milhões", area: "238.533 km²", climate: "Tropical / Equatorial"
    },
    "Guinea-Bissau": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Bissau", population: "1,7 milhões", area: "36.125 km²", climate: "Tropical / Equatorial"
    },
    "Gibraltar": {
        biome: "mediterranean",
        symbol: "🍋",
        animals: ["Lince-ibérico", "Cegonha-branca", "Tartaruga-loggerhead", "Macaco-de-Barbária", "Coelho-europeu"],
        animalImgs: [
            { name: "Lince-ibérico", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Cegonha-branca", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tartaruga-loggerhead", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Alhambra_%28Granada%29.jpg/480px-Alhambra_%28Granada%29.jpg",
        capital: "Gibraltar", population: "30 mil", area: "6 km²", climate: "Mediterrâneo"
    },
"United States of America": {
        biome: "temp-forest",
        symbol: "🦅",
        animals: ["Águia-careca", "Bisão-americano", "Urso-pardo", "Alce", "Puma"],
        animalImgs: [
            { name: "Águia-careca", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bald_Eagle_Portrait.jpg/320px-Bald_Eagle_Portrait.jpg" },
            { name: "Bisão-americano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/American_bison_k5680-1.jpg/320px-American_bison_k5680-1.jpg" },
            { name: "Urso-pardo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/320px-2010-kodiak-bear-1.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Washington D.C.", population: "335 milhões", area: "9.833.517 km²", climate: "Temperado / Continental"
    },
"Canada": {
        biome: "taiga",
        symbol: "🦫",
        animals: ["Castor", "Urso-polar", "Lince-canadense", "Alce", "Caribú"],
        animalImgs: [
            { name: "Castor", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/320px-American_Beaver.jpg" },
            { name: "Urso-polar", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/320px-Polar_Bear_-_Alaska_%28cropped%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Moraine_Lake_17092005.jpg/480px-Moraine_Lake_17092005.jpg",
        capital: "Ottawa", population: "38 milhões", area: "9.984.670 km²", climate: "Subártico / Temperado"
    },
"Mexico": {
        biome: "savanna",
        symbol: "🦅",
        animals: ["Águia-real", "Ocelote", "Axolote", "Guacamayo-verde", "Coiote"],
        animalImgs: [
            { name: "Águia-real", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aquila_chrysaetos_2_%28Bohuslav_Matu%C5%A1%C3%ADk%29.jpg/320px-Aquila_chrysaetos_2_%28Bohuslav_Matu%C5%A1%C3%ADk%29.jpg" },
            { name: "Ocelote", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ocelot_%28Leopardus_pardalis%29.jpg/320px-Ocelot_%28Leopardus_pardalis%29.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Teotihuacan_Nap%C3%A1.jpg/480px-Teotihuacan_Nap%C3%A1.jpg",
        capital: "Cidade do México", population: "130 milhões", area: "1.964.375 km²", climate: "Tropical / Árido"
    },
    "Belize": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Belmopan", population: "350 mil", area: "22.966 km²", climate: "Tropical / Equatorial"
    },
    "Panama": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Panama City", population: "3,7 milhões", area: "75.417 km²", climate: "Tropical / Equatorial"
    },
"Venezuela": {
        biome: "tropical-forest",
        symbol: "🐊",
        animals: ["Jacaré-do-orinoco", "Arara-azul", "Manatim", "Lontra-gigante", "Anta"],
        animalImgs: [
            { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hyacinth-macaw.jpg/320px-Hyacinth-macaw.jpg" },
            { name: "Lontra-gigante", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Pteronura_brasiliensis.jpg/320px-Pteronura_brasiliensis.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Angel_Falls.jpg/480px-Angel_Falls.jpg",
        capital: "Caracas", population: "28 milhões", area: "916.445 km²", climate: "Tropical / Equatorial"
    },
    "Papua New Guinea": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Port Moresby", population: "7,4 milhões", area: "462.840 km²", climate: "Tropical / Oceânico"
    },
"Egypt": {
        biome: "desert",
        symbol: "🐪",
        animals: ["Camelo-árabe", "Escorpião-dourado", "Víbora-do-deserto", "Gato-selvagem", "Falcão-peregrino"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/CamelCase.jpg/320px-CamelCase.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Cairo", population: "104 milhões", area: "1.002.450 km²", climate: "Desértico / Árido"
    },
    "Yemen": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Sana'a", population: "26 milhões", area: "527.968 km²", climate: "Desértico / Árido"
    },
    "Mauritania": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Nouakchott", population: "3,5 milhões", area: "1.030.700 km²", climate: "Tropical / Equatorial"
    },
    "Equatorial Guinea": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Malabo", population: "1,4 milhões", area: "28.051 km²", climate: "Tropical / Equatorial"
    },
    "Gambia": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Banjul", population: "1,9 milhões", area: "11.295 km²", climate: "Tropical / Equatorial"
    },
    "Hong Kong S.A.R.": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Vatican": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Northern Cyprus": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Cyprus No Mans Area": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Siachen Glacier": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Baykonur Cosmodrome": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Akrotiri Sovereign Base Area": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Southern Patagonian Ice Field": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Bir Tawil": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Antarctica": {
        biome: "polar",
        symbol: "❄️",
        animals: ["Pinguim-imperador", "Orca", "Morsa", "Foca-da-groelândia", "Baleia-jubarte"],
        animalImgs: [
            { name: "Pinguim-imperador", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Orca", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Morsa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Greenland_%2813990460099%29.jpg/480px-Above_Greenland_%2813990460099%29.jpg",
        capital: "—", population: "—", area: "—", climate: "Polar / Glacial"
    },
"Australia": {
        biome: "desert",
        symbol: "🦘",
        animals: ["Canguru-vermelho", "Coala", "Ornitorrinco", "Diabo-da-Tasmânia", "Emu"],
        animalImgs: [
            { name: "Coala", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/320px-Koala_climbing_tree.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Camberra", population: "26 milhões", area: "7.741.220 km²", climate: "Desértico / Semiárido"
    },
"Greenland": {
        biome: "polar",
        symbol: "🐻‍❄️",
        animals: ["Urso-polar", "Morsa", "Raposa-ártica", "Foca-da-groelândia", "Caribú"],
        animalImgs: [
            { name: "Urso-polar", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/320px-Polar_Bear_-_Alaska_%28cropped%29.jpg" },
            { name: "Morsa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Pacific_Walrus_-_Bull_%288247646168%29.jpg/320px-Pacific_Walrus_-_Bull_%288247646168%29.jpg" }
        ],
        biomeImg: "img/tundra_biome_hero_1777760888905.png",
        capital: "Nuuk", population: "56 mil", area: "2.166.086 km²", climate: "Polar / Ártico"
    },
    "Fiji": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Suva", population: "859 mil", area: "18.272 km²", climate: "Tropical / Oceânico"
    },
"New Zealand": {
        biome: "temp-forest",
        symbol: "🦜",
        animals: ["Kiwi", "Kea", "Tuatara", "Golfinho-dusky", "Baleia-jubarte"],
        animalImgs: [
            { name: "Kiwi", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Apteryx_mantelli_-_crop.jpg/320px-Apteryx_mantelli_-_crop.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Milford_Sound_2.jpg/480px-Milford_Sound_2.jpg",
        capital: "Wellington", population: "5 milhões", area: "268.021 km²", climate: "Oceânico / Temperado"
    },
    "New Caledonia": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Nouméa", population: "269 mil", area: "18.575 km²", climate: "Tropical / Oceânico"
    },
"Madagascar": {
        biome: "tropical-forest",
        symbol: "🐒",
        animals: ["Lêmure", "Fossa", "Camaleão-de-parsons", "Aye-aye", "Tenrec"],
        animalImgs: [
            { name: "Fossa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Cryptoprocta_ferox_-_Cryptoprocta_ferox.jpg/320px-Cryptoprocta_ferox_-_Cryptoprocta_ferox.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Madagascar_landscape.jpg/480px-Madagascar_landscape.jpg",
        capital: "Antananarivo", population: "28 milhões", area: "587.041 km²", climate: "Tropical / Monções"
    },
    "Philippines": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Manila", population: "101 milhões", area: "342.353 km²", climate: "Tropical / Subtropical"
    },
    "Sri Lanka": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Colombo", population: "20 milhões", area: "65.610 km²", climate: "Tropical / Subtropical"
    },
    "Curaçao": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Willemstad", population: "—", area: "—", climate: "Tropical / Equatorial"
    },
    "Aruba": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Oranjestad", population: "101 mil", area: "180 km²", climate: "Tropical / Equatorial"
    },
    "The Bahamas": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Nassau", population: "319 mil", area: "13.943 km²", climate: "Tropical / Equatorial"
    },
    "Turks and Caicos Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Cockburn Town", population: "—", area: "—", climate: "Tropical / Equatorial"
    },
    "Taiwan": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Taipei", population: "23 milhões", area: "36.193 km²", climate: "Tropical / Subtropical"
    },
"Japan": {
        biome: "temp-forest",
        symbol: "🦊",
        animals: ["Macaco-japonês", "Urso-pardo-japonês", "Tanuki", "Raposa-vermelha", "Grua-japonesa"],
        animalImgs: [
            { name: "Macaco-japonês", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Japanese_Macaque_%28Macaca_fuscata%29_-_Flickr.jpg/320px-Japanese_Macaque_%28Macaca_fuscata%29_-_Flickr.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Area.JPG/480px-Mount_Fuji_Japan_with_Snow%2C_Lakes_and_Surrounding_Area.JPG",
        capital: "Tóquio", population: "125 milhões", area: "377.975 km²", climate: "Temperado / Subtropical"
    },
    "Saint Pierre and Miquelon": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Saint-Pierre", population: "6 mil", area: "242 km²", climate: "Temperado / Continental"
    },
"Iceland": {
        biome: "tundra",
        symbol: "🐦",
        animals: ["Papagaio-do-mar", "Baleia-minke", "Raposa-ártica", "Rena-ártica", "Gyrfalcon"],
        animalImgs: [
            { name: "Papagaio-do-mar", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Puffin_at_Saltee_Islands.jpg/320px-Puffin_at_Saltee_Islands.jpg" },
            { name: "Raposa-ártica", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Alopes_lagopus_IMG_7654.jpg/320px-Alopes_lagopus_IMG_7654.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Iceland_Geysir_strokkur.jpg/480px-Iceland_Geysir_strokkur.jpg",
        capital: "Reykjavik", population: "370 mil", area: "103.000 km²", climate: "Polar / Subártico"
    },
    "Pitcairn Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Adamstown", population: "56", area: "47 km²", climate: "Tropical / Oceânico"
    },
    "French Polynesia": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Papeetē", population: "268 mil", area: "4.167 km²", climate: "Tropical / Oceânico"
    },
    "French Southern and Antarctic Lands": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Port-aux-Français", population: "140", area: "7.747 km²", climate: "Tropical / Equatorial"
    },
    "Seychelles": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Victoria", population: "90 mil", area: "452 km²", climate: "Tropical / Equatorial"
    },
    "Kiribati": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "South Tarawa", population: "106 mil", area: "811 km²", climate: "Tropical / Oceânico"
    },
    "Marshall Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Majuro", population: "56 mil", area: "181 km²", climate: "Tropical / Oceânico"
    },
    "Trinidad and Tobago": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Port of Spain", population: "1,3 milhões", area: "5.130 km²", climate: "Tropical / Equatorial"
    },
    "Grenada": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "St. George's", population: "103 mil", area: "344 km²", climate: "Tropical / Equatorial"
    },
    "Saint Vincent and the Grenadines": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Kingstown", population: "109 mil", area: "389 km²", climate: "Tropical / Equatorial"
    },
    "Barbados": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Bridgetown", population: "285 mil", area: "430 km²", climate: "Tropical / Equatorial"
    },
    "Saint Lucia": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Castries", population: "184 mil", area: "616 km²", climate: "Tropical / Equatorial"
    },
    "Dominica": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Roseau", population: "71 mil", area: "751 km²", climate: "Tropical / Equatorial"
    },
    "United States Minor Outlying Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "—", population: "—", area: "—", climate: "Tropical / Oceânico"
    },
    "Montserrat": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Plymouth", population: "5 mil", area: "102 km²", climate: "Tropical / Equatorial"
    },
    "Antigua and Barbuda": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Saint John's", population: "86 mil", area: "442 km²", climate: "Tropical / Equatorial"
    },
    "Saint Kitts and Nevis": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Basseterre", population: "55 mil", area: "261 km²", climate: "Tropical / Equatorial"
    },
    "United States Virgin Islands": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Saint Barthelemy": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Puerto Rico": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "San Juan", population: "3,6 milhões", area: "8.870 km²", climate: "Tropical / Equatorial"
    },
    "Anguilla": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "The Valley", population: "13 mil", area: "91 km²", climate: "Tropical / Equatorial"
    },
    "British Virgin Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Road Town", population: "—", area: "—", climate: "Tropical / Equatorial"
    },
    "Jamaica": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Kingston", population: "2,7 milhões", area: "10.991 km²", climate: "Tropical / Equatorial"
    },
    "Cayman Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "George Town", population: "55 mil", area: "264 km²", climate: "Tropical / Equatorial"
    },
    "Bermuda": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Hamilton", population: "64 mil", area: "54 km²", climate: "Temperado / Continental"
    },
    "Heard Island and McDonald Islands": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "412 km²", climate: "Temperado / Continental"
    },
    "Saint Helena": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Jamestown", population: "4 mil", area: "—", climate: "Tropical / Equatorial"
    },
    "Mauritius": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Port Louis", population: "1,3 milhões", area: "2.040 km²", climate: "Tropical / Equatorial"
    },
    "Comoros": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Moroni", population: "764 mil", area: "1.862 km²", climate: "Tropical / Equatorial"
    },
    "São Tomé and Principe": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Cabo Verde": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Praia", population: "518 mil", area: "4.033 km²", climate: "Tropical / Equatorial"
    },
    "Malta": {
        biome: "mediterranean",
        symbol: "🍋",
        animals: ["Lince-ibérico", "Cegonha-branca", "Tartaruga-loggerhead", "Macaco-de-Barbária", "Coelho-europeu"],
        animalImgs: [
            { name: "Lince-ibérico", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Cegonha-branca", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tartaruga-loggerhead", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Alhambra_%28Granada%29.jpg/480px-Alhambra_%28Granada%29.jpg",
        capital: "Valletta", population: "416 mil", area: "316 km²", climate: "Mediterrâneo"
    },
    "Jersey": {
        biome: "taiga",
        symbol: "🌲",
        animals: ["Lobo-cinzento", "Alce", "Lince-euroasiático", "Urso-pardo", "Caribú"],
        animalImgs: [
            { name: "Lobo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Alce", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Lince-euroasiático", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lake_Baikal_from_the_Space.jpg/480px-Lake_Baikal_from_the_Space.jpg",
        capital: "Saint Helier", population: "99 mil", area: "116 km²", climate: "Subártico / Oceânico"
    },
    "Guernsey": {
        biome: "taiga",
        symbol: "🌲",
        animals: ["Lobo-cinzento", "Alce", "Lince-euroasiático", "Urso-pardo", "Caribú"],
        animalImgs: [
            { name: "Lobo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Alce", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Lince-euroasiático", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lake_Baikal_from_the_Space.jpg/480px-Lake_Baikal_from_the_Space.jpg",
        capital: "St. Peter Port", population: "63 mil", area: "78 km²", climate: "Subártico / Oceânico"
    },
    "Isle of Man": {
        biome: "taiga",
        symbol: "🌲",
        animals: ["Lobo-cinzento", "Alce", "Lince-euroasiático", "Urso-pardo", "Caribú"],
        animalImgs: [
            { name: "Lobo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Alce", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Lince-euroasiático", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lake_Baikal_from_the_Space.jpg/480px-Lake_Baikal_from_the_Space.jpg",
        capital: "Douglas", population: "84 mil", area: "572 km²", climate: "Subártico / Oceânico"
    },
    "Aland": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Faroe Islands": {
        biome: "taiga",
        symbol: "🌲",
        animals: ["Lobo-cinzento", "Alce", "Lince-euroasiático", "Urso-pardo", "Caribú"],
        animalImgs: [
            { name: "Lobo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Alce", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Lince-euroasiático", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lake_Baikal_from_the_Space.jpg/480px-Lake_Baikal_from_the_Space.jpg",
        capital: "Tórshavn", population: "49 mil", area: "1.393 km²", climate: "Subártico / Oceânico"
    },
    "Indian Ocean Territories": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "British Indian Ocean Territory": {
        biome: "savanna",
        symbol: "🦁",
        animals: ["Leão", "Elefante-africano", "Girafa", "Zebra", "Guepardo"],
        animalImgs: [
            { name: "Leão", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Elefante-africano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Girafa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/savanna_biome_hero_1777761299521.png",
        capital: "Diego Garcia", population: "3 mil", area: "60 km²", climate: "Tropical / Equatorial"
    },
    "Singapore": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Singapore", population: "5,5 milhões", area: "710 km²", climate: "Tropical / Subtropical"
    },
    "Norfolk Island": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Kingston", population: "2 mil", area: "36 km²", climate: "Tropical / Oceânico"
    },
    "Cook Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Avarua", population: "15 mil", area: "236 km²", climate: "Tropical / Oceânico"
    },
    "Tonga": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Nuku'alofa", population: "103 mil", area: "747 km²", climate: "Tropical / Oceânico"
    },
    "Wallis and Futuna": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Mata-Utu", population: "13 mil", area: "142 km²", climate: "Tropical / Oceânico"
    },
    "Samoa": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Apia", population: "188 mil", area: "2.842 km²", climate: "Tropical / Oceânico"
    },
    "Solomon Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Honiara", population: "581 mil", area: "28.896 km²", climate: "Tropical / Oceânico"
    },
    "Tuvalu": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Funafuti", population: "11 mil", area: "26 km²", climate: "Tropical / Oceânico"
    },
    "Maldives": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "Malé", population: "341 mil", area: "300 km²", climate: "Tropical / Subtropical"
    },
    "Nauru": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Yaren", population: "10 mil", area: "21 km²", climate: "Tropical / Oceânico"
    },
    "Federated States of Micronesia": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Palikir", population: "101 mil", area: "702 km²", climate: "Tropical / Oceânico"
    },
    "South Georgia and the Islands": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Falkland Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Stanley", population: "3 mil", area: "12.173 km²", climate: "Tropical / Equatorial"
    },
    "Vanuatu": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Port Vila", population: "265 mil", area: "12.189 km²", climate: "Tropical / Oceânico"
    },
    "Niue": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Alofi", population: "2 mil", area: "260 km²", climate: "Tropical / Oceânico"
    },
    "American Samoa": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Pago Pago", population: "56 mil", area: "199 km²", climate: "Tropical / Oceânico"
    },
    "Palau": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Ngerulmud", population: "21 mil", area: "459 km²", climate: "Tropical / Oceânico"
    },
    "Guam": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Hagåtña", population: "159 mil", area: "549 km²", climate: "Tropical / Oceânico"
    },
    "Northern Mariana Islands": {
        biome: "tropical-forest",
        symbol: "🐆",
        animals: ["Onça-pintada", "Arara-azul", "Tucano", "Gorila-das-montanhas", "Boto-cor-de-rosa"],
        animalImgs: [
            { name: "Onça-pintada", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Arara-azul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Tucano", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/tropical_forest_hero_1777760369123.png",
        capital: "Saipan", population: "54 mil", area: "464 km²", climate: "Tropical / Oceânico"
    },
    "Bahrain": {
        biome: "desert",
        symbol: "🌵",
        animals: ["Camelo-árabe", "Feneco", "Escorpião-dourado", "Víbora-do-deserto", "Lagarto-do-deserto"],
        animalImgs: [
            { name: "Camelo-árabe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Feneco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Escorpião-dourado", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "img/desert_biome_hero_1777760824112.png",
        capital: "Manama", population: "1,3 milhões", area: "765 km²", climate: "Desértico / Árido"
    },
    "Coral Sea Islands": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Spratly Islands": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Clipperton Island": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Macao S.A.R": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Ashmore and Cartier Islands": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Bajo Nuevo Bank (Petrel Is.)": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Serranilla Bank": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
    "Scarborough Reef": {
        biome: "temp-forest",
        symbol: "🍂",
        animals: ["Veado-nobre", "Raposa-vermelha", "Esquilo-cinzento", "Javali", "Águia-careca"],
        animalImgs: [
            { name: "Veado-nobre", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Raposa-vermelha", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }, { name: "Esquilo-cinzento", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/320px-Standing_jaguar.jpg" }
        ],
        biomeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Horseshoe_Bend_-_colorado_river_-_arizona.jpg/480px-Horseshoe_Bend_-_colorado_river_-_arizona.jpg",
        capital: "—", population: "—", area: "—", climate: "Temperado / Continental"
    },
};
