//Fresh/
'use strict';

exports.BattlePokedex = {
	pyukumuku: {
		inherit: true,
		species: "Pyukumuku",
		digimon: "Botamon",
		types: ["Fire"],
		baseStats: {
			hp: 66,
			atk: 47,
			def: 32,
			spa: 47,
			spd: 32,
			spe: 29,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 2.3,
		color: "Black",
		evos: ["Koromon", "Sukamon"],
	},
	vanillite: {
		inherit: true,
		species: "Vanillite",
		digimon: "Poyomon",
		types: ["Air"],
		baseStats: {
			hp: 70,
			atk: 37,
			def: 38,
			spa: 37,
			spd: 38,
			spe: 26,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 2.3,
		color: "White",
		evos: ["Tokomon", "Sukamon"],
	},
	darumaka: {
		inherit: true,
		species: "Darumaka",
		digimon: "Punimon",
		types: ["Air"],
		baseStats: {
			hp: 64,
			atk: 51,
			def: 30,
			spa: 51,
			spd: 30,
			spe: 38,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 2.3,
		color: "Red",
		evos: ["Tsunomon", "Sukamon"],
	},
	cascoon: {
		inherit: true,
		species: "Cascoon",
		digimon: "Yuramon",
		types: ["Earth"],
		baseStats: {
			hp: 69,
			atk: 24,
			def: 36,
			spa: 24,
			spd: 36,
			spe: 19,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 2.3,
		color: "White",
		evos: ["Tanemon", "Sukamon"],
	},
	//In-Training/
	igglybuff: {
		inherit: true,
		species: "Igglybuff",
		digimon: "Koromon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 66,
			atk: 47,
			def: 35,
			spa: 47,
			spd: 35,
			spe: 28,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 4.5,
		color: "Pink",
		evos: ["Agumon", "Gabumon", "Kunemon", "Sukamon"],
		prevo: ["Botamon"],
	},
	swirlix: {
		inherit: true,
		species: "Swirlix",
		digimon: "Tokomon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 60,
			atk: 36,
			def: 29,
			spa: 36,
			spd: 29,
			spe: 38,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 4.5,
		color: "White",
		evos: ["Patamon", "Biyomon", "Kunemon", "Sukamon"],
		prevos: ["Poyomon"],
	},
	swinub: {
		inherit: true,
		species: "Swinub",
		digimon: "Tsunomon",
		types: ["Air", "Ice"],
		baseStats: {
			hp: 64,
			atk: 51,
			def: 33,
			spa: 51,
			spd: 33,
			spe: 37,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 4.5,
		color: "Brown",
		evos: ["Elecmon", "Penguinmon", "Kunemon", "Sukamon"],
		prevos: ["Punimon"],
	},
	sunkern: {
		inherit: true,
		species: "Sunkern",
		digimon: "Tanemon",
		types: ["Earth", "Ice"],
		baseStats: {
			hp: 63,
			atk: 38,
			def: 31,
			spa: 38,
			spd: 31,
			spe: 30,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 4.5,
		color: "Green",
		evos: ["Palmon", "Betamon", "Kunemon", "Sukamon"],
		prevos: ["Yuramon"],
	},
	//Rookie/
	helioptile: {
		inherit: true,
		species: "Helioptile",
		digimon: "Agumon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 111,
			atk: 83,
			def: 62,
			spa: 83,
			spd: 62,
			spe: 57,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 6.8,
		color: "Yellow",
		evo: ["Birdramon", "Centarumon", "Greymon", "Meramon", "Monochromon", "Tyrannomon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Koromon"],
	},
	rockruff: {
		inherit: true,
		species: "Rockruff",
		digimon: "Gabumon",
		types: ["Battle", "Fire"],
		baseStats: {
			hp: 113,
			atk: 86,
			def: 59,
			spa: 86,
			spd: 59,
			spe: 63,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 6.8,
		color: "White",
		evo: ["Centarumon", "Drimogemon", "Garurumon", "Monochromon", "Ogremon", "Tyrannomon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Koromon"],
	},
	dedenne: {
		inherit: true,
		species: "Dedenne",
		digimon: "Patamon",
		types: ["Battle", "Air"],
		baseStats: {
			hp: 96,
			atk: 69,
			def: 56,
			spa: 69,
			spd: 56,
			spe: 76,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 6.8,
		color: "Brown",
		evo: ["Angemon", "Leomon", "Ogremon", "Unimon", "Ogremon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tokomon"],
	},
	electrike: {
		inherit: true,
		species: "Electrike",
		digimon: "Elecmon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 112,
			atk: 79,
			def: 52,
			spa: 79,
			spd: 52,
			spe: 50,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 6.8,
		color: "Red",
		evo: ["Angemon", "Leomon", "Kokatorimon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tsunomon"],
	},
	oricoriopau: {
		inherit: true,
		species: "Oricorio-Pa'u",
		digimon: "Biyomon",
		types: ["Air", "Fire"],
		baseStats: {
			hp: 99,
			atk: 71,
			def: 53,
			spa: 71,
			spd: 53,
			spe: 73,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 6.8,
		color: "Pink",
		evo: ["Airdramon", "Birdramon", "Kabuterimon", "Kokatorimon", "Unimon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tokomon"],
	},
	weedle: {
		inherit: true,
		species: "Weedle",
		digimon: "Kunemon",
		types: ["Earth", "Air"],
		baseStats: {
			hp: 99,
			atk: 75,
			def: 68,
			spa: 75,
			spd: 68,
			spe: 52,
		},
		abilities: {
			0: "Virus",
		},
		weightkg: 6.8,
		color: "Yellow",
		evo: ["Kabuterimon", "Kuwagamon", "Vegiemon"],
		prevo: ["Koromon", "Tokomon", "Tsunomon", "Tanemon", "Sukamon"],
	},
	sunflora: {
		inherit: true,
		species: "Sunflora",
		digimon: "Palmon",
		types: ["Earth", "Ice"],
		baseStats: {
			hp: 103,
			atk: 74,
			def: 57,
			spa: 74,
			spd: 57,
			spe: 61,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 6.8,
		color: "Green",
		evo: ["Coelamon", "Kuwagamon", "Ninjamon", "Vegiemon", "Whamon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tanemon"],
	},
	mudkip: {
		inherit: true,
		species: "Mudkip",
		digimon: "Betamon",
		types: ["Ice", "Air"],
		baseStats: {
			hp: 85,
			atk: 76,
			def: 66,
			spa: 76,
			spd: 66,
			spe: 53,
		},
		abilities: {
			0: "Virus",
		},
		weightkg: 6.8,
		color: "Green",
		evo: ["Coelamon", "Drimogemon", "Seadramon", "Shellmon", "Whamon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tanemon"],
	},
	delibird: {
		inherit: true,
		species: "Delibird",
		digimon: "Penguinmon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 107,
			atk: 74,
			def: 64,
			spa: 74,
			spd: 64,
			spe: 60,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 6.8,
		color: "Blue",
		evo: ["Fridgimon", "Garurumon", "Mojaymon", "Shellmon", "Whamon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tsunomon"],
	},
	//Champion/
	heliolisk: {
		inherit: true,
		species: "Heliolisk",
		digimon: "Greymon",
		types: ["Fire", "Battle", "Air"],
		baseStats: {
			hp: 170,
			atk: 115,
			def: 92,
			spa: 115,
			spd: 92,
			spe: 80,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 13.6,
		color: "Brown",
		evo: ["MetalGreymon", "SkullGreymon", "Vademon"],
		prevo: ["Agumon"],
	},
	rhyhorn: {
		inherit: true,
		species: "Rhyhorn",
		digimon: "Monochromon",
		types: ["Fire", "Battle", "Earth"],
		baseStats: {
			hp: 170,
			atk: 113,
			def: 99,
			spa: 113,
			spd: 99,
			spe: 73,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 18.1,
		color: "Gray",
		evo: ["MetalGreymon", "MetalMamemon", "Vademon"],
		prevo: ["Agumon", "Gabumon"],
	},
	marowak: {
		inherit: true,
		species: "Marowak",
		digimon: "Ogremon",
		types: ["Battle", "Fire", "Earth"],
		baseStats: {
			hp: 167,
			atk: 116,
			def: 95,
			spa: 116,
			spd: 95,
			spe: 70,
		},
		abilities: {
			0: "Virus",
		},
		weightkg: 13.6,
		color: "Green",
		evo: ["Andromon", "Giromon", "Vademon"],
		prevo: ["Gabumon", "Patamon"],
	},
	altaria: {
		inherit: true,
		species: "Altaria",
		digimon: "Airdramon",
		types: ["Air", "Fire"],
		baseStats: {
			hp: 147,
			atk: 85,
			def: 93,
			spa: 85,
			spd: 93,
			spe: 94,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 13.6,
		color: "Blue",
		evo: ["Megadramon", "Phoenixmon", "Vademon"],
		prevo: ["Biyomon"],
	},
	buzzwole: {
		inherit: true,
		species: "Buzzwole",
		digimon: "Kuwagamon",
		types: ["Earth", "Battle", "Air"],
		baseStats: {
			hp: 160,
			atk: 110,
			def: 72,
			spa: 110,
			spd: 72,
			spe: 82,
		},
		abilities: {
			0: "Virus",
		},
		weightkg: 13.6,
		color: "Red",
		evo: ["HerculesKabuterimon", "Piximon", "Vademon"],
		prevo: ["Kunemon", "Palmon"],
	},
	beartic: {
		inherit: true,
		species: "Beartic",
		digimon: "Frigimon",
		types: ["Ice", "Battle"],
		baseStats: {
			hp: 155,
			atk: 88,
			def: 102,
			spa: 88,
			spd: 102,
			spe: 67,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 18.1,
		color: "Blue",
		evo: ["Mamemon", "MetalMamemon", "Vademon"],
		prevo: ["Penguinmon"],
	},
	electrode: {
		inherit: true,
		species: "Electrode",
		digimon: "Nanimon",
		types: ["Filth", "Battle"],
		baseStats: {
			hp: 159,
			atk: 106,
			def: 85,
			spa: 106,
			spd: 85,
			spe: 70,
		},
		abilities: {
			0: "Virus",
		},
		weightkg: 2.3,
		color: "Brown",
		evo: ["Digitamamon", "Vademon"],
		prevo: ["Agumon", "Betamon", "Biyomon", "Elecmon", "Gabumon", "Kunemon", "Palmon", "Patamon", "Penguinmon"],
	},
	magmar: {
		inherit: true,
		species: "Magmar",
		digimon: "Meramon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 170,
			atk: 120,
			def: 70,
			spa: 120,
			spd: 70,
			spe: 76,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 9.1,
		color: "Red",
		evo: ["Andromon", "MetalGreymon", "Vademon"],
		prevo: ["Agumon"],
	},
	excadrill: {
		inherit: true,
		species: "Excadrill",
		digimon: "Drimogemon",
		types: ["Battle", "Earth"],
		baseStats: {
			hp: 167,
			atk: 109,
			def: 95,
			spa: 109,
			spd: 95,
			spe: 73,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 18.1,
		color: "Purple",
		evo: ["MetalGreymon", "Vademon"],
		prevo: ["Betamon", "Gabumon"],
	},
	pyroar: {
		inherit: true,
		species: "Pyroar",
		digimon: "Leomon",
		types: ["Battle", "Air"],
		baseStats: {
			hp: 168,
			atk: 118,
			def: 78,
			spa: 118,
			spd: 78,
			spe: 75,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 9.1,
		color: "Yellow",
		evo: ["Andromon", "Mamemon", "Vademon"],
		prevo: ["Elecmon", "Patamon"],
	},
	combusken: {
		inherit: true,
		species: "Combusken",
		digimon: "Kokatorimon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 159,
			atk: 101,
			def: 76,
			spa: 101,
			spd: 76,
			spe: 80,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 13.6,
		color: "White",
		evo: ["Andromon", "Mamemon", "Vademon"],
		prevo: ["Elecmon", "Patamon"],
	},
	carnivine: {
		inherit: true,
		species: "Carnivine",
		digimon: "Vegiemon",
		types: ["Earth", "Ice"],
		baseStats: {
			hp: 152,
			atk: 82,
			def: 93,
			spa: 82,
			spd: 93,
			spe: 73,
		},
		abilities: {
			0: "Virus",
		},
		weightkg: 4.5,
		color: "Green",
		evo: ["Piximon", "Vademon"],
		prevo: ["Kunemon", "Palmon"],
	},
	crustle: {
		inherit: true,
		species: "Crustle",
		digimon: "Shellmon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 171,
			atk: 103,
			def: 102,
			spa: 103,
			spd: 102,
			spe: 63,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 18.1,
		color: "Pink",
		evo: ["MegaSeadramon", "HerculesKabuterimon", "Vademon"],
		prevo: ["Betamon", "Pengiunmon"],
	},
	vigoroth: {
		inherit: true,
		species: "Vigoroth",
		digimon: "Mojyamon",
		types: ["Ice", "Battle", "Earth"],
		baseStats: {
			hp: 157,
			atk: 94,
			def: 102,
			spa: 94,
			spd: 102,
			spe: 67,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 9.1,
		color: "White",
		evo: ["Mamemon", "SkullGreymon", "Vademon"],
		prevo: ["Penguinmon"],
	},
	moltres: {
		inherit: true,
		species: "Moltres",
		digimon: "Birdramon",
		types: ["Fire", "Air"],
		baseStats: {
			hp: 149,
			atk: 92,
			def: 75,
			spa: 92,
			spd: 75,
			spe: 90,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 9.1,
		color: "Red",
		evo: ["Phoenixmon", "Vademon"],
		prevo: ["Agumon", "Biyomon"],
	},
	tyrantrum: {
		inherit: true,
		species: "Tyrantrum",
		digimon: "Tyrannomon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 168,
			atk: 112,
			def: 78,
			spa: 112,
			spd: 78,
			spe: 75,
		},
		abilities: {
			0: "Data",
		},
		color: "Red",
		weightkg: 13.6,
		prevo: ["Agumon", "Gabumon", "Patamon"],
		evo: ["MetalGreymon", "Megadramon", "Vademon"],
	},
	togetic: {
		inherit: true,
		species: "Togetic",
		digimon: "Angemon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 150,
			atk: 95,
			def: 77,
			spa: 95,
			spd: 77,
			spe: 88,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 9.1,
		color: "White",
		prevo: ["Elecmon", "Patamon"],
		evo: ["Andromon", "Devimon", "Phoenixmon", "Vademon"],
	},
	rapidash: {
		inherit: true,
		species: "Rapidash",
		digimon: "Unimon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 149,
			atk: 96,
			def: 75,
			spa: 96,
			spd: 75,
			spe: 87,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 13.6,
		color: "White",
		prevo: ["Biyomon", "Patamon"],
		evo: ["Giromon", "Phoenixmon", "Vademon"],
	},
	accelgor: {
		inherit: true,
		species: "Accelgor",
		digimon: "Ninjamon",
		types: ["Earth", "Battle", "Fire"],
		baseStats: {
			hp: 159,
			atk: 107,
			def: 78,
			spa: 107,
			spd: 78,
			spe: 90,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 4.5,
		color: "Red",
		prevo: ["Palmon"],
		evo: ["Mamemon", "Metalmamemon", "Piximon", "Vademon"],
	},
	relicanth: {
		inherit: true,
		species: "Relicanth",
		digimon: "Coelamon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 164,
			atk: 89,
			def: 87,
			spa: 89,
			spd: 87,
			spe: 81,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 13.6,
		color: "White",
		prevo: ["Betamon", "Palmon"],
		evo: ["MegaSeadramon", "Vademon"],
	},
	mukalola: {
		inherit: true,
		species: "Muk-Alola",
		digimon: "Numemon",
		types: ["Filth"],
		baseStats: {
			hp: 143,
			atk: 82,
			def: 97,
			spa: 82,
			spd: 97,
			spe: 69,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 2.3,
		color: "Green",
		prevo: ["Agumon", "Betamon", "Biyomon", "Elecmon", "Gabumon", "Kunemon", "Palmon", "Patamon", "Penguinmon"],
		evo: ["Monzemon", "Vademon"],
	},
	mudsdale: {
		inherit: true,
		species: "Mudsdale",
		digimon: "Centarumon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 151,
			atk: 96,
			def: 97,
			spa: 96,
			spd: 97,
			spe: 88,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 13.6,
		color: "Brown",
		prevo: ["Agumon", "Gabumon"],
		evo: ["Andromon", "Giromon", "Vademon"],
	},
	banette: {
		inherit: true,
		species: "Banette",
		digimon: "Devimon",
		types: ["Battle", "Air", "Ice"],
		baseStats: {
			hp: 166,
			atk: 108,
			def: 82,
			spa: 108,
			spd: 82,
			spe: 79,
		},
		abilities: {
			0: "Virus",
		},
		weightkg: 9.1,
		color: "Black",
		prevo: ["Angemon"],
		evo: ["Megadramon", "SkullGreymon", "Vademon"],
	},
	mimikyu: {
		inherit: true,
		species: "Mimikyu",
		digimon: "Bakemon",
		types: ["Air", "Ice"],
		baseStats: {
			hp: 156,
			atk: 86,
			def: 93,
			spa: 86,
			spd: 93,
			spe: 84,
		},
		abilities: {
			0: "Virus",
		},
		weightkg: 9.1,
		color: "White",
		prevo: ["Agumon", "Betamon", "Biyomon", "Elecmon", "Gabumon", "Kunemon", "Palmon", "Patamon", "Penguinmon"],
		evo: ["SkullGreymon", "Giromon", "Vademon"],
	},
	heracross: {
		inherit: true,
		species: "Heracross",
		digimon: "Kabuterimon",
		types: ["Earth", "Fire", "Air"],
		baseStats: {
			hp: 168,
			atk: 106,
			def: 102,
			spa: 106,
			spd: 102,
			spe: 81,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 13.6,
		color: "Blue",
		prevo: ["Biyomon", "Kunemon"],
		evo: ["HerculesKabuterimon", "MetalMamemon", "Vademon"],
	},
	dragonair: {
		inherit: true,
		species: "Dragonair",
		digimon: "Seadramon",
		types: ["Ice", "Earth", "Fire"],
		baseStats: {
			hp: 151,
			atk: 105,
			def: 94,
			spa: 105,
			spd: 94,
			spe: 73,
		},
		abilities: {
			0: "Data",
		},
		weightkg: 13.6,
		color: "Blue",
		prevo: ["Betamon"],
		evo: ["MegaSeadramon", "Megadramon", "Vademon"],
	},
	lycanroc: {
		inherit: true,
		species: "Lycanroc",
		digimon: "Garurumon",
		types: ["Ice", "Fire", "Battle"],
		baseStats: {
			hp: 166,
			atk: 101,
			def: 80,
			spa: 101,
			spd: 80,
			spe: 83,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 13.6,
		color: "White",
		prevo: ["Gabumon", "Penguinmon"],
		evo: ["MegaSeadramon", "SkullGreymon", "Vademon"],
	},
	garbodor: {
		inherit: true,
		species: "Garbodor",
		digimon: "Sukamon",
		types: ["Filth"],
		baseStats: {
			hp: 158,
			atk: 84,
			def: 88,
			spa: 84,
			spd: 88,
			spe: 77,
		},
		abilities: {
			0: "Virus",
		},
		weightkg: 2.3,
		color: "Yellow",
		prevo: ["Agumon", "Betamon", "Biyomon", "Elecmon", "Gabumon", "Kunemon", "Palmon", "Patamon", "Penguinmon"],
		evo: ["Etemon", "Vademon"],
	},
	//Ultimate/
	druddigon: {
		inherit: true,
		species: "Druddigon",
		digimon: "MetalGreymon",
		types: ["Mech", "Fire", "Battle"],
		baseStats: {
			hp: 220,
			atk: 136,
			def: 117,
			spa: 136,
			spd: 117,
			spe: 102,
		},
		abilities: {
			0: "Virus",
		},
		color: "Purple",
		weightkg: 22.7,
		prevos: ["Greymon", "Monochromon"],
	},
	aggron: {
		inherit: true,
		species: "Aggron",
		digimon: "SkullGreymon",
		types: ["Battle", "Ice", "Mech"],
		baseStats: {
			hp: 236,
			atk: 146,
			def: 125,
			spa: 146,
			spd: 125,
			spe: 89,
		},
		abilities: {
			0: "Virus",
		},
		color: "White",
		weightkg: 13.6,
		prevos: ["Bakemon", "Devimon", "Garurumon", "Greymon", "Mojyamon"],
	},
	pawniard: {
		inherit: true,
		species: "Pawniard",
		digimon: "Giromon",
		types: ["Mech", "Air", "Battle"],
		baseStats: {
			hp: 214,
			atk: 139,
			def: 103,
			spa: 139,
			spd: 103,
			spe: 97,
		},
		abilities: {
			0: "Vaccine",
		},
		color: "Purple",
		weightkg: 2.3,
		prevos: ["Bakemon", "Centarumon", "Ogremon", "Unimon"],
	},
	pinsirmega: {
		inherit: true,
		species: "Pinsir-Mega",
		digimon: "HerculesKabuterimon",
		types: ["Earth", "Battle", "Fire"],
		baseStats: {
			hp: 322,
			atk: 178,
			def: 156,
			spa: 178,
			spd: 156,
			spe: 77,
		},
		abilities: {
			0: "Data",
		},
		color: "Yellow",
		weightkg: 18.1,
		prevos: ["Kabuterimon", "Kuwagamon", "Shellmon"],
	},
	chingling: {
		inherit: true,
		species: "Chingling",
		digimon: "Mamemon",
		types: ["Battle", "Mech"],
		baseStats: {
			hp: 218,
			atk: 128,
			def: 117,
			spa: 128,
			spd: 117,
			spe: 102,
		},
		abilities: {
			0: "Data",
		},
		color: "Gray",
		weightkg: 2.3,
		prevos: ["Frigimon", "Leomon", "Mojyamon", "Ninjamon", "Whamon"],
	},
	gyarados: {
		inherit: true,
		species: "Gyarados",
		digimon: "MegaSeadramon",
		types: ["Ice", "Air"],
		baseStats: {
			hp: 225,
			atk: 129,
			def: 105,
			spa: 129,
			spd: 105,
			spe: 104,
		},
		abilities: {
			0: "Data",
		},
		color: "Red",
		weightkg: 13.6,
		prevos: ["Coelamon", "Garurumon", "Seadramon", "Shellmon", "Whamon"],
	},
	beheeyem: {
		inherit: true,
		species: "Beheeyem",
		digimon: "Vademon",
		types: ["Mech", "Earth"],
		baseStats: {
			hp: 204,
			atk: 134,
			def: 119,
			spa: 134,
			spd: 119,
			spe: 92,
		},
		abilities: {
			0: "Virus",
		},
		color: "Pink",
		weightkg: 2.3,
		prevos: ["Airdramon", "Angemon", "Bakemon", "Birdramon", "Centarumon", "Coelamon", "Devimon", "Drimogemon", "Frigimon", "Garurumon", "Greymon", "Kabuterimon", "Kokatorimon", "Kuwagamon", "Leomon", "Meramon", "Mojyamon", "Monochromon", "Nanimon", "Numemon", "Ogremon", "Seadramon", "Shellmon", "Sukamon", "Tyrannomon", "Unimon", "Vegiemon", "Whamon"],
	},
	simisear: {
		inherit: true,
		species: "Simisear",
		digimon: "Etemon",
		types: ["Battle", "Air", "Filth"],
		baseStats: {
			hp: 204,
			atk: 116,
			def: 125,
			spa: 116,
			spd: 125,
			spe: 92,
		},
		abilities: {
			0: "Virus",
		},
		color: "Brown",
		weightkg: 6.8,
		prevos: ["Sukamon"],
	},
	registeel: {
		inherit: true,
		species: "Registeel",
		digimon: "Andromon",
		types: ["Mech", "Battle", "Air"],
		baseStats: {
			hp: 215,
			atk: 131,
			def: 123,
			spa: 131,
			spd: 123,
			spe: 99,
		},
		abilities: {
			0: "Vaccine",
		},
		color: "Gray",
		weightkg: 18.1,
		prevos: ["Angemon", "Centarumon", "Meramon", "Ogremon"],
	},
	zygarde: {
		inherit: true,
		species: "Zygarde",
		digimon: "Megadramon",
		types: ["Mech", "Ice", "Battle"],
		baseStats: {
			hp: 224,
			atk: 135,
			def: 117,
			spa: 135,
			spd: 117,
			spe: 96,
		},
		abilities: {
			0: "Virus",
		},
		color: "Red",
		weightkg: 24.9,
		prevos: ["Airdramon", "Devimon", "Seadramon", "Tyrannomon"],
	},
	jigglypuff: {
		inherit: true,
		species: "Jigglypuff",
		digimon: "Piximon",
		types: ["Earth", "Air"],
		baseStats: {
			hp: 203,
			atk: 112,
			def: 108,
			spa: 112,
			spd: 108,
			spe: 112,
		},
		abilities: {
			0: "Data",
		},
		color: "Pink",
		weightkg: 2.3,
		prevos: ["Kokatorimon", "Kuwagamon", "Ninjamon", "Vegiemon"],
	},
	ferroseed: {
		inherit: true,
		species: "Ferroseed",
		digimon: "MetalMamemon",
		types: ["Battle", "Mech"],
		baseStats: {
			hp: 211,
			atk: 130,
			def: 119,
			spa: 130,
			spd: 119,
			spe: 106,
		},
		abilities: {
			0: "Data",
		},
		color: "Gray",
		weightkg: 4.6,
		prevos: ["Frigimon", "Kabuterimon", "Monochromon", "Ninjamon"],
	},
	bewear: {
		inherit: true,
		species: "Bewear",
		digimon: "Monzaemon",
		types: ["Battle", "Air"],
		baseStats: {
			hp: 230,
			atk: 123,
			def: 122,
			spa: 123,
			spd: 122,
			spe: 90,
		},
		abilities: {
			0: "Vaccine",
		},
		color: "Yellow",
		weightkg: 18.1,
		prevos: ["Numemon"],
	},
	togepi: {
		inherit: true,
		species: "Togepi",
		digimon: "DigiTamamon",
		types: ["Fire", "Air", "Ice"],
		baseStats: {
			hp: 222,
			atk: 119,
			def: 130,
			spa: 119,
			spd: 130,
			spe: 86,
		},
		abilities: {
			0: "Data",
		},
		color: "White",
		weightkg: 4.5,
		prevos: ["Nanimon"],
	},
	wailord: {
		inherit: true,
		species: "Wailord",
		digimon: "Whamon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 240,
			atk: 128,
			def: 122,
			spa: 128,
			spd: 122,
			spe: 90,
		},
		abilities: {
			0: "Vaccine",
		},
		weightkg: 18.1,
		color: "Blue",
		evo: ["Mamemon", "MegaSeadramon", "Vademon"],
		prevo: ["Betamon", "Palmon", "Penguinmon"],
	},
	//Mega/
	hooh: {
		inherit: true,
		species: "Ho-Oh",
		digimon: "Phoenixmon",
		types: ["Air", "Fire"],
		baseStats: {
			hp: 325,
			atk: 171,
			def: 141,
			spa: 171,
			spd: 141,
			spe: 141,
		},
		abilities: {
			0: "Vaccine",
		},
		color: "Yellow",
		weightkg: 13.6,
		prevos: ["Aidramon", "Angemon", "Birdramon", "Kokatorimon", "Unimon"],
	},
	genesect: {
		inherit: true,
		species: "Genesect",
		digimon: "Machinedramon",
		types: ["Mech", "Air", "Battle"],
		baseStats: {
			hp: 323,
			atk: 174,
			def: 148,
			spa: 174,
			spd: 148,
			spe: 75,
		},
		abilities: {
			0: "Virus",
		},
		color: "Gray",
		weightkg: 36.3,
	},
};