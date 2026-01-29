let model = {
    app: {
        trainer: {
            name: '',
            lvl: 1,
            pokemons: [

            ],
        },
        currentEnemy: '',
    },
    data: {
        wildPokemon: [
            pikachu = {
                name: "Pikachu",
                lvl: 7,
                maxHP: 34,
                attacks: ["Thunder Shock", "Tail Whip", "Growl", "Quick Attack"],
                img: `pikachu.png" style=width:15vw;`
            },
            minun = {
                name: "Minun",
                lvl: 27,
                maxHP: 97,
                attacks: ["Electro Ball", "Spark", "Encore", "Quick Attack"],
                img: `minun.png" style=width:8vw;`
            },
            plusle = {
                name: "Plusle",
                lvl: 19,
                maxHP: 83,
                attacks: ["Thunder Wave", "Spark", "Growl", "Quick Attack"],
                img: `plusle.png" style=width:8vw;`
            },
            eevee = {
                name: "Eevee",
                lvl: 9,
                maxHP: 55,
                attacks: ["Tackle", "Tail Whip", "Growl", "Covet"],
                img: `eevee.png" style=width:15vw;`
            },
            mareep = {
                name: "Mareep",
                lvl: 10,
                maxHP: 58,
                attacks: ["Tackle", "Thunder Shock", "Growl", "Thunder Wave"],
                img: `mareep.png" style=width:15vw;`
            },
            deerling = {
                name: "Deerling",
                lvl: 16,
                maxHP: 77,
                attacks: ["Tackle", "Bullet Seed", "Growl", "Sand Attack"],
                img: `deerling.png" style=width:15vw;`
            },
        ],
        enemyTrainers: [
            {
                name: "Marius",
                lvl: 2,
                img: `gym_trainer_marius.png" style=height:15vw;`,
                pokemons: [
                    oranguru = {
                        name: "Oranguru",
                        lvl: 10,
                        maxHP: 90,
                        attacks: ["Confusion", "Taunt", "After You", "Calm Mind"],
                        img: `oranguru.png" style=width:15vw;`
                    },
                    drowzee = {
                        name: "Drowzee",
                        lvl: 21,
                        maxHP: 86,
                        attacks: ["Pound", "Hypnosis", "Headbutt", "Psybeam"],
                        img: `drowzee.png" style=width:15vw;`
                    },
                    slowbro = {
                        name: "Slowbro",
                        lvl: 19,
                        maxHP: 125,
                        attacks: ["Tackle", "Water Gun", "Growl", "Water Pulse"],
                        img: `slowbro.png" style=width:15vw;`
                    },
                ],
            },
            {
                name: "Martin",
                lvl: 2,
                img: `trainer2.png" style=height:15vw;`,
                pokemons: [
                    gastly = {
                        name: "Gastly",
                        lvl: 13,
                        maxHP: 39,
                        attacks: ["Lick", "Confuse Ray", "Mean Look", "Payback"],
                        img: `gastly.png" style=width:15vw;`
                    },
                    wartortle = {
                        name: "Wartortle",
                        lvl: 12,
                        maxHP: 66,
                        attacks: ["Tackle", "Water Gun", "Rapid Spin", "Bite"],
                        img: `wartortle.png" style=width:15vw;`
                    },
                    pidgeot = {
                        name: "Pidgeot",
                        lvl: 17,
                        maxHP: 105,
                        attacks: ["Hurricane", "Gust", "Whirlwind", "Sand Attack"],
                        img: `pidgeot.png" style=width:15vw;`
                    },
                ],
            },
            {
                name: "Marie",
                lvl: 2,
                img: `gym_trainer_marie.png" style=height:15vw;`,
                pokemons: [
                    swoobat = {
                        name: "Swoobat",
                        lvl: 15,
                        maxHP: 82,
                        attacks: ["Attract", "Endeavor", "Gust", "Air Cutter"],
                        img: `swoobat.png" style=width:15vw;`
                    },
                    bibarel = {
                        name: "Bibarel",
                        lvl: 9,
                        maxHP: 77,
                        attacks: ["Tackle", "Aqua Jet", "Defense Curl", "Rollout"],
                        img: `bibarel.png" style=width:15vw;`
                    },
                    infernape = {
                        name: "Infernape",
                        lvl: 12,
                        maxHP: 83,
                        attacks: ["Mach Punch", "Ember", "Scratch", "Leer"],
                        img: `infernape.png" style=width:15vw;`
                    },
                ],
            },
            {
                name: "Rebecka",
                lvl: 2,
                img: `trainer3.png" style=height:15vw;`,
                pokemons: [
                    venomoth = {
                        name: "Venomoth",
                        lvl: 15,
                        maxHP: 85,
                        attacks: ["Tackle", "Supersonic", "Air Slash", "Poison Powder"],
                        img: `venomoth.png" style=width:15vw;`
                    },
                    butterfree = {
                        name: "Butterfree",
                        lvl: 12,
                        maxHP: 67,
                        attacks: ["Harden", "Bug Bite", "Stun Spore", "Sleep Powder"],
                        img: `butterfree.png" style=width:15vw;`
                    },
                    dewgong = {
                        name: "Dewgong",
                        lvl: 19,
                        maxHP: 119,
                        attacks: ["Icy Wind", "Headbutt", "Growl", "Ice Shard"],
                        img: `dewgong.png" style=width:15vw;`
                    },
                ],
            },
            {
                name: "Terje",
                lvl: 2,
                img: `trainer4.png" style=height:15vw;`,
                pokemons: [
                    magneton = {
                        name: "Magneton",
                        lvl: 9,
                        maxHP: 51,
                        attacks: ["Tackle", "Thunder Shock", "Electric Terrain", "Thunder Wave"],
                        img: `magneton.png" style=width:15vw;`
                    },
                    charmander = {
                        name: "Charmander",
                        lvl: 8,
                        maxHP: 39,
                        attacks: ["Scratch", "Ember", "Growl", "Smokescreen"],
                        img: `charmander.png" style=width:15vw;`
                    },
                    exeggcute = {
                        name: "Exeggcute",
                        lvl: 11,
                        maxHP: 65,
                        attacks: ["Absorb", "Hypnosis", "Reflect", "Leech Seed"],
                        img: `exeggcute.png" style=width:15vw;`
                    },
                ],
            },
            {
                name: "Eskil",
                lvl: 2,
                img: `trainer5.png" style=height:15vw;`,
                pokemons: [
                    paras = {
                        name: "Paras",
                        lvl: 13,
                        maxHP: 44,
                        attacks: ["Scratch", "Stun Spore", "Poison Powder", "Absorb"],
                        img: `paras.png" style=width:15vw;`
                    },
                    machoke = {
                        name: "Machoke",
                        lvl: 12,
                        maxHP: 87,
                        attacks: ["Low Kick", "Leer", "Revenge", "Low Sweep"],
                        img: `machoke.png" style=width:15vw;`
                    },
                    hitmonchan = {
                        name: "Hitmonchan",
                        lvl: 4,
                        maxHP: 37,
                        attacks: ["Tackle", "Faint", "Fake Out", "Drain Punch"],
                        img: `hitmonchan.png" style=width:15vw;`
                    },
                ],
            },
            {
                name: "Ellie",
                lvl: 2,
                img: `gym_trainer_ellie.png" style=height:15vw;`,
                pokemons: [
                    raichu = {
                        name: "Raichu",
                        lvl: 9,
                        maxHP: 60,
                        attacks: ["Nuzzle", "Faint", "Spark", "Thunder"],
                        img: `raichu.png" style=width:15vw;`
                    },
                    rayquaza = {
                        name: "Rayquaza",
                        lvl: 10,
                        maxHP: 104,
                        attacks: ["Dragon Ascent", "Twister", "Air Slash", "Ancient Power"],
                        img: `rayquaza.png" style=width:15vw;`
                    },
                    gulpin = {
                        name: "Gulpin",
                        lvl: 19,
                        maxHP: 95,
                        attacks: ["Pound", "Sludge", "Acid Spray", "Clear Smog"],
                        img: `gulpin.png" style=width:15vw;`
                    },
                ],
            },
        ],
        items: [
            {
                name: "Pokeball",
                img: `Great_Ball.png`
            }
        ]
    },
}


