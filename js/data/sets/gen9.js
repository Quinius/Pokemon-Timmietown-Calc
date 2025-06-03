var SETDEX_SV = {
    "null": {},
    "Trainers and their parties defined with Competetive Syntax.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1
        }
    },
    "Compatible with Pokemon Showdown exports.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 2
        }
    },
    "A trainer specification starts with \"=== TRAINER_XXXX ===\"": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 3
        }
    },
    "and includes everything until the next line that starts with \"===\"": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 4
        }
    },
    "or the file ends.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 5
        }
    },
    "A blank line is required between the trainer and their Pokemon": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 6
        }
    },
    "and between their Pokemon.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 7
        }
    },
    "TRAINER_XXXX is how the trainer is referred to within code.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 8
        }
    },
    "Fields with description and/or example of usage": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Name",
                "Pic",
                "Class (if not specified, PkMn Trainer will be used)",
                "Gender (Male/Female, affects random gender weights of party if not specified)",
                "Music",
                "Items (Some Item / Another Item / Third Item)"
            ],
            "index": 9
        }
    },
    "Can also be specified with ITEM_SOME_ITEM": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Battle (Yes/No, defaults to No)",
                "AI (Ai Flag / Another Flag / Third Flag / ..."
            ],
            "index": 10
        }
    },
    "see \"constants/battle_ai.h\" for all flags)": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Mugshot (enable Mugshots during battle transition"
            ],
            "index": 11
        }
    },
    "set to one of Purple, Green, Pink, Blue or Yellow)": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Starting Status (see include/constants/battle.h for values)"
            ],
            "index": 12
        }
    },
    "Pokemon are then specified using the Showdown Export format.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 13
        }
    },
    "If a field is not specified, it will use it's default value.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Species (Either as SPECIES_ABRA or Abra)"
            ],
            "index": 14
        }
    },
    "This line also specifies Gender, Nickname and Held item.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 15
        }
    },
    "Abra": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": "Eviolite",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 16
        },
        "TRAINER EDWARD": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hidden Power"
            ],
            "index": 531
        },
        "TRAINER JACLYN": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hidden Power"
            ],
            "index": 549
        }
    },
    "SPECIES_ABRA": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": "ITEM_CHOICE_SPECS",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 17
        }
    },
    "M": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 18
        }
    },
    "Nickname length is limited to 10 characters using standard letters.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 19
        }
    },
    "With narrow font it's increased to 12. Longer strings will be silently shortened.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Level (Number between 1 and 100, defaults to 100)",
                "Ability (Ability Name or ABILITY_ABILITY_NAME)",
                "IVs (0 HP / 1 Atk / 2 Def / 3 SpA / 4 SpD / 5 Spe, defaults to all 31)"
            ],
            "index": 20
        }
    },
    "Order does not matter": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "EVs (252 HP / 128 Spe / 48 Def, defaults to all 0, is not capped at 512 total)"
            ],
            "index": 21
        },
        " /*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": "Nature (Rash or NATURE_RASH, defaults to Hardy)",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Ball (Poke Ball or ITEM_POKE_BALL, defaults to Poke Ball)",
                "Happiness (Number between 1 and 255)",
                "Shiny (Yes/No, defaults to No)",
                "Dynamax Level (Number between 0 and 10, default 10, also sets \"shouldDynamax\" to True)",
                "Gigantamax (Yes/No, sets to Gigantamax factor)"
            ],
            "index": 22
        }
    },
    "doesn't do anything to Pokemon without a Gigantamax form, also sets \"shouldDynamax\" to True": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tera Type (Set to a Type, either Fire or TYPE_FIRE, also sets \"shouldTerastal\" to True)"
            ],
            "index": 23
        }
    },
    "dash": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 24
        }
    },
    "Either \"- Tackle\" or \"- MOVE_TACKLE\" works. One move per line.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 25
        }
    },
    "Moves have to be the last lines of a Pokemon.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 26
        }
    },
    "If no moves are specified, the Pokemon will use the last 4 moves it learns": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 27
        }
    },
    "through levelup at its level.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 28
        }
    },
    "Default IVs and Level can be changed in the \"main\" function of tools/trainerproc/main.c": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 29
        }
    },
    "This file is processed with a custom preprocessor.": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 30
        }
    },
    "*/": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 31
        },
        " /*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 35
        }
    },
    "/*": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 32
        }
    },
    "Comments can be added as C comment blocks": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 33
        }
    },
    "// cannot be used as comments": {
        "/*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 34
        }
    },
    "/*Comments can also be on a single line*/": {
        " /*": {
            "level": null,
            "ivs": null,
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 36
        }
    },
    "Skiddo": {
        "TIMMIE": {
            "level": 7,
            "ivs": null,
            "item": "Focus Sash",
            "ability": "Sap Sipper",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Bulk Up",
                "Grassy Glide"
            ],
            "index": 37
        }
    },
    "Elekid": {
        "TIMMIE": {
            "level": 7,
            "ivs": null,
            "item": "Oran Berry",
            "ability": "Static",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Covet",
                "Charge Beam",
                "Leer"
            ],
            "index": 38
        }
    },
    "Turtwig": {
        "TIMMIE": {
            "level": 7,
            "ivs": {
                "atk": 0
            },
            "item": null,
            "ability": "Overgrow",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Absorb",
                "Leech Seed"
            ],
            "index": 39
        }
    },
    "Toxel": {
        "KONRAD": {
            "level": 7,
            "ivs": null,
            "item": null,
            "ability": "Rattled",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Nuzzle",
                "Acid",
                "Growl"
            ],
            "index": 40
        }
    },
    "Pumpkaboo": {
        "KONRAD": {
            "level": 7,
            "ivs": {
                "atk": 0
            },
            "item": null,
            "ability": "Insomnia",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Leech Seed",
                "Incinerate",
                "Round"
            ],
            "index": 41
        }
    },
    "Machop": {
        "KONRAD": {
            "level": 8,
            "ivs": null,
            "item": "Muscle Band",
            "ability": "Guts",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Karate Chop",
                "Bullet Punch",
                "Facade"
            ],
            "index": 42
        },
        "PER": {
            "level": 15,
            "ivs": null,
            "item": "Assault Vest",
            "ability": "Guts",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Power-Up Punch",
                "Low Kick",
                "Knock Off"
            ],
            "index": 69
        },
        "TRAINER TAKAO": {
            "level": 13,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 422
        },
        "TRAINER HITOSHI": {
            "level": 32,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 423
        },
        "TRAINER KOICHI": {
            "level": 24,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 426
        },
        "TRAINER NOB 1": {
            "level": 19,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 428
        },
        "TRAINER NOB 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 430
        },
        "TRAINER NOB 4": {
            "level": 31,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 432
        },
        "TRAINER NOB 5": {
            "level": 33,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 435
        },
        "TRAINER DAISUKE": {
            "level": 19,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 441
        },
        "TRAINER BRAWLY 1": {
            "level": 16,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Karate Chop",
                "Low Kick",
                "Seismic Toss",
                "Bulk Up"
            ],
            "index": 600
        },
        "TRAINER HUEY": {
            "level": 12,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1006
        },
        "TRAINER DWAYNE": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1011
        },
        "TRAINER LEONARD": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1015
        },
        "TRAINER BRENDEN": {
            "level": 13,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1212
        },
        "TRAINER BRICE": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1294
        },
        "TRAINER LENNY": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1299
        },
        " TRAINER MIKE 2": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1312
        },
        "TRAINER CORY 1": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1525
        },
        "TRAINER CORY 2": {
            "level": 30,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1782
        },
        "TRAINER CORY 3": {
            "level": 32,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1785
        },
        "TRAINER CORY 4": {
            "level": 34,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1788
        },
        "TRAINER SAWYER 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1840
        },
        "TRAINER SAWYER 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1843
        }
    },
    "Magikarp": {
        "BART": {
            "level": 10,
            "ivs": {
                "atk": 0
            },
            "item": "Weakness Policy",
            "ability": "Rattled",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hydro Pump"
            ],
            "index": 43
        },
        "TRAINER ANDREW": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 735
        },
        " TRAINER ANDREW": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 737
        },
        "TRAINER CLAUDE": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 738
        },
        "TRAINER RONALD": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 766
        },
        "TRAINER ROGER": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1409
        },
        " TRAINER ROGER": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1410
        },
        "TRAINER CHRIS": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1457
        }
    },
    "Milcery": {
        "BART": {
            "level": 8,
            "ivs": {
                "atk": 0
            },
            "item": "Leftovers",
            "ability": "Sweet Veil",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Acid Armor",
                "Draining Kiss",
                "Stored Power"
            ],
            "index": 44
        }
    },
    "Applin": {
        "BART": {
            "level": 10,
            "ivs": null,
            "item": "Sitrus Berry",
            "ability": "Ripen",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Pounce",
                "Grassy Glide"
            ],
            "index": 45
        }
    },
    "Kubfu": {
        "HUY": {
            "level": 9,
            "ivs": null,
            "item": "Expert Belt",
            "ability": "Inner Focus",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Brick Break",
                "Ice Punch",
                "Iron Head",
                "U-turn"
            ],
            "index": 46
        }
    },
    "Rockruff": {
        "HUY": {
            "level": 10,
            "ivs": null,
            "item": "Choice Scarf",
            "ability": "Keen Eye",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rock Slide"
            ],
            "index": 47
        }
    },
    "Mareep": {
        "STEFAN": {
            "level": 9,
            "ivs": {
                "atk": 0
            },
            "item": "Air Balloon",
            "ability": "Static",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder Wave",
                "Shock Wave",
                "Echoed Voice"
            ],
            "index": 48
        },
        "TRAINER WATTSON 2": {
            "level": 36,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Protect",
                "Thunder Wave",
                "Light Screen"
            ],
            "index": 1625
        }
    },
    "Foongus": {
        "STEFAN": {
            "level": 10,
            "ivs": {
                "atk": 0
            },
            "item": null,
            "ability": "Effect Spore",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Spore",
                "Absorb"
            ],
            "index": 49
        }
    },
    "Magby": {
        "STEFAN": {
            "level": 9,
            "ivs": {
                "atk": 0
            },
            "item": null,
            "ability": "Flame Body",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Acid Spray",
                "Protect",
                "Will-O-Wisp"
            ],
            "index": 50
        }
    },
    "Poltchageist": {
        "STEFAN": {
            "level": 8,
            "ivs": {
                "atk": 0
            },
            "item": "Coba Berry",
            "ability": "Heatproof",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hex",
                "Absorb"
            ],
            "index": 51
        }
    },
    "Pikachu": {
        "MAXIME": {
            "level": 12,
            "ivs": null,
            "item": "Oran Berry",
            "ability": "Static",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shock Wave",
                "Quick Attack",
                "Headbutt"
            ],
            "index": 52
        },
        "TRAINER VANESSA": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 678
        },
        "TRAINER WATTSON 3": {
            "level": 39,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Slam",
                "Rain Dance",
                "Shock Wave"
            ],
            "index": 1629
        }
    },
    "Meowth": {
        "MAXIME": {
            "level": 12,
            "ivs": null,
            "item": "Wide Lens",
            "ability": "Pickup",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fury Swipes",
                "Bite",
                "Hypnosis"
            ],
            "index": 53
        }
    },
    "Eevee": {
        "SILKE": {
            "level": 11,
            "ivs": {
                "atk": 0
            },
            "item": "Lagging Tail",
            "ability": "Adaptability",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Swift",
                "Celebrate",
                "Charm",
                "Alluring Voice"
            ],
            "index": 54
        },
        " SILKE": {
            "level": 9,
            "ivs": {
                "atk": 0
            },
            "item": "Lagging Tail",
            "ability": "Adaptability",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Calm Mind",
                "Weather Ball"
            ],
            "index": 55
        },
        "  SILKE": {
            "level": 8,
            "ivs": null,
            "item": "Lagging Tail",
            "ability": "Adaptability",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fake Out",
                "Last Resort"
            ],
            "index": 56
        }
    },
    "Impidimp": {
        "TRAINER ZEPHYR": {
            "level": 12,
            "ivs": null,
            "item": "Lum Berry",
            "ability": "Prankster",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Reflect",
                "Sucker Punch",
                "Draining Kiss"
            ],
            "index": 57
        }
    },
    "Frillish": {
        "TRAINER ZEPHYR": {
            "level": 11,
            "ivs": {
                "atk": 0
            },
            "item": "Oran Berry",
            "ability": "Water Absorb",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bubble",
                "Double Team",
                "Confusion",
                "Confuse Ray"
            ],
            "index": 58
        }
    },
    "Archen": {
        "TRAINER ZEPHYR": {
            "level": 11,
            "ivs": null,
            "item": "Oran Berry",
            "ability": "Defeatist",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Rock Throw",
                "Quick Attack"
            ],
            "index": 59
        }
    },
    "Porygon": {
        "SIMON": {
            "level": 13,
            "ivs": {
                "atk": 0
            },
            "item": "Eviolite",
            "ability": "Download",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tri Attack",
                "Psychic",
                "Rest"
            ],
            "index": 60
        }
    },
    "Beedrill": {
        "SIMON": {
            "level": 14,
            "ivs": null,
            "item": "Bug Gem",
            "ability": "Swarm",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bug Bite",
                "Poison Sting",
                "Pursuit"
            ],
            "index": 61
        },
        "Nicolas": {
            "level": 18,
            "ivs": null,
            "item": "Choice Scarf",
            "ability": "Swarm",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Brick Break",
                "Drill Run",
                "Poison Jab",
                "X-Scissor"
            ],
            "index": 103
        }
    },
    "Magnemite": {
        "SIMON": {
            "level": 14,
            "ivs": {
                "atk": 0
            },
            "item": "Focus Sash",
            "ability": "Magnet Pull",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Charge Beam",
                "Mirror Shot",
                "Sonic Boom"
            ],
            "index": 62
        },
        "GABBY & TY": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 203
        },
        "TRAINER SHAWN": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 449
        },
        "TRAINER DALTON 1": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 452
        },
        "TRAINER DALTON 2": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 454
        },
        " TRAINER DALTON 2": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 456
        },
        "TRAINER DALTON 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 457
        },
        " TRAINER DALTON 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 459
        },
        " TRAINER JACOB": {
            "level": 14,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 774
        },
        "TRAINER ANTHONY": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 775
        },
        " TRAINER ANTHONY": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 776
        },
        "TRAINER BENJAMIN 1": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 777
        },
        "TRAINER BENJAMIN 2": {
            "level": 30,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 778
        },
        "TRAINER BENJAMIN 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 779
        },
        "TRAINER ABIGAIL 1": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 782
        },
        "TRAINER JASMINE": {
            "level": 14,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 783
        },
        " TRAINER JASMINE": {
            "level": 14,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 784
        },
        "TRAINER ABIGAIL 2": {
            "level": 28,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 786
        },
        "TRAINER ABIGAIL 3": {
            "level": 31,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 787
        },
        "TRAINER JULIO": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1201
        },
        "TRAINER ALYSSA": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1468
        }
    },
    "Sneasel-Hisui": {
        "KOEN": {
            "level": 14,
            "ivs": null,
            "item": "Focus Sash",
            "ability": "Inner Focus",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rock Smash",
                "Lash Out",
                "Poison Tail"
            ],
            "index": 63
        }
    },
    "Staravia": {
        "KOEN": {
            "level": 14,
            "ivs": null,
            "item": "Focus Sash",
            "ability": "Intimidate",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dual Wingbeat",
                "Take Down",
                "Quick Attack"
            ],
            "index": 64
        }
    },
    "Tinkatuff": {
        "KOEN": {
            "level": 15,
            "ivs": null,
            "item": "Focus Sash",
            "ability": "Own Tempo",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Ice Hammer",
                "Play Rough",
                "Knock Off",
                "Fake Out"
            ],
            "index": 65
        }
    },
    "Voltorb": {
        "BJORN": {
            "level": 13,
            "ivs": {
                "atk": 0
            },
            "item": "Life Orb",
            "ability": "Soundproof",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder Wave",
                "Volt Switch"
            ],
            "index": 66
        },
        "TRAINER KIRK": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Charge",
                "Shock Wave",
                "Screech"
            ],
            "index": 444
        },
        "TRAINER SHAWN": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 448
        },
        "TRAINER WATTSON 1": {
            "level": 20,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rollout",
                "Spark",
                "Self Destruct",
                "Shock Wave"
            ],
            "index": 603
        },
        "TRAINER JACOB": {
            "level": 6,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 772
        },
        " TRAINER JACOB": {
            "level": 6,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 773
        },
        " TRAINER JASMINE": {
            "level": 6,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 785
        },
        "TRAINER JOSEPH": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1467
        },
        "TRAINER MARCOS": {
            "level": 15,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1469
        }
    },
    "Togedemaru": {
        "BJORN": {
            "level": 12,
            "ivs": null,
            "item": "Life Orb",
            "ability": "Iron Barbs",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fake Out",
                "U-turn"
            ],
            "index": 67
        }
    },
    "Qwilfish": {
        "BJORN": {
            "level": 13,
            "ivs": null,
            "item": "Life Orb",
            "ability": "Intimidate",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flip Turn"
            ],
            "index": 68
        }
    },
    "Buneary": {
        "PER": {
            "level": 15,
            "ivs": null,
            "item": "Flame Orb",
            "ability": "Limber",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Facade",
                "Swift",
                "Ice Beam"
            ],
            "index": 70
        }
    },
    "Litwick": {
        "ALISANADIA": {
            "level": 15,
            "ivs": {
                "atk": 0
            },
            "item": "Lum Berry",
            "ability": "Flash Fire",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Ally Switch",
                "Hex",
                "Flame Burst",
                "Clear Smog"
            ],
            "index": 71
        }
    },
    "Pawmi": {
        "ALISANADIA": {
            "level": 17,
            "ivs": null,
            "item": "Sitrus Berry",
            "ability": "Static",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Nuzzle",
                "Discharge",
                "Mach Punch"
            ],
            "index": 72
        }
    },
    "Nickit": {
        "ALISANADIA": {
            "level": 13,
            "ivs": {
                "atk": 0
            },
            "item": "Oran Berry",
            "ability": "Unburden",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Nasty Plot",
                "Snarl"
            ],
            "index": 73
        }
    },
    "Yungoos": {
        "Jeremy": {
            "level": 15,
            "ivs": null,
            "item": "Sitrus Berry",
            "ability": "Strong Jaw",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Crunch",
                "Ice Fang",
                "Psychic Fangs",
                "Fire Fang"
            ],
            "index": 74
        }
    },
    "Patrat": {
        "Jeremy": {
            "level": 15,
            "ivs": null,
            "item": "Sitrus Berry",
            "ability": "Analytic",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Retaliate",
                "Dig",
                "Pursuit",
                "Low Kick"
            ],
            "index": 75
        }
    },
    "Elgyem": {
        "RINKE": {
            "level": 13,
            "ivs": {
                "atk": 0
            },
            "item": "Focus Sash",
            "ability": "Synchronize",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Trick Room",
                "Psychic",
                "Shadow Ball",
                "Dark Pulse"
            ],
            "index": 76
        }
    },
    "Lampent": {
        "RINKE": {
            "level": 14,
            "ivs": {
                "atk": 1,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": "Lum Berry",
            "ability": "Flash Fire",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Hidden Power",
                "Psychic",
                "Energy Ball"
            ],
            "index": 77
        }
    },
    "Slowpoke-Galar": {
        "RINKE": {
            "level": 17,
            "ivs": {
                "atk": 0
            },
            "item": "Petaya Berry",
            "ability": "Gluttony",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Psychic",
                "Belch",
                "Ice Beam"
            ],
            "index": 78
        }
    },
    "Meowstic": {
        "JUSTIN": {
            "level": 16,
            "ivs": {
                "atk": 0
            },
            "item": "Lum Berry",
            "ability": "Prankster",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Light Screen",
                "Signal Beam",
                "Alluring Voice",
                "Thunderbolt"
            ],
            "index": 79
        }
    },
    "Flittle": {
        "JUSTIN": {
            "level": 17,
            "ivs": {
                "atk": 0
            },
            "item": "Colbur Berry",
            "ability": "Speed Boost",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Calm Mind",
                "Confusion",
                "Stored Power",
                "Disarming Voice"
            ],
            "index": 80
        }
    },
    "Mime Jr.": {
        "ROBIN": {
            "level": 12,
            "ivs": {
                "atk": 0
            },
            "item": "Focus Sash",
            "ability": "Soundproof",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Psychic Terrain",
                "Calm Mind",
                "Baton Pass"
            ],
            "index": 81
        }
    },
    "Inkay": {
        "ROBIN": {
            "level": 13,
            "ivs": null,
            "item": "Enigma Berry",
            "ability": "Contrary",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Superpower",
                "Stored Power",
                "Psybeam",
                "Retaliate"
            ],
            "index": 82
        }
    },
    "Metang": {
        "ROBIN": {
            "level": 14,
            "ivs": null,
            "item": "Mirror Herb",
            "ability": "Clear Body",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Swagger",
                "Bullet Punch",
                "Ice Punch",
                "Rock Slide"
            ],
            "index": 83
        }
    },
    "Gothita": {
        "ROBIN": {
            "level": 15,
            "ivs": {
                "atk": 0
            },
            "item": "Sticky Barb",
            "ability": "Shadow Tag",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Trick",
                "Confusion",
                "Charge Beam",
                "Signal Beam"
            ],
            "index": 84
        }
    },
    "Combusken": {
        "ROBIN": {
            "level": 16,
            "ivs": null,
            "item": "Lum Berry",
            "ability": "Blaze",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rock Smash",
                "Incinerate",
                "Aerial Ace",
                "Focus Energy"
            ],
            "index": 85
        },
        "TRAINER BRENDAN ROUTE 110 TREECKO": {
            "level": 20,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1078
        },
        "TRAINER BRENDAN ROUTE 119 TREECKO": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1081
        },
        "TRAINER MAY ROUTE 110 TREECKO": {
            "level": 20,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1099
        },
        "TRAINER MAY ROUTE 119 TREECKO": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1102
        },
        "TRAINER BRENDAN LILYCOVE TREECKO": {
            "level": 34,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1387
        },
        "TRAINER MAY LILYCOVE TREECKO": {
            "level": 34,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1399
        }
    },
    "Hatenna": {
        "ROBIN": {
            "level": 17,
            "ivs": {
                "atk": 0
            },
            "item": "Oran Berry",
            "ability": "Magic Bounce",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Confusion",
                "Rest",
                "Substitute",
                "Disarming Voice"
            ],
            "index": 86
        }
    },
    "Prinplup": {
        "Tim R": {
            "level": 18,
            "ivs": null,
            "item": "Rocky Helmet",
            "ability": "Competitive",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Yawn",
                "Brick Break",
                "Liquidation"
            ],
            "index": 87
        }
    },
    "Toedscool": {
        "Tim R": {
            "level": 19,
            "ivs": {
                "atk": 0
            },
            "item": "Lum Berry",
            "ability": "Mycelium Might",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Spore",
                "Earth Power",
                "Giga Drain"
            ],
            "index": 88
        }
    },
    "Drowzee": {
        "Tim R": {
            "level": 19,
            "ivs": {
                "atk": 0
            },
            "item": "Eviolite",
            "ability": "Insomnia",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Dream Eater"
            ],
            "index": 89
        },
        "TATE&LIZA": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Dream Eater",
                "Headbutt",
                "Protect"
            ],
            "index": 1714
        }
    },
    "Glimmet": {
        "Tim P": {
            "level": 18,
            "ivs": {
                "atk": 0
            },
            "item": "Focus Sash",
            "ability": "Corrosion",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Toxic Spikes",
                "Toxic",
                "Mud Shot"
            ],
            "index": 90
        }
    },
    "Mareanie": {
        "Tim P": {
            "level": 18,
            "ivs": {
                "atk": 0
            },
            "item": "Leftovers",
            "ability": "Merciless",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Baneful Bunker",
                "Venoshock",
                "Toxic",
                "Chilling Water"
            ],
            "index": 91
        }
    },
    "Togetic": {
        "Tim G": {
            "level": 18,
            "ivs": null,
            "item": "Choice Band",
            "ability": "Serene Grace",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Body Slam",
                "Fling"
            ],
            "index": 92
        }
    },
    "Stunfisk": {
        "Tim G": {
            "level": 18,
            "ivs": {
                "atk": 0
            },
            "item": "Sitrus Berry",
            "ability": "Static",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder Wave",
                "Earth Power",
                "Discharge"
            ],
            "index": 93
        }
    },
    "Flaaffy": {
        "Tim G": {
            "level": 18,
            "ivs": {
                "atk": 0,
                "def": 30
            },
            "item": "Leftovers",
            "ability": "Static",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Shock Wave",
                "Hidden Power"
            ],
            "index": 94
        },
        "TRAINER WATTSON 3": {
            "level": 41,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Protect",
                "Thunder Wave",
                "Light Screen"
            ],
            "index": 1630
        }
    },
    "Passimian": {
        "Roel": {
            "level": 18,
            "ivs": null,
            "item": "Berry Juice",
            "ability": "Defiant",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bulk Up",
                "Body Slam",
                "Knock Off",
                "Brick Break"
            ],
            "index": 95
        }
    },
    "Machoke": {
        "Ruben": {
            "level": 18,
            "ivs": null,
            "item": "Berry Juice",
            "ability": "No Guard",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bulk Up",
                "Brick Break",
                "Bullet Punch",
                "Ice Punch"
            ],
            "index": 96
        },
        "TRAINER FREDRICK": {
            "level": 30,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 159
        },
        "TRAINER HITOSHI": {
            "level": 32,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 424
        },
        "TRAINER KOICHI": {
            "level": 28,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 427
        },
        "TRAINER NOB 2": {
            "level": 27,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 429
        },
        "TRAINER NOB 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 431
        },
        "TRAINER NOB 4": {
            "level": 31,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 433
        },
        " TRAINER NOB 4": {
            "level": 31,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 434
        },
        "TRAINER NOB 5": {
            "level": 33,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 436
        },
        " TRAINER NOB 5": {
            "level": 33,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 437
        },
        "TRAINER YUJI": {
            "level": 26,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 440
        },
        "TRAINER ERNEST 1": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1009
        },
        "TRAINER PHILLIP": {
            "level": 44,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1014
        },
        "TRAINER LEONARD": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1017
        },
        "TRAINER DUNCAN": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1019
        },
        "TRAINER ERNEST 2": {
            "level": 36,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1022
        },
        "TRAINER ERNEST 3": {
            "level": 39,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1025
        },
        "TRAINER ERNEST 4": {
            "level": 42,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1028
        },
        "TRAINER ERNEST 5": {
            "level": 45,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1030
        },
        "TRAINER KELVIN": {
            "level": 33,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1040
        },
        "TRAINER KOJI 1": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1416
        },
        "TRAINER CORY 5": {
            "level": 36,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1791
        },
        "TRAINER KOJI 2": {
            "level": 37,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1804
        },
        " TRAINER KOJI 2": {
            "level": 37,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1805
        },
        "TRAINER KOJI 3": {
            "level": 39,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1807
        },
        " TRAINER KOJI 3": {
            "level": 39,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1808
        },
        "TRAINER KOJI 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1810
        },
        " TRAINER KOJI 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1811
        },
        "TRAINER SAWYER 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1846
        }
    },
    "Gabite": {
        "Max": {
            "level": 18,
            "ivs": null,
            "item": "Choice Scarf",
            "ability": "Rough Skin",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Earthquake",
                "Dragon Claw",
                "Fire Fang",
                "Iron Head"
            ],
            "index": 97
        }
    },
    "Drakloak": {
        "Max": {
            "level": 18,
            "ivs": null,
            "item": "Choice Scarf",
            "ability": "Clear Body",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Breaking Swipe",
                "Double-Edge",
                "Psychic Fangs"
            ],
            "index": 98
        }
    },
    "Vivillon": {
        "Neda": {
            "level": 18,
            "ivs": {
                "atk": 0
            },
            "item": "Choice Scarf",
            "ability": "Compound Eyes",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Air Slash",
                "Bug Buzz",
                "Draining Kiss"
            ],
            "index": 99
        }
    },
    "Yanma": {
        "Neda": {
            "level": 18,
            "ivs": {
                "atk": 0
            },
            "item": "Choice Specs",
            "ability": "Speed Boost",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Air Slash",
                "Ancient Power",
                "Bug Buzz"
            ],
            "index": 100
        }
    },
    "Brionne": {
        "Britt": {
            "level": 18,
            "ivs": {
                "atk": 0
            },
            "item": "Choice Scarf",
            "ability": "Liquid Voice",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hyper Voice",
                "Round",
                "Ice Beam"
            ],
            "index": 101
        }
    },
    "Herdier": {
        "Britt": {
            "level": 18,
            "ivs": null,
            "item": "Choice Scarf",
            "ability": "Intimidate",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Ice Fang",
                "Fire Fang",
                "Crunch"
            ],
            "index": 102
        }
    },
    "Growlithe": {
        "Nicolas": {
            "level": 18,
            "ivs": null,
            "item": "Choice Scarf",
            "ability": "Intimidate",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Body Slam",
                "Fire Fang",
                "Play Rough"
            ],
            "index": 104
        },
        "TRAINER FLANNERY 3": {
            "level": 41,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Helping Hand",
                "Flamethrower",
                "Roar",
                "Sunny Day"
            ],
            "index": 1649
        },
        "TRAINER FLANNERY 4": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Helping Hand",
                "Flamethrower",
                "Sunny Day",
                "Roar"
            ],
            "index": 1655
        }
    },
    "Haunter": {
        "LINK": {
            "level": 19,
            "ivs": {
                "atk": 0
            },
            "item": "Focus Sash",
            "ability": "Levitate",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Smog",
                "Venoshock",
                "Hex"
            ],
            "index": 105
        }
    },
    "Misdreavus": {
        "LINK": {
            "level": 19,
            "ivs": {
                "atk": 0
            },
            "item": "Eject Button",
            "ability": "Levitate",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hex",
                "Dazzling Gleam",
                "Burning Jealousy"
            ],
            "index": 106
        }
    },
    "Krokorok": {
        "LINK": {
            "level": 19,
            "ivs": null,
            "item": "Lum Berry",
            "ability": "Intimidate",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bulldoze",
                "Crunch",
                "Body Slam"
            ],
            "index": 107
        }
    },
    "Varoom": {
        "LINK": {
            "level": 19,
            "ivs": null,
            "item": "Shuca Berry",
            "ability": "Overcoat",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Substitute",
                "Poison Jab",
                "Bulldoze",
                "Spin Out"
            ],
            "index": 108
        }
    },
    "Dewpider": {
        "Floris": {
            "level": 20,
            "ivs": {
                "atk": 0
            },
            "item": "Charti Berry",
            "ability": "Water Bubble",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sticky Web",
                "Hydro Pump",
                "Bug Buzz"
            ],
            "index": 109
        }
    },
    "Grotle": {
        "Floris": {
            "level": 19,
            "ivs": null,
            "item": "Oran Berry",
            "ability": "Overgrow",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shell Smash",
                "Bulldoze",
                "Zen Headbutt",
                "Grassy Glide"
            ],
            "index": 110
        }
    },
    "Croconaw": {
        "Floris": {
            "level": 18,
            "ivs": null,
            "item": "Eject Pack",
            "ability": "Torrent",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dragon Dance",
                "Facade",
                "Aqua Tail",
                "Rock Slide"
            ],
            "index": 111
        }
    },
    "Lombre": {
        "Rutger": {
            "level": 18,
            "ivs": {
                "atk": 0
            },
            "item": "Sitrus Berry",
            "ability": "Swift Swim",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Grassy Terrain",
                "Mega Drain",
                "Surf",
                "Ice Beam"
            ],
            "index": 112
        },
        "TRAINER OLIVIA": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Uproar",
                "Fury Swipes",
                "Fake Out",
                "Water Pulse"
            ],
            "index": 350
        },
        "TRAINER CAROL": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 966
        },
        "TRAINER NANCY": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 968
        },
        "TRAINER EDWIN 1": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1048
        },
        "TRAINER EDWIN 2": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1055
        },
        "TRAINER EDWIN 3": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1057
        },
        "TRAINER EDWIN 4": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1059
        },
        "TRAINER BRENDAN ROUTE 110 TREECKO": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1077
        },
        "TRAINER BRENDAN ROUTE 119 TREECKO": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1080
        },
        "TRAINER BRENDAN ROUTE 110 TORCHIC": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1083
        },
        "TRAINER BRENDAN ROUTE 119 TORCHIC": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1086
        },
        "TRAINER MAY ROUTE 119 MUDKIP": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1094
        },
        "TRAINER MAY ROUTE 110 TREECKO": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1098
        },
        "TRAINER MAY ROUTE 119 TREECKO": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1101
        },
        "TRAINER MAY ROUTE 110 TORCHIC": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1104
        },
        "TRAINER MAY ROUTE 119 TORCHIC": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1107
        },
        "TRAINER LORENZO": {
            "level": 28,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1179
        },
        "TRAINER JENNA": {
            "level": 28,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1189
        },
        "TRAINER HALEY 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1262
        },
        "TRAINER HALEY 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1264
        },
        "TRAINER HALEY 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1266
        },
        "TRAINER HALEY 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1269
        },
        "TRAINER SOPHIE": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1476
        },
        "TRAINER ANGELINA": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1483
        },
        "TRAINER CELIA": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1533
        },
        "TRAINER GABRIELLE 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1858
        },
        "TRAINER GABRIELLE 4": {
            "level": 35,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1864
        }
    },
    "Thwackey": {
        "Rutger": {
            "level": 19,
            "ivs": null,
            "item": "Assault Vest",
            "ability": "Overgrow",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Grassy Glide",
                "Fake Out",
                "U-turn"
            ],
            "index": 113
        }
    },
    "Munchlax": {
        "Rutger": {
            "level": 19,
            "ivs": null,
            "item": "Leftovers",
            "ability": "Thick Fat",
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Curse",
                "Body Slam",
                "Brick Break",
                "Stomping Tantrum"
            ],
            "index": 114
        }
    },
    "Happiny": {
        "Rutger": {
            "level": 21,
            "ivs": null,
            "item": "Eviolite",
            "ability": "Serene Grace",
            "nature": "Nature",
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder Wave",
                "Seismic Toss",
                "Take Down"
            ],
            "index": 115
        }
    },
    "Geodude": {
        "TRAINER SAWYER 1": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 116
        },
        "TRAINER MARC": {
            "level": 8,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1210
        },
        " TRAINER MARC": {
            "level": 8,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1211
        },
        "TRAINER TRENT 1": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1295
        },
        " TRAINER TRENT 1": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1296
        },
        "  TRAINER TRENT 1": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1297
        },
        "TRAINER LENNY": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1298
        },
        "TRAINER LUCAS 1": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1300
        },
        "TRAINER ALAN": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1302
        },
        "TRAINER ERIC": {
            "level": 20,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1305
        },
        "TRAINER MIKE 2": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1310
        },
        " TRAINER MIKE 2": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1311
        },
        "TRAINER TRENT 2": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1313
        },
        " TRAINER TRENT 2": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1314
        },
        "  TRAINER TRENT 2": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1315
        },
        "TRAINER TRENT 3": {
            "level": 27,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1317
        },
        " TRAINER TRENT 3": {
            "level": 27,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1318
        },
        "TRAINER TRENT 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1321
        },
        "TRAINER DEVAN": {
            "level": 8,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1552
        },
        " TRAINER DEVAN": {
            "level": 8,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1553
        },
        "TRAINER SAWYER 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1838
        }
    },
    "Poochyena": {
        "TRAINER GRUNT AQUA HIDEOUT 1": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 117
        },
        "TRAINER GRUNT SEAFLOOR CAVERN 1": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 122
        },
        "TRAINER GABRIELLE 1": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 126
        },
        "TRAINER GRUNT PETALBURG WOODS": {
            "level": 9,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 131
        },
        "TRAINER GRUNT WEATHER INST 1": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 141
        },
        "TRAINER GRUNT WEATHER INST 2": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 142
        },
        "TRAINER GRUNT WEATHER INST 3": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 144
        },
        "TRAINER GRUNT MT PYRE 3": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 153
        },
        "TRAINER GRUNT AQUA HIDEOUT 7": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 445
        },
        "TRAINER ISAAC 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1113
        },
        "TRAINER GRUNT JAGGED PASS": {
            "level": 22,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1208
        },
        "TRAINER GRUNT SPACE CENTER 3": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1228
        },
        "TRAINER GRUNT WEATHER INST 5": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1242
        },
        "TRAINER TABITHA MT CHIMNEY": {
            "level": 20,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1244
        },
        "TRAINER MIKE 1": {
            "level": 10,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bite",
                "Scary Face"
            ],
            "index": 1309
        },
        "TRAINER GRUNT MAGMA HIDEOUT 2": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1491
        },
        "TRAINER GRUNT MAGMA HIDEOUT 8": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1499
        },
        "TRAINER PAT": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1574
        }
    },
    "Zubat": {
        "TRAINER GRUNT AQUA HIDEOUT 2": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 118
        },
        "TRAINER GRUNT AQUA HIDEOUT 3": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 120
        },
        "TRAINER GRUNT SEAFLOOR CAVERN 3": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 124
        },
        "TRAINER GRUNT WEATHER INST 1": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 140
        },
        "TRAINER GRUNT WEATHER INST 3": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 145
        },
        "TRAINER GRUNT MUSEUM 2": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 148
        },
        "TRAINER GRUNT MT PYRE 1": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 151
        },
        "TRAINER GRUNT AQUA HIDEOUT 6": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 157
        },
        "TRAINER GRUNT AQUA HIDEOUT 7": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 446
        },
        "TRAINER GRUNT UNUSED": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1205
        },
        "TRAINER GRUNT MT PYRE 4": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1207
        },
        "TRAINER GRUNT MT CHIMNEY 2": {
            "level": 20,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1220
        },
        "TRAINER GRUNT SPACE CENTER 3": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1227
        },
        "TRAINER GRUNT SPACE CENTER 5": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1230
        },
        "TRAINER GRUNT WEATHER INST 5": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1241
        },
        " TRAINER TABITHA MT CHIMNEY": {
            "level": 22,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1246
        },
        "TRAINER MAXIE MT CHIMNEY": {
            "level": 24,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1257
        },
        "TRAINER GRUNT MAGMA HIDEOUT 1": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1490
        },
        "TRAINER GRUNT MAGMA HIDEOUT 4": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1494
        },
        "TRAINER GRUNT MAGMA HIDEOUT 7": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1498
        },
        "TRAINER GRUNT MAGMA HIDEOUT 9": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1500
        },
        "TRAINER GRUNT MAGMA HIDEOUT 13": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1504
        },
        "TRAINER TABITHA MAGMA HIDEOUT": {
            "level": 30,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1510
        }
    },
    "Carvanha": {
        "TRAINER GRUNT AQUA HIDEOUT 2": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 119
        },
        "TRAINER GRUNT AQUA HIDEOUT 4": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 121
        },
        "TRAINER GRUNT SEAFLOOR CAVERN 2": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 123
        },
        "TRAINER GRUNT SEAFLOOR CAVERN 4": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 138
        },
        "TRAINER GRUNT WEATHER INST 2": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 143
        },
        "TRAINER GRUNT WEATHER INST 3": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 146
        },
        "TRAINER GRUNT MUSEUM 1": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 147
        },
        "TRAINER GRUNT MUSEUM 2": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 149
        },
        "TRAINER GRUNT MT PYRE 2": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 152
        },
        "TRAINER GRUNT MT PYRE 3": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 154
        },
        "TRAINER GRUNT WEATHER INST 4": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 155
        },
        "TRAINER GRUNT AQUA HIDEOUT 5": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 156
        },
        "TRAINER SHELLY WEATHER INSTITUTE": {
            "level": 28,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 163
        },
        "TRAINER TIFFANY": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 351
        },
        "TRAINER LUIS": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 380
        },
        "TRAINER TONY 1": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 387
        },
        "TRAINER MATTHEW": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 389
        },
        "TRAINER DAVID": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 391
        },
        "TRAINER ROLAND": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 394
        },
        "TRAINER DEAN": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 398
        },
        " TRAINER DEAN": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 400
        },
        "TRAINER GRUNT AQUA HIDEOUT 8": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 447
        },
        "TRAINER BARNY": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 747
        },
        "TRAINER ELLIOT 3": {
            "level": 26,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 755
        },
        "TRAINER ELLIOT 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 759
        },
        "TRAINER LEONARDO": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1216
        },
        "TRAINER HENRY": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1407
        },
        "LILA & ROY": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1450
        },
        "TRAINER CHRIS": {
            "level": 23,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1460
        }
    },
    "Skitty": {
        "TRAINER GABRIELLE 1": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 125
        },
        "TRAINER MIGUEL 1": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 666
        },
        "TRAINER COLTON": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Assist",
                "Charm",
                "Feint Attack",
                "Heal Bell"
            ],
            "index": 667
        },
        " TRAINER COLTON": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Assist",
                "Charm",
                "Feint Attack",
                "Heal Bell"
            ],
            "index": 668
        },
        "  TRAINER COLTON": {
            "level": 40,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Assist",
                "Charm",
                "Feint Attack",
                "Heal Bell"
            ],
            "index": 669
        },
        "   TRAINER COLTON": {
            "level": 12,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Assist",
                "Charm",
                "Feint Attack",
                "Heal Bell"
            ],
            "index": 670
        },
        "    TRAINER COLTON": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Assist",
                "Charm",
                "Feint Attack",
                "Heal Bell"
            ],
            "index": 671
        },
        "TRAINER MIGUEL 2": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 673
        },
        "TRAINER MIGUEL 3": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 674
        },
        "TRAINER MARTHA": {
            "level": 23,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 969
        },
        "TRAINER LYDIA 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1147
        },
        "TRAINER LYDIA 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1156
        },
        "TRAINER ROBIN": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1272
        },
        "TRAINER GABRIELLE 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1849
        },
        "TRAINER GABRIELLE 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1855
        }
    },
    "Zigzagoon": {
        "TRAINER GABRIELLE 1": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 127
        },
        "TRAINER RICKY 1": {
            "level": 13,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sand Attack",
                "Headbutt",
                "Tail Whip",
                "Surf"
            ],
            "index": 225
        },
        "TRAINER CINDY 2": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Tail Whip"
            ],
            "index": 334
        },
        "TRAINER ETHAN 1": {
            "level": 20,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 490
        },
        "TRAINER ETHAN 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 494
        },
        "ANNA & MEG": {
            "level": 31,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Growl",
                "Tail Whip",
                "Headbutt",
                "Odor Sleuth"
            ],
            "index": 658
        },
        "TRAINER VICTOR": {
            "level": 16,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 665
        },
        "TRAINER BEN": {
            "level": 17,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Headbutt",
                "Sand Attack",
                "Growl",
                "Thunderbolt"
            ],
            "index": 708
        },
        "TRAINER EDDIE": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 725
        },
        " TRAINER EDDIE": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 726
        },
        "TRAINER DEMETRIUS": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 802
        },
        "TRAINER ISAAC 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1111
        },
        "TRAINER DEANDRE": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1487
        },
        "TRAINER MYLES": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1571
        },
        "TRAINER GABRIELLE 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1851
        }
    },
    "Lotad": {
        "TRAINER GABRIELLE 1": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 128
        },
        "TRAINER JENNA": {
            "level": 28,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1188
        },
        "TRAINER BRENDAN RUSTBORO TREECKO": {
            "level": 13,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1234
        },
        "TRAINER MAY RUSTBORO TREECKO": {
            "level": 13,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1582
        },
        "TRAINER GABRIELLE 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1852
        }
    },
    "Seedot": {
        "TRAINER GABRIELLE 1": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 129
        },
        "TRAINER LORENZO": {
            "level": 28,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1177
        },
        "TRAINER GABRIELLE 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1853
        }
    },
    "Taillow": {
        "TRAINER GABRIELLE 1": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 130
        },
        "TRAINER ETHAN 1": {
            "level": 20,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 491
        },
        "TRAINER ETHAN 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 495
        },
        "TRAINER VICTOR": {
            "level": 16,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 664
        },
        "TRAINER CHESTER": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 855
        },
        "TRAINER CAROL": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 965
        },
        "TRAINER ISAAC 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1114
        },
        "TRAINER JOSUE": {
            "level": 25,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1521
        },
        "TRAINER BRANDEN": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1536
        },
        "TRAINER GABRIELLE 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1854
        },
        "TRAINER GABRIELLE 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1860
        }
    },
    "Manectric": {
        "TRAINER MARCEL": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 132
        },
        "TRAINER WILTON 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 267
        },
        "TRAINER WILTON 4": {
            "level": 32,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 270
        },
        "TRAINER WILTON 5": {
            "level": 35,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 273
        },
        "TRAINER KEIRA": {
            "level": 45,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 285
        },
        "TRAINER WALTER 1": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 568
        },
        "TRAINER MICAH": {
            "level": 44,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 569
        },
        " TRAINER MICAH": {
            "level": 44,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 570
        },
        "TRAINER WALTER 2": {
            "level": 34,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 572
        },
        "TRAINER WALTER 3": {
            "level": 36,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Quick Attack",
                "Spark",
                "Odor Sleuth",
                "Roar"
            ],
            "index": 574
        },
        "TRAINER WALTER 4": {
            "level": 39,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Quick Attack",
                "Spark",
                "Odor Sleuth"
            ],
            "index": 576
        },
        "TRAINER WALTER 5": {
            "level": 41,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Quick Attack",
                "Spark",
                "Odor Sleuth",
                "Roar"
            ],
            "index": 579
        },
        "TRAINER WATTSON 1": {
            "level": 24,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Quick Attack",
                "Thunder Wave",
                "Shock Wave",
                "Howl"
            ],
            "index": 606
        },
        "TRAINER AURON": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1038
        },
        "TRAINER MARLEY": {
            "level": 34,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bite",
                "Roar",
                "Thunder Wave",
                "Thunderbolt"
            ],
            "index": 1042
        },
        "TRAINER ATHENA": {
            "level": 32,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Thunder Wave",
                "Quick Attack"
            ],
            "index": 1217
        },
        "DEZ & LUKE": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1330
        },
        "TRAINER CAROLINA": {
            "level": 24,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1527
        },
        " TRAINER CAROLINA": {
            "level": 24,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1529
        },
        "TRAINER FABIAN": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1559
        },
        "TRAINER LEONEL": {
            "level": 30,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Quick Attack",
                "Thunder Wave"
            ],
            "index": 1563
        },
        "TRAINER WATTSON 2": {
            "level": 40,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bite",
                "Thunder Wave",
                "Thunder",
                "Protect"
            ],
            "index": 1628
        },
        "TRAINER WATTSON 3": {
            "level": 45,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bite",
                "Thunder Wave",
                "Thunder",
                "Protect"
            ],
            "index": 1633
        },
        "TRAINER WATTSON 4": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bite",
                "Thunder Wave",
                "Thunder",
                "Protect"
            ],
            "index": 1638
        },
        "TRAINER WATTSON 5": {
            "level": 55,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bite",
                "Thunder Wave",
                "Thunder",
                "Protect"
            ],
            "index": 1644
        },
        "TRAINER FERNANDO 3": {
            "level": 37,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1830
        },
        "TRAINER FERNANDO 4": {
            "level": 39,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1832
        },
        " TRAINER FERNANDO 4": {
            "level": 39,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1833
        },
        "TRAINER FERNANDO 5": {
            "level": 41,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1835
        },
        " TRAINER FERNANDO 5": {
            "level": 41,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1836
        }
    },
    "Shiftry": {
        "TRAINER MARCEL": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 133
        },
        "TRAINER BRAXTON": {
            "level": 28,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Giga Drain",
                "Feint Attack",
                "Double Team",
                "Swagger"
            ],
            "index": 241
        },
        "TRAINER VITO": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 260
        },
        "TRAINER SIDNEY": {
            "level": 48,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Torment",
                "Double Team",
                "Swagger",
                "Extrasensory"
            ],
            "index": 581
        },
        "TRAINER EDWIN 5": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1062
        },
        "TRAINER RUBEN": {
            "level": 34,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1414
        },
        "TRAINER GABRIELLE 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1871
        }
    },
    "Pelipper": {
        "TRAINER ALBERTO": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 134
        },
        "TRAINER EDGAR": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 251
        },
        "TRAINER WENDY": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fly",
                "Water Gun",
                "Mist",
                "Protect"
            ],
            "index": 283
        },
        "TRAINER BROOKE 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 303
        },
        "TRAINER BROOKE 4": {
            "level": 32,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 306
        },
        "TRAINER BROOKE 5": {
            "level": 34,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 309
        },
        "TRAINER RICHARD": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 402
        },
        "TRAINER BERNIE 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 477
        },
        "TRAINER BERNIE 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 479
        },
        "TRAINER BERNIE 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 481
        },
        "TRAINER WINONA 1": {
            "level": 30,
            "ivs": {
                "hp": 25,
                "atk": 25,
                "def": 25,
                "spa": 25,
                "spd": 25,
                "spe": 25
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Gun",
                "Supersonic",
                "Protect",
                "Aerial Ace"
            ],
            "index": 617
        },
        "TRAINER EDWARDO": {
            "level": 29,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 848
        },
        "TRAINER BENNY": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 853
        },
        "TRAINER KAYLEE": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 950
        },
        "TRAINER LEONARD": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1016
        },
        "TRAINER ERNEST 3": {
            "level": 39,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1023
        },
        "TRAINER ERNEST 4": {
            "level": 42,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1026
        },
        "TRAINER ERNEST 5": {
            "level": 45,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1029
        },
        "TRAINER BRENDAN ROUTE 119 MUDKIP": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1073
        },
        "TRAINER BRENDAN ROUTE 119 TREECKO": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1079
        },
        "TRAINER MAY ROUTE 119 TREECKO": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1100
        },
        "TRAINER LYDIA 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1158
        },
        "TRAINER LYDIA 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1164
        },
        "TRAINER LYDIA 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1170
        },
        "TRAINER MIKE 1": {
            "level": 10,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Gust",
                "Growl"
            ],
            "index": 1308
        },
        "TRAINER BRENDAN LILYCOVE MUDKIP": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1382
        },
        "TRAINER BRENDAN LILYCOVE TREECKO": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1385
        },
        "TRAINER MAY LILYCOVE MUDKIP": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1394
        },
        "TRAINER MAY LILYCOVE TREECKO": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1397
        },
        "TRAINER DARCY": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1512
        },
        "TRAINER WINONA 2": {
            "level": 41,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Surf",
                "Supersonic",
                "Protect",
                "Aerial Ace"
            ],
            "index": 1688
        },
        "TRAINER WINONA 3": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Surf",
                "Supersonic",
                "Protect",
                "Aerial Ace"
            ],
            "index": 1694
        },
        "TRAINER WINONA 4": {
            "level": 51,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Surf",
                "Supersonic",
                "Protect",
                "Aerial Ace"
            ],
            "index": 1700
        },
        "TRAINER WINONA 5": {
            "level": 55,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Surf",
                "Supersonic",
                "Protect",
                "Aerial Ace"
            ],
            "index": 1705
        },
        "TRAINER CORY 3": {
            "level": 32,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1784
        },
        "TRAINER CORY 4": {
            "level": 34,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1787
        },
        "TRAINER CORY 5": {
            "level": 36,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1790
        },
        "TRAINER PABLO 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1798
        },
        "TRAINER PABLO 5": {
            "level": 43,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1801
        }
    },
    "Xatu": {
        "TRAINER ALBERTO": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 135
        },
        "TRAINER SAMANTHA": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 551
        },
        "TRAINER ALEXIS": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 557
        },
        "TATE&LIZA": {
            "level": 64,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Psychic",
                "Rest",
                "Confuse Ray",
                "Calm Mind"
            ],
            "index": 1729
        },
        "TRAINER PRESLEY": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 846
        },
        "TRAINER BENNY": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 854
        },
        "TRAINER ROBERT 5": {
            "level": 41,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 864
        },
        "TRAINER FLINT": {
            "level": 29,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1355
        }
    },
    "Zangoose": {
        "TRAINER ED": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 136
        },
        "TRAINER JODY": {
            "level": 26,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Swords Dance",
                "Slash"
            ],
            "index": 280
        },
        "TRAINER THOMAS": {
            "level": 45,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 571
        },
        "TRAINER HECTOR": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1050
        }
    },
    "Seviper": {
        "TRAINER ED": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 137
        },
        "TRAINER JESSICA 1": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Tail",
                "Screech",
                "Glare",
                "Crunch"
            ],
            "index": 345
        },
        "TRAINER JESSICA 2": {
            "level": 35,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Tail",
                "Screech",
                "Glare",
                "Crunch"
            ],
            "index": 354
        },
        "TRAINER JESSICA 3": {
            "level": 38,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Tail",
                "Screech",
                "Glare",
                "Crunch"
            ],
            "index": 356
        },
        "TRAINER JESSICA 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Tail",
                "Screech",
                "Glare",
                "Crunch"
            ],
            "index": 358
        },
        "TRAINER JESSICA 5": {
            "level": 44,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Tail",
                "Screech",
                "Glare",
                "Crunch"
            ],
            "index": 360
        },
        "TRAINER HECTOR": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1051
        }
    },
    "Gyarados": {
        "TRAINER DECLAN": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 139
        },
        "TRAINER BARRY": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 397
        },
        "TRAINER RODNEY": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 401
        },
        "TRAINER JACK": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 410
        },
        "TRAINER WALLACE": {
            "level": 56,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dragon Dance",
                "Earthquake",
                "Hyper Beam",
                "Surf"
            ],
            "index": 733
        },
        "TRAINER ELLIOT 2": {
            "level": 27,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 752
        },
        " TRAINER ELLIOT 2": {
            "level": 27,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 753
        },
        "TRAINER ELLIOT 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 754
        },
        " TRAINER ELLIOT 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 757
        },
        "TRAINER ELLIOT 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 758
        },
        " TRAINER ELLIOT 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 761
        },
        "TRAINER ELLIOT 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 762
        },
        " TRAINER ELLIOT 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 764
        },
        "TRAINER RONALD": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 767
        },
        " TRAINER RONALD": {
            "level": 23,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 768
        },
        "  TRAINER RONALD": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 769
        },
        "   TRAINER RONALD": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 770
        },
        "    TRAINER RONALD": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 771
        },
        " TRAINER ROGER": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1411
        }
    },
    "Numel": {
        "TRAINER GRUNT SPACE CENTER 1": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 150
        },
        "TRAINER BROOKE 1": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 287
        },
        "TRAINER BROOKE 2": {
            "level": 26,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 301
        },
        "TRAINER BROOKE 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 304
        },
        "TRAINER BROOKE 4": {
            "level": 32,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 307
        },
        " TRAINER GRUNT SPACE CENTER 2": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 333
        },
        "TRAINER SHIRLEY": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 343
        },
        "TRAINER GRUNT MT CHIMNEY 1": {
            "level": 20,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 372
        },
        "TRAINER COLE": {
            "level": 23,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 466
        },
        "TRAINER AXLE": {
            "level": 23,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 469
        },
        "TRAINER FLANNERY 1": {
            "level": 24,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Take Down",
                "Magnitude",
                "Sunny Day"
            ],
            "index": 607
        },
        "TRAINER PAUL": {
            "level": 15,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 630
        },
        "TRAINER MADELINE 1": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Ember",
                "Tackle",
                "Magnitude",
                "Sunny Day"
            ],
            "index": 909
        },
        "TRAINER MADELINE 2": {
            "level": 29,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Ember",
                "Tackle",
                "Magnitude",
                "Sunny Day"
            ],
            "index": 913
        },
        "TRAINER MADELINE 3": {
            "level": 32,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Ember",
                "Take Down",
                "Magnitude",
                "Sunny Day"
            ],
            "index": 914
        },
        "TRAINER MADELINE 4": {
            "level": 34,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Take Down",
                "Magnitude",
                "Sunny Day"
            ],
            "index": 916
        },
        "TRAINER ELI": {
            "level": 23,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1032
        },
        "TRAINER GRUNT JAGGED PASS": {
            "level": 22,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1209
        },
        "TRAINER TABITHA MT CHIMNEY": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1243
        },
        " TRAINER TABITHA MT CHIMNEY": {
            "level": 22,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1245
        },
        "TRAINER VIVI": {
            "level": 15,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1261
        },
        "TRAINER BRICE": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1293
        },
        "TRAINER LUCAS 1": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1301
        },
        "KIM & IRIS": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Take Down",
                "Rest",
                "Earthquake"
            ],
            "index": 1428
        },
        "TRAINER HAYDEN": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1474
        },
        "TRAINER GRUNT MAGMA HIDEOUT 3": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1492
        },
        "TRAINER GRUNT MAGMA HIDEOUT 5": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1496
        },
        "TRAINER GRUNT MAGMA HIDEOUT 12": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1503
        },
        "TRAINER GRUNT MAGMA HIDEOUT 15": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1506
        },
        "TRAINER TABITHA MAGMA HIDEOUT": {
            "level": 26,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1508
        },
        "TRAINER BRYANT": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1538
        },
        "TRAINER DAYTON": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1561
        },
        "TRAINER MYLES": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1573
        },
        "TRAINER SAWYER 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1839
        },
        "TRAINER SAWYER 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1841
        },
        "TRAINER SAWYER 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1844
        }
    },
    "Makuhita": {
        "TRAINER FREDRICK": {
            "level": 30,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 158
        },
        "TRAINER WILTON 1": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 249
        },
        "TRAINER WILTON 2": {
            "level": 26,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 266
        },
        "TRAINER WILTON 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 269
        },
        "TRAINER WILTON 4": {
            "level": 32,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 272
        },
        "TRAINER YUJI": {
            "level": 26,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 439
        },
        "TRAINER BRAWLY 1": {
            "level": 19,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Arm Thrust",
                "Vital Throw",
                "Reversal",
                "Bulk Up"
            ],
            "index": 602
        },
        "ANNA & MEG": {
            "level": 36,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Focus Energy",
                "Arm Thrust"
            ],
            "index": 661
        },
        "TRAINER SHELBY 1": {
            "level": 21,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 699
        },
        "TRAINER SHELBY 2": {
            "level": 30,
            "ivs": {
                "hp": 25,
                "atk": 25,
                "def": 25,
                "spa": 25,
                "spd": 25,
                "spe": 25
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 701
        },
        "TRAINER CYNDY 1": {
            "level": 18,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 898
        },
        "TRAINER CYNDY 2": {
            "level": 26,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 902
        },
        "TRAINER CYNDY 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 904
        },
        "TRAINER ISAAC 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1115
        },
        "TRAINER ISAAC 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1124
        },
        "TRAINER CRISTIAN": {
            "level": 13,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1214
        },
        "TRAINER RHETT": {
            "level": 15,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1470
        },
        "TRAINER HELENE": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1549
        },
        "TRAINER CALLIE": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1565
        },
        "TRAINER MYLES": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1568
        },
        "TRAINER KOJI 3": {
            "level": 39,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1806
        }
    },
    "Mightyena": {
        "TRAINER MATT": {
            "level": 34,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 160
        },
        "TRAINER SHELLY WEATHER INSTITUTE": {
            "level": 28,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 164
        },
        "TRAINER SHELLY SEAFLOOR CAVERN": {
            "level": 37,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 166
        },
        "TRAINER ARCHIE": {
            "level": 41,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 167
        },
        "TRAINER GRUNT SPACE CENTER 2": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 331
        },
        " TRAINER GRUNT SPACE CENTER 2": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 332
        },
        "TRAINER SIDNEY": {
            "level": 46,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Roar",
                "Double Edge",
                "Sand Attack",
                "Crunch"
            ],
            "index": 580
        },
        "TRAINER CALVIN 2": {
            "level": 27,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 716
        },
        "TRAINER CALVIN 3": {
            "level": 30,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 718
        },
        "TRAINER CALVIN 4": {
            "level": 33,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 721
        },
        "TRAINER CALVIN 5": {
            "level": 36,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 724
        },
        "TRAINER TABITHA MOSSDEEP": {
            "level": 38,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1053
        },
        "TRAINER ISAAC 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1122
        },
        "TRAINER ISAAC 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1128
        },
        "TRAINER ISAAC 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1134
        },
        "TRAINER ISAAC 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1140
        },
        "TRAINER GRUNT SEAFLOOR CAVERN 5": {
            "level": 35,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1202
        },
        "TRAINER GRUNT SPACE CENTER 6": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1231
        },
        "TRAINER MAXIE MAGMA HIDEOUT": {
            "level": 37,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1253
        },
        "TRAINER MAXIE MT CHIMNEY": {
            "level": 24,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1256
        },
        "TRAINER GRUNT MAGMA HIDEOUT 6": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1497
        },
        "TRAINER GRUNT MAGMA HIDEOUT 10": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1501
        },
        "TRAINER GRUNT MAGMA HIDEOUT 14": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1505
        },
        "TRAINER TABITHA MAGMA HIDEOUT": {
            "level": 28,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1509
        },
        "TRAINER MAXIE MOSSDEEP": {
            "level": 42,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1514
        },
        "TRAINER GABRIELLE 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1850
        },
        "TRAINER GABRIELLE 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1856
        },
        "TRAINER GABRIELLE 4": {
            "level": 35,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1862
        },
        "TRAINER GABRIELLE 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1868
        }
    },
    "Golbat": {
        "TRAINER MATT": {
            "level": 34,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 161
        },
        "TRAINER TABITHA MOSSDEEP": {
            "level": 40,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1054
        },
        "TRAINER GRUNT SEAFLOOR CAVERN 5": {
            "level": 35,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1203
        }
    },
    "Hariyama": {
        "TRAINER ZANDER": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 162
        },
        "TRAINER WILTON 5": {
            "level": 35,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 275
        },
        "TRAINER KIYO": {
            "level": 34,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 425
        },
        "TRAINER ATSUSHI": {
            "level": 32,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 442
        },
        "ANNA & MEG": {
            "level": 38,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Focus Energy",
                "Arm Thrust"
            ],
            "index": 663
        },
        "TRAINER TIMOTHY 1": {
            "level": 27,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 692
        },
        "TRAINER TIMOTHY 2": {
            "level": 33,
            "ivs": {
                "hp": 25,
                "atk": 25,
                "def": 25,
                "spa": 25,
                "spd": 25,
                "spe": 25
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Arm Thrust",
                "Knock Off",
                "Sand Attack",
                "Dig"
            ],
            "index": 693
        },
        "TRAINER TIMOTHY 3": {
            "level": 36,
            "ivs": {
                "hp": 26,
                "atk": 26,
                "def": 26,
                "spa": 26,
                "spd": 26,
                "spe": 26
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Arm Thrust",
                "Knock Off",
                "Sand Attack",
                "Dig"
            ],
            "index": 694
        },
        "TRAINER TIMOTHY 4": {
            "level": 39,
            "ivs": {
                "hp": 27,
                "atk": 27,
                "def": 27,
                "spa": 27,
                "spd": 27,
                "spe": 27
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Arm Thrust",
                "Belly Drum",
                "Sand Attack",
                "Dig"
            ],
            "index": 695
        },
        "TRAINER TIMOTHY 5": {
            "level": 42,
            "ivs": {
                "hp": 29,
                "atk": 29,
                "def": 29,
                "spa": 29,
                "spd": 29,
                "spe": 29
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Arm Thrust",
                "Belly Drum",
                "Sand Attack",
                "Dig"
            ],
            "index": 696
        },
        "TRAINER SHELBY 3": {
            "level": 33,
            "ivs": {
                "hp": 26,
                "atk": 26,
                "def": 26,
                "spa": 26,
                "spd": 26,
                "spe": 26
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 703
        },
        "TRAINER SHELBY 4": {
            "level": 36,
            "ivs": {
                "hp": 27,
                "atk": 27,
                "def": 27,
                "spa": 27,
                "spd": 27,
                "spe": 27
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 705
        },
        "TRAINER SHELBY 5": {
            "level": 39,
            "ivs": {
                "hp": 29,
                "atk": 29,
                "def": 29,
                "spa": 29,
                "spd": 29,
                "spe": 29
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 707
        },
        "TRAINER CYNDY 4": {
            "level": 32,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 906
        },
        "TRAINER CYNDY 5": {
            "level": 35,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 908
        },
        "TRAINER REYNA": {
            "level": 33,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1044
        },
        "TRAINER CONOR": {
            "level": 33,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1047
        },
        "TRAINER ISAAC 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1130
        },
        "TRAINER ISAAC 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1136
        },
        "TRAINER ISAAC 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1142
        },
        "JOHN & JAY": {
            "level": 52,
            "ivs": {
                "hp": 29,
                "atk": 29,
                "def": 29,
                "spa": 29,
                "spd": 29,
                "spe": 29
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Focus Punch",
                "Rock Tomb",
                "Rest",
                "Belly Drum"
            ],
            "index": 1442
        },
        "TRAINER BRAWLY 2": {
            "level": 37,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fake Out",
                "Focus Punch",
                "Belly Drum",
                "Earthquake"
            ],
            "index": 1609
        },
        "TRAINER BRAWLY 3": {
            "level": 42,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fake Out",
                "Focus Punch",
                "Belly Drum",
                "Earthquake"
            ],
            "index": 1613
        },
        "TRAINER BRAWLY 4": {
            "level": 47,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fake Out",
                "Focus Punch",
                "Belly Drum",
                "Earthquake"
            ],
            "index": 1618
        },
        "TRAINER BRAWLY 5": {
            "level": 52,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fake Out",
                "Focus Punch",
                "Belly Drum",
                "Earthquake"
            ],
            "index": 1624
        },
        "TRAINER KOJI 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1809
        },
        "TRAINER KOJI 5": {
            "level": 43,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1812
        }
    },
    "Sharpedo": {
        "TRAINER SHELLY SEAFLOOR CAVERN": {
            "level": 37,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 165
        },
        "TRAINER ARCHIE": {
            "level": 43,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 169
        },
        "TRAINER VINCENT": {
            "level": 44,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 244
        },
        "TRAINER TIFFANY": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 352
        },
        "TRAINER GILBERT": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 407
        },
        "TRAINER TONY 2": {
            "level": 30,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 416
        },
        "TRAINER TONY 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 417
        },
        "TRAINER TONY 4": {
            "level": 36,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 419
        },
        "TRAINER TONY 5": {
            "level": 39,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 421
        },
        "TRAINER ELLIOT 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 763
        },
        "TRAINER CLARENCE": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1221
        },
        "TRAINER JONAH": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1406
        },
        "TRAINER REED": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1423
        },
        "LILA & ROY": {
            "level": 49,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1454
        }
    },
    "Crobat": {
        "TRAINER ARCHIE": {
            "level": 41,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 168
        },
        "TRAINER MAXIE MAGMA HIDEOUT": {
            "level": 38,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1254
        },
        "TRAINER MAXIE MOSSDEEP": {
            "level": 43,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1515
        }
    },
    "Spoink": {
        "TRAINER LEAH": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 170
        },
        "TRAINER VALERIE 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 321
        },
        "TRAINER VALERIE 3": {
            "level": 35,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 322
        },
        "TRAINER VALERIE 4": {
            "level": 40,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 324
        },
        "TRAINER NATE": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1223
        },
        "TRAINER MARLENE": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1551
        }
    },
    "Shroomish": {
        "TRAINER DAISY": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 171
        },
        "TRAINER ROSE 1": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 174
        },
        "TRAINER ROSE 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 180
        },
        "TRAINER ROSE 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 182
        },
        "TRAINER ROSE 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 185
        },
        "TRAINER SHEILA": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 342
        },
        "TRAINER AUTUMN": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 492
        },
        "TRAINER GEORGIA": {
            "level": 16,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 642
        },
        "TRAINER KAREN 2": {
            "level": 26,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 644
        },
        "TRAINER KAREN 3": {
            "level": 29,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 646
        },
        "TRAINER DIANA 1": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 971
        },
        "TRAINER IRENE": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 975
        },
        "TRAINER DIANA 2": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 977
        },
        "GINA & MIA": {
            "level": 10,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Absorb",
                "Leech Seed"
            ],
            "index": 998
        },
        "TRAINER LYDIA 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1144
        },
        "TRAINER LYDIA 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1153
        },
        "TRAINER VIVI": {
            "level": 15,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1260
        },
        "TRAINER HALEY 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1263
        },
        "TRAINER ROBIN": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1273
        },
        "TRAINER BIANCA": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1473
        },
        "TRAINER SHAYLA": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1540
        },
        "TRAINER PAT": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1575
        }
    },
    "Roselia": {
        "TRAINER DAISY": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 172
        },
        "TRAINER ROSE 1": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 173
        },
        " TRAINER ROSE 1": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 175
        },
        "TRAINER VIOLET": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 178
        },
        "TRAINER ROSE 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 181
        },
        "TRAINER ROSE 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 184
        },
        "TRAINER ROSE 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 187
        },
        "TRAINER ROSE 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 190
        },
        "TRAINER WENDY": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Mega Drain",
                "Magical Leaf",
                "Grass Whistle",
                "Leech Seed"
            ],
            "index": 282
        },
        "TRAINER BROOKE 1": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 288
        },
        "TRAINER HOPE": {
            "level": 45,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 290
        },
        "TRAINER BROOKE 2": {
            "level": 26,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 302
        },
        "TRAINER BROOKE 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 305
        },
        "TRAINER BROOKE 4": {
            "level": 32,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 308
        },
        "TRAINER BROOKE 5": {
            "level": 34,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 311
        },
        "TRAINER NAOMI": {
            "level": 45,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 336
        },
        "TRAINER VICTORIA": {
            "level": 17,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 677
        },
        "TRAINER CLARISSA": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 910
        },
        "TRAINER MADELINE 4": {
            "level": 34,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Leech Seed",
                "Mega Drain",
                "Grass Whistle",
                "Sunny Day"
            ],
            "index": 915
        },
        "TRAINER MADELINE 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Leech Seed",
                "Giga Drain",
                "Solar Beam",
                "Sunny Day"
            ],
            "index": 917
        },
        "TRAINER WALLY VR 1": {
            "level": 44,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Magical Leaf",
                "Leech Seed",
                "Giga Drain",
                "Toxic"
            ],
            "index": 1065
        },
        "TRAINER LYDIA 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1146
        },
        "TRAINER LYDIA 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1155
        },
        "TRAINER LYDIA 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1161
        },
        "TRAINER LYDIA 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1167
        },
        "TRAINER LYDIA 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1173
        },
        "TRAINER CATHERINE 1": {
            "level": 26,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1187
        },
        "TRAINER SOPHIA": {
            "level": 38,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1192
        },
        "TRAINER CATHERINE 2": {
            "level": 30,
            "ivs": {
                "hp": 7,
                "atk": 7,
                "def": 7,
                "spa": 7,
                "spd": 7,
                "spe": 7
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1194
        },
        "TRAINER CATHERINE 3": {
            "level": 33,
            "ivs": {
                "hp": 8,
                "atk": 8,
                "def": 8,
                "spa": 8,
                "spd": 8,
                "spe": 8
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1196
        },
        "TRAINER CATHERINE 4": {
            "level": 36,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1198
        },
        "TRAINER CATHERINE 5": {
            "level": 39,
            "ivs": {
                "hp": 10,
                "atk": 10,
                "def": 10,
                "spa": 10,
                "spd": 10,
                "spe": 10
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1200
        },
        "TRAINER WALLY VR 2": {
            "level": 47,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Magical Leaf",
                "Leech Seed",
                "Giga Drain",
                "Toxic"
            ],
            "index": 1362
        },
        "TRAINER WALLY VR 3": {
            "level": 50,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Magical Leaf",
                "Leech Seed",
                "Giga Drain",
                "Toxic"
            ],
            "index": 1367
        },
        "TRAINER WALLY VR 4": {
            "level": 53,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Magical Leaf",
                "Leech Seed",
                "Giga Drain",
                "Toxic"
            ],
            "index": 1372
        },
        "TRAINER WALLY VR 5": {
            "level": 56,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Magical Leaf",
                "Leech Seed",
                "Giga Drain",
                "Toxic"
            ],
            "index": 1377
        },
        "TYRA & IVY": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Growth",
                "Stun Spore",
                "Mega Drain",
                "Leech Seed"
            ],
            "index": 1429
        },
        "TRAINER CELINA": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1472
        },
        "TRAINER SHAYLA": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1541
        },
        "TRAINER MAKAYLA": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1557
        }
    },
    "Medicham": {
        "TRAINER FELIX": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Psychic"
            ],
            "index": 176
        },
        "TRAINER VINCENT": {
            "level": 44,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 243
        },
        "TRAINER MICHELLE": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 293
        },
        "TRAINER JERRY 4": {
            "level": 32,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 638
        },
        "TRAINER JERRY 5": {
            "level": 34,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 641
        },
        "TRAINER SHELBY 3": {
            "level": 33,
            "ivs": {
                "hp": 26,
                "atk": 26,
                "def": 26,
                "spa": 26,
                "spd": 26,
                "spe": 26
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 702
        },
        "TRAINER SHELBY 4": {
            "level": 36,
            "ivs": {
                "hp": 27,
                "atk": 27,
                "def": 27,
                "spa": 27,
                "spd": 27,
                "spe": 27
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 704
        },
        "TRAINER SHELBY 5": {
            "level": 39,
            "ivs": {
                "hp": 29,
                "atk": 29,
                "def": 29,
                "spa": 29,
                "spd": 29,
                "spe": 29
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 706
        },
        "TRAINER CYNDY 4": {
            "level": 32,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 905
        },
        "TRAINER CYNDY 5": {
            "level": 35,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 907
        },
        "JOHN & JAY": {
            "level": 52,
            "ivs": {
                "hp": 29,
                "atk": 29,
                "def": 29,
                "spa": 29,
                "spd": 29,
                "spe": 29
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Psychic",
                "Fire Punch",
                "Psych Up",
                "Protect"
            ],
            "index": 1441
        },
        "TRAINER MAKAYLA": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1558
        },
        "TRAINER BRAWLY 3": {
            "level": 38,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Psychic",
                "Light Screen",
                "Reflect",
                "Focus Punch"
            ],
            "index": 1611
        },
        "TRAINER BRAWLY 4": {
            "level": 43,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Focus Punch",
                "Light Screen",
                "Reflect",
                "Psychic"
            ],
            "index": 1616
        },
        "TRAINER BRAWLY 5": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Focus Punch",
                "Light Screen",
                "Reflect",
                "Psychic"
            ],
            "index": 1622
        }
    },
    "Claydol": {
        "TRAINER FELIX": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Skill Swap",
                "Earthquake"
            ],
            "index": 177
        },
        "TRAINER SHANNON": {
            "level": 45,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 291
        },
        "TATE&LIZA": {
            "level": 64,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Earthquake",
                "Explosion",
                "Psychic",
                "Light Screen"
            ],
            "index": 1727
        },
        "TRAINER DIANNE": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Skill Swap",
                "Earthquake"
            ],
            "index": 871
        },
        "TRAINER STEVEN": {
            "level": 75,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Reflect",
                "Light Screen",
                "Ancient Power",
                "Earthquake"
            ],
            "index": 1758
        }
    },
    "Gloom": {
        "TRAINER VIOLET": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 179
        },
        "TRAINER ROSE 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 183
        },
        "TRAINER ROSE 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 186
        },
        "TRAINER ROSE 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 189
        },
        "TRAINER DIANA 2": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 978
        },
        "TRAINER DIANA 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 981
        },
        "TRAINER DIANA 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 984
        },
        "TRAINER CATHERINE 1": {
            "level": 26,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1186
        },
        "TRAINER CATHERINE 2": {
            "level": 30,
            "ivs": {
                "hp": 7,
                "atk": 7,
                "def": 7,
                "spa": 7,
                "spd": 7,
                "spe": 7
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1193
        },
        "TRAINER CATHERINE 3": {
            "level": 33,
            "ivs": {
                "hp": 8,
                "atk": 8,
                "def": 8,
                "spa": 8,
                "spd": 8,
                "spe": 8
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1195
        },
        "TRAINER CATHERINE 4": {
            "level": 36,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1197
        },
        "TRAINER ALEXA": {
            "level": 34,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1412
        }
    },
    "Breloom": {
        "TRAINER ROSE 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 188
        },
        "TRAINER KAREN 4": {
            "level": 32,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 648
        },
        "TRAINER KAREN 5": {
            "level": 35,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 650
        },
        "TRAINER PAULA": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 900
        },
        "TRAINER DIANA 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 980
        },
        "TRAINER DIANA 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 983
        },
        "TRAINER DIANA 5": {
            "level": 40,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 986
        },
        "TRAINER LYDIA 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1159
        },
        "TRAINER LYDIA 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1165
        },
        "TRAINER LYDIA 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1171
        },
        "TRAINER JACKSON 1": {
            "level": 27,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1176
        },
        "TRAINER JACKSON 2": {
            "level": 31,
            "ivs": {
                "hp": 7,
                "atk": 7,
                "def": 7,
                "spa": 7,
                "spd": 7,
                "spe": 7
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1181
        },
        "TRAINER JACKSON 3": {
            "level": 34,
            "ivs": {
                "hp": 8,
                "atk": 8,
                "def": 8,
                "spa": 8,
                "spd": 8,
                "spe": 8
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1182
        },
        "TRAINER JACKSON 4": {
            "level": 37,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1183
        },
        "TRAINER JACKSON 5": {
            "level": 39,
            "ivs": {
                "hp": 10,
                "atk": 10,
                "def": 10,
                "spa": 10,
                "spd": 10,
                "spe": 10
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1185
        },
        "TRAINER PAXTON": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1239
        },
        "TRAINER HALEY 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1265
        },
        "TRAINER HALEY 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1267
        },
        "TRAINER HALEY 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1270
        }
    },
    "Sandslash": {
        "TRAINER DUSTY 1": {
            "level": 23,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Slash",
                "Sand Attack",
                "Poison Sting"
            ],
            "index": 191
        },
        "TRAINER CHIP": {
            "level": 27,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Slash",
                "Sand Attack",
                "Poison Sting"
            ],
            "index": 194
        },
        "TRAINER FOSTER": {
            "level": 25,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Slash",
                "Sand Attack",
                "Poison Sting"
            ],
            "index": 196
        },
        "TRAINER DUSTY 2": {
            "level": 27,
            "ivs": {
                "hp": 7,
                "atk": 7,
                "def": 7,
                "spa": 7,
                "spd": 7,
                "spe": 7
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Slash",
                "Sand Attack",
                "Poison Sting"
            ],
            "index": 197
        },
        "TRAINER DUSTY 3": {
            "level": 30,
            "ivs": {
                "hp": 8,
                "atk": 8,
                "def": 8,
                "spa": 8,
                "spd": 8,
                "spe": 8
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Slash",
                "Sand Attack",
                "Poison Sting"
            ],
            "index": 198
        },
        "TRAINER DUSTY 4": {
            "level": 33,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Slash",
                "Sand Attack",
                "Poison Sting"
            ],
            "index": 199
        },
        "TRAINER DUSTY 5": {
            "level": 36,
            "ivs": {
                "hp": 10,
                "atk": 10,
                "def": 10,
                "spa": 10,
                "spd": 10,
                "spe": 10
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Slash",
                "Sand Attack",
                "Poison Sting"
            ],
            "index": 200
        },
        "TRAINER JULIE": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 297
        },
        "TRAINER ETHAN 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 502
        },
        "TRAINER GARRISON": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1151
        },
        "TRAINER BRYAN": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1535
        },
        "TRAINER ANDRES 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1779
        },
        " TRAINER ANDRES 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1780
        }
    },
    "Baltoy": {
        "TRAINER CHIP": {
            "level": 27,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Psybeam",
                "Self Destruct",
                "Sandstorm",
                "Ancient Power"
            ],
            "index": 192
        },
        "TRAINER BEAU": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rapid Spin",
                "Mud Slap",
                "Psybeam",
                "Rock Tomb"
            ],
            "index": 483
        },
        " TRAINER BEAU": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rapid Spin",
                "Mud Slap",
                "Psybeam",
                "Rock Tomb"
            ],
            "index": 485
        },
        "TRAINER HEIDI": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rapid Spin",
                "Mud Slap",
                "Psybeam",
                "Rock Tomb"
            ],
            "index": 962
        },
        "TRAINER GRUNT SPACE CENTER 4": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1229
        },
        "TRAINER GRUNT SPACE CENTER 7": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1232
        },
        "TRAINER ERIC": {
            "level": 20,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1306
        },
        "TRAINER LAWRENCE": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1479
        },
        "TRAINER GRUNT MAGMA HIDEOUT 4": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1493
        },
        "TRAINER GRUNT MAGMA HIDEOUT 5": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1495
        },
        "TRAINER GRUNT MAGMA HIDEOUT 11": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1502
        },
        "TRAINER GRUNT MAGMA HIDEOUT 16": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1507
        }
    },
    "Sandshrew": {
        "TRAINER CHIP": {
            "level": 27,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Slash",
                "Sand Attack",
                "Poison Sting"
            ],
            "index": 193
        },
        "TRAINER FOSTER": {
            "level": 25,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Slash",
                "Sand Attack",
                "Poison Sting"
            ],
            "index": 195
        },
        "TRAINER DREW": {
            "level": 23,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Sand Attack",
                "Poison Sting",
                "Slash"
            ],
            "index": 482
        },
        "TRAINER BEAU": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Sting",
                "Sand Attack",
                "Scratch",
                "Dig"
            ],
            "index": 484
        },
        "TRAINER SHANE": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 487
        },
        "TRAINER TRAVIS": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 493
        },
        "TRAINER ETHAN 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 498
        },
        "TRAINER HEIDI": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dig",
                "Sand Attack",
                "Poison Sting",
                "Slash"
            ],
            "index": 961
        },
        "TRAINER BECKY": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sand Attack",
                "Poison Sting",
                "Slash",
                "Dig"
            ],
            "index": 963
        },
        "TRAINER TYRON": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1471
        },
        "TRAINER LAWRENCE": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1480
        },
        "TRAINER ANDRES 1": {
            "level": 25,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1519
        },
        " TRAINER ANDRES 1": {
            "level": 25,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1520
        },
        "TRAINER BRYAN": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1534
        },
        "TRAINER PAT": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1578
        },
        "TRAINER ANDRES 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1770
        },
        " TRAINER ANDRES 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1771
        },
        "TRAINER ANDRES 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1773
        },
        " TRAINER ANDRES 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1774
        },
        "TRAINER ANDRES 4": {
            "level": 35,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1776
        },
        " TRAINER ANDRES 4": {
            "level": 35,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1777
        }
    },
    "Whismur": {
        "GABBY & TY": {
            "level": 17,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 202
        },
        "TRAINER DALTON 1": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 453
        },
        "TRAINER DALTON 2": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 455
        },
        "TRAINER KAREN 2": {
            "level": 26,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 645
        },
        "TRAINER ISAAC 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1110
        }
    },
    "Loudred": {
        "GABBY & TY": {
            "level": 36,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 210
        },
        "TRAINER FERNANDO 1": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 451
        },
        "TRAINER DALTON 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 458
        },
        "TRAINER DALTON 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 461
        },
        "TRAINER KAREN 3": {
            "level": 29,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 647
        },
        "TRAINER KAREN 4": {
            "level": 32,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 649
        },
        "TRAINER ISAAC 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1119
        },
        "TRAINER ISAAC 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1125
        },
        "TRAINER ISAAC 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1131
        },
        "TRAINER ISAAC 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1137
        },
        "TRAINER JONATHAN": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1248
        },
        "TRAINER CRISTIN 1": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1580
        },
        "TRAINER CRISTIN 2": {
            "level": 35,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1815
        },
        "TRAINER CRISTIN 3": {
            "level": 37,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1818
        },
        "TRAINER CRISTIN 4": {
            "level": 39,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1821
        },
        " TRAINER FERNANDO 2": {
            "level": 35,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1828
        },
        "TRAINER FERNANDO 3": {
            "level": 37,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1831
        },
        " TRAINER FERNANDO 4": {
            "level": 39,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1834
        }
    },
    "Magneton": {
        "GABBY & TY": {
            "level": 39,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sonic Boom",
                "Thunder Wave",
                "Metal Sound",
                "Thunderbolt"
            ],
            "index": 211
        },
        "TRAINER BRAXTON": {
            "level": 28,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunderbolt",
                "Supersonic",
                "Thunder Wave",
                "Sonic Boom"
            ],
            "index": 240
        },
        "TRAINER ALBERT": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 252
        },
        "TRAINER DALTON 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 460
        },
        " TRAINER DALTON 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 462
        },
        "TRAINER DALTON 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 463
        },
        " TRAINER DALTON 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 465
        },
        "TRAINER WATTSON 1": {
            "level": 22,
            "ivs": {
                "hp": 26,
                "atk": 26,
                "def": 26,
                "spa": 26,
                "spd": 26,
                "spe": 26
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Shock Wave",
                "Thunder Wave",
                "Sonic Boom"
            ],
            "index": 605
        },
        "TRAINER BENJAMIN 4": {
            "level": 36,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 780
        },
        "TRAINER BENJAMIN 5": {
            "level": 39,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 781
        },
        "TRAINER ABIGAIL 4": {
            "level": 34,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 788
        },
        "TRAINER ABIGAIL 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 789
        },
        "TRAINER WALLY VR 1": {
            "level": 41,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Thunderbolt",
                "Tri Attack",
                "Screech"
            ],
            "index": 1066
        },
        "TRAINER WALLY VR 2": {
            "level": 44,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Thunderbolt",
                "Tri Attack",
                "Screech"
            ],
            "index": 1363
        },
        "TRAINER WALLY VR 3": {
            "level": 47,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Thunderbolt",
                "Tri Attack",
                "Screech"
            ],
            "index": 1368
        },
        "TRAINER WALLY VR 4": {
            "level": 50,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Thunderbolt",
                "Tri Attack",
                "Screech"
            ],
            "index": 1373
        },
        "TRAINER WALLY VR 5": {
            "level": 53,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Thunderbolt",
                "Tri Attack",
                "Screech"
            ],
            "index": 1378
        },
        "TRAINER WATTSON 2": {
            "level": 38,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Protect",
                "Thunder",
                "Rain Dance"
            ],
            "index": 1627
        },
        "TRAINER WATTSON 3": {
            "level": 43,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Protect",
                "Thunder",
                "Rain Dance"
            ],
            "index": 1632
        },
        "TRAINER WATTSON 4": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Protect",
                "Thunder",
                "Rain Dance"
            ],
            "index": 1637
        },
        "TRAINER WATTSON 5": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Supersonic",
                "Protect",
                "Thunder",
                "Rain Dance"
            ],
            "index": 1643
        }
    },
    "Exploud": {
        "GABBY & TY": {
            "level": 39,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Astonish",
                "Stomp",
                "Supersonic",
                "Hyper Voice"
            ],
            "index": 212
        },
        "TRAINER DALTON 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 464
        },
        "TRAINER KAREN 5": {
            "level": 35,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 651
        },
        "TRAINER CRISTIN 5": {
            "level": 41,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1824
        },
        " TRAINER FERNANDO 5": {
            "level": 41,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1837
        }
    },
    "Azurill": {
        "TRAINER LOLA 1": {
            "level": 12,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 213
        },
        " TRAINER LOLA 1": {
            "level": 12,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 214
        },
        "TRAINER SIMON": {
            "level": 12,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 226
        },
        "TRAINER BETHANY": {
            "level": 35,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 679
        }
    },
    "Marill": {
        "TRAINER AUSTINA": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 215
        },
        "TRAINER GWEN": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 216
        },
        "TRAINER LOLA 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 217
        },
        " TRAINER LOLA 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 218
        },
        "TRAINER LOLA 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 219
        },
        " TRAINER LOLA 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 220
        },
        "TRAINER LOLA 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 221
        },
        " TRAINER LOLA 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 222
        },
        "TRAINER SIMON": {
            "level": 12,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 227
        },
        "TRAINER CHARLIE": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 228
        },
        "TRAINER MELISSA": {
            "level": 21,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 341
        },
        "TRAINER BETHANY": {
            "level": 37,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 680
        },
        "TRAINER JANI": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 873
        },
        "TRAINER IMANI": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 921
        },
        "TRAINER TARA": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 927
        },
        "TRAINER GRACE": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 933
        },
        "TRAINER NIKKI": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 936
        },
        "TRAINER BECKY": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rollout",
                "Bubble Beam",
                "Tail Whip",
                "Defense Curl"
            ],
            "index": 964
        },
        "TRAINER NANCY": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 967
        },
        "TRAINER IRENE": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 976
        },
        "TRAINER LYDIA 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1145
        },
        "TRAINER LYDIA 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1154
        },
        "TRAINER LYDIA 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1160
        },
        "TRAINER LYDIA 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1166
        },
        "TRAINER VIVI": {
            "level": 15,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1259
        },
        "TRAINER ROBIN": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1274
        },
        "TRAINER HAILEY": {
            "level": 13,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1461
        },
        "TRAINER SOPHIE": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1475
        },
        "TRAINER ANGELINA": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1484
        },
        "TRAINER ISABELLE": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1518
        },
        "TRAINER CELIA": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1532
        },
        "TRAINER PAT": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1577
        }
    },
    "Azumarill": {
        "TRAINER LOLA 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 223
        },
        " TRAINER LOLA 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 224
        },
        "TRAINER BRIDGET": {
            "level": 40,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 347
        },
        "TRAINER GARRET": {
            "level": 45,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 363
        },
        "TRAINER BETHANY": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 681
        },
        "TRAINER DANA": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 943
        },
        "TRAINER LYDIA 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1172
        },
        "TRAINER ALEXA": {
            "level": 34,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1413
        },
        "RELI & IAN": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1443
        }
    },
    "Linoone": {
        "TRAINER RICKY 2": {
            "level": 27,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sand Attack",
                "Pin Missile",
                "Tail Whip",
                "Surf"
            ],
            "index": 229
        },
        "TRAINER RICKY 3": {
            "level": 30,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sand Attack",
                "Pin Missile",
                "Tail Whip",
                "Surf"
            ],
            "index": 230
        },
        "TRAINER RICKY 4": {
            "level": 33,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sand Attack",
                "Pin Missile",
                "Tail Whip",
                "Surf"
            ],
            "index": 231
        },
        "TRAINER RICKY 5": {
            "level": 36,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sand Attack",
                "Pin Missile",
                "Tail Whip",
                "Surf"
            ],
            "index": 232
        },
        "TRAINER CINDY 3": {
            "level": 27,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 337
        },
        "TRAINER CINDY 4": {
            "level": 30,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 338
        },
        "TRAINER CINDY 5": {
            "level": 33,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 339
        },
        "TRAINER CINDY 6": {
            "level": 36,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fury Swipes",
                "Mud Sport",
                "Odor Sleuth",
                "Sand Attack"
            ],
            "index": 340
        },
        "TRAINER WINSTON 2": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 364
        },
        "TRAINER WINSTON 3": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 365
        },
        "TRAINER WINSTON 4": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 366
        },
        "TRAINER WINSTON 5": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fury Swipes",
                "Mud Sport",
                "Odor Sleuth",
                "Sand Attack"
            ],
            "index": 367
        },
        "TRAINER ETHAN 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 496
        },
        "TRAINER ETHAN 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 500
        },
        "TRAINER ETHAN 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 503
        },
        "TRAINER WALTER 3": {
            "level": 36,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Headbutt",
                "Sand Attack",
                "Odor Sleuth",
                "Fury Swipes"
            ],
            "index": 573
        },
        "TRAINER WALTER 4": {
            "level": 39,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Headbutt",
                "Sand Attack",
                "Odor Sleuth",
                "Fury Swipes"
            ],
            "index": 575
        },
        "TRAINER WALTER 5": {
            "level": 41,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Headbutt",
                "Sand Attack",
                "Odor Sleuth",
                "Fury Swipes"
            ],
            "index": 577
        },
        "TRAINER NORMAN 1": {
            "level": 29,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Slash",
                "Belly Drum",
                "Facade",
                "Headbutt"
            ],
            "index": 613
        },
        "ANNA & MEG": {
            "level": 36,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Growl",
                "Tail Whip",
                "Headbutt",
                "Odor Sleuth"
            ],
            "index": 662
        },
        "TRAINER CALVIN 4": {
            "level": 29,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 720
        },
        "TRAINER CALVIN 5": {
            "level": 32,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 723
        },
        "TRAINER ISAAC 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1120
        },
        "TRAINER ISAAC 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1126
        },
        "TRAINER ISAAC 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1132
        },
        "TRAINER ISAAC 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1138
        },
        "TRAINER ATHENA": {
            "level": 32,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Surf",
                "Thief"
            ],
            "index": 1218
        },
        "TRAINER GABRIELLE 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1857
        },
        "TRAINER GABRIELLE 4": {
            "level": 35,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1863
        },
        "TRAINER GABRIELLE 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1869
        }
    },
    "Swellow": {
        "TRAINER RANDALL": {
            "level": 26,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Quick Attack",
                "Agility",
                "Wing Attack"
            ],
            "index": 233
        },
        "TRAINER BRAXTON": {
            "level": 28,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Focus Energy",
                "Quick Attack",
                "Wing Attack",
                "Endeavor"
            ],
            "index": 237
        },
        "TRAINER SAMUEL": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 254
        },
        "TRAINER ETHAN 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 497
        },
        "TRAINER ETHAN 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 499
        },
        "TRAINER ETHAN 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 501
        },
        "TRAINER CALVIN 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 717
        },
        "TRAINER CALVIN 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 719
        },
        "TRAINER CALVIN 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 722
        },
        "TRAINER PHIL": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 840
        },
        "TRAINER BENNY": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 852
        },
        "TRAINER CHESTER": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 856
        },
        "TRAINER ALEX": {
            "level": 33,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 866
        },
        "TRAINER ISAAC 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1123
        },
        "TRAINER ISAAC 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1129
        },
        "TRAINER ISAAC 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1135
        },
        "TRAINER ISAAC 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1141
        },
        "TRAINER PAXTON": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1238
        },
        "TRAINER HALEY 5": {
            "level": 34,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1268
        },
        "TRAINER FLINT": {
            "level": 29,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1354
        },
        "TRAINER AIDAN": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1420
        },
        "TRAINER COBY": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1478
        },
        "TRAINER CAROLINA": {
            "level": 24,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1528
        },
        "TRAINER GABRIELLE 4": {
            "level": 35,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1866
        },
        "TRAINER GABRIELLE 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1872
        }
    },
    "Spinda": {
        "TRAINER PARKER": {
            "level": 26,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Teeter Dance",
                "Dizzy Punch",
                "Focus Punch"
            ],
            "index": 234
        },
        "TRAINER NORMAN 1": {
            "level": 27,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Teeter Dance",
                "Psybeam",
                "Facade",
                "Encore"
            ],
            "index": 611
        },
        "KATE & JOY": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Psybeam",
                "Dizzy Punch",
                "Teeter Dance"
            ],
            "index": 652
        },
        "TORI & TIA": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1425
        },
        " TORI & TIA": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1426
        },
        "TRAINER NORMAN 2": {
            "level": 43,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Teeter Dance",
                "Skill Swap",
                "Facade",
                "Hypnosis"
            ],
            "index": 1668
        },
        "TRAINER NORMAN 3": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Teeter Dance",
                "Skill Swap",
                "Facade",
                "Hypnosis"
            ],
            "index": 1673
        },
        "TRAINER NORMAN 4": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Teeter Dance",
                "Skill Swap",
                "Facade",
                "Hypnosis"
            ],
            "index": 1678
        },
        "TRAINER NORMAN 5": {
            "level": 58,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Teeter Dance",
                "Skill Swap",
                "Facade",
                "Hypnosis"
            ],
            "index": 1684
        },
        "TRAINER CRISTIN 3": {
            "level": 37,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1817
        },
        "TRAINER CRISTIN 4": {
            "level": 39,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1820
        },
        "TRAINER CRISTIN 5": {
            "level": 41,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1823
        }
    },
    "Slakoth": {
        "TRAINER GEORGE": {
            "level": 26,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Slack Off",
                "Counter",
                "Shadow Ball"
            ],
            "index": 235
        }
    },
    "Vigoroth": {
        "TRAINER BERKE": {
            "level": 26,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Focus Energy",
                "Slash"
            ],
            "index": 236
        },
        "TRAINER NORMAN 1": {
            "level": 27,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Slash",
                "Facade",
                "Encore",
                "Feint Attack"
            ],
            "index": 612
        },
        "TRAINER CRISTIN 1": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1581
        },
        "TRAINER CRISTIN 2": {
            "level": 35,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1816
        },
        "TRAINER CRISTIN 3": {
            "level": 37,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1819
        },
        "TRAINER CRISTIN 4": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1822
        }
    },
    "Trapinch": {
        "TRAINER BRAXTON": {
            "level": 28,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bite",
                "Dig",
                "Feint Attack",
                "Sand Tomb"
            ],
            "index": 238
        },
        "TRAINER JAYLEN": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 714
        }
    },
    "Wailmer": {
        "TRAINER BRAXTON": {
            "level": 28,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rollout",
                "Whirlpool",
                "Astonish",
                "Water Pulse"
            ],
            "index": 239
        },
        "TRAINER WILTON 1": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 248
        },
        "TRAINER WILTON 2": {
            "level": 26,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 265
        },
        "TRAINER WILTON 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 268
        },
        "TRAINER WILTON 4": {
            "level": 32,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 271
        },
        "TRAINER WILTON 5": {
            "level": 35,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 274
        },
        "TRAINER THALIA 1": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 369
        },
        "TRAINER SANTIAGO": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 406
        },
        "TRAINER CHAD": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 415
        },
        "TRAINER DALE": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 742
        },
        " TRAINER DALE": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 744
        },
        "TRAINER CARTER": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 749
        },
        "TRAINER CLARISSA": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 911
        },
        "TRAINER BEVERLY": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 920
        },
        "TRAINER KYLA": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 922
        },
        "TRAINER JENNY 1": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 932
        },
        "TRAINER JENNY 2": {
            "level": 38,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 954
        },
        "TRAINER JENNY 3": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 955
        },
        "TRAINER JENNY 4": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 957
        },
        "TRAINER JENNY 5": {
            "level": 45,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 959
        },
        "TRAINER HUDSON": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1045
        },
        "TRAINER GRUNT UNUSED": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1204
        },
        "TRAINER GRUNT MT PYRE 4": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1206
        },
        "TRAINER CRISSY": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1277
        },
        "TRAINER LUCAS 2": {
            "level": 9,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Splash",
                "Water Gun"
            ],
            "index": 1307
        },
        "TRAINER JONAH": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1404
        },
        " TRAINER WAYNE": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1419
        },
        "TRAINER THALIA 2": {
            "level": 34,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1873
        },
        "TRAINER THALIA 3": {
            "level": 36,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1876
        },
        "TRAINER THALIA 4": {
            "level": 38,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1879
        }
    },
    "Sableye": {
        "TRAINER VINCENT": {
            "level": 44,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 242
        },
        "TRAINER JENNIFER": {
            "level": 30,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 289
        },
        "TRAINER CAROLINE": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 296
        },
        "TRAINER VALERIE 1": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 318
        },
        "TRAINER VALERIE 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 320
        },
        "TRAINER VALERIE 3": {
            "level": 35,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 323
        },
        "TRAINER VALERIE 4": {
            "level": 40,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 325
        },
        "TRAINER VALERIE 5": {
            "level": 42,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 327
        },
        "TRAINER PHOEBE": {
            "level": 50,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shadow Ball",
                "Double Team",
                "Night Shade",
                "Feint Attack"
            ],
            "index": 587
        },
        "TRAINER HALLE": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1149
        }
    },
    "Mawile": {
        "TRAINER LEROY": {
            "level": 46,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 245
        },
        "TRAINER SAMUEL": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 255
        },
        "TRAINER WENDY": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Baton Pass",
                "Feint Attack",
                "Fake Tears",
                "Bite"
            ],
            "index": 281
        }
    },
    "Starmie": {
        "TRAINER LEROY": {
            "level": 46,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 246
        },
        "TRAINER TONY 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 420
        },
        "TRAINER ISAIAH 4": {
            "level": 45,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 811
        },
        "TRAINER ISAIAH 5": {
            "level": 48,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 812
        },
        "TRAINER KATELYN 4": {
            "level": 45,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 822
        },
        "TRAINER KATELYN 5": {
            "level": 48,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 823
        },
        "TRAINER JENNY 5": {
            "level": 45,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 960
        },
        "TRAINER PABLO 5": {
            "level": 43,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1802
        },
        " TRAINER PABLO 5": {
            "level": 43,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1803
        }
    },
    "Electrike": {
        "TRAINER WILTON 1": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 247
        },
        "TRAINER WILTON 2": {
            "level": 26,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 264
        },
        "TRAINER KIRK": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Quick Attack",
                "Thunder Wave",
                "Spark",
                "Leer"
            ],
            "index": 443
        },
        "TRAINER FERNANDO 1": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 450
        },
        "TRAINER WATTSON 1": {
            "level": 20,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shock Wave",
                "Leer",
                "Quick Attack",
                "Howl"
            ],
            "index": 604
        },
        "TRAINER TIMMY": {
            "level": 13,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 728
        },
        "TRAINER DEMETRIUS": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 803
        },
        "TRAINER JOSEPH": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1466
        },
        "TRAINER DEANDRE": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1489
        },
        "TRAINER MYLES": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1572
        },
        "TRAINER PAT": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1576
        },
        "TRAINER FERNANDO 2": {
            "level": 35,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1826
        },
        " TRAINER FERNANDO 2": {
            "level": 35,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1827
        },
        "TRAINER FERNANDO 3": {
            "level": 37,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1829
        }
    },
    "Cacturne": {
        "TRAINER EDGAR": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 250
        },
        "TRAINER SIDNEY": {
            "level": 46,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Leech Seed",
                "Feint Attack",
                "Needle Arm",
                "Cotton Spore"
            ],
            "index": 582
        },
        "TRAINER SEBASTIAN": {
            "level": 39,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1180
        }
    },
    "Muk": {
        "TRAINER ALBERT": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 253
        }
    },
    "Kadabra": {
        "TRAINER SAMUEL": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 256
        },
        "TRAINER VITO": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 258
        },
        "TRAINER JOSHUA": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 538
        },
        "TRAINER CAMERON 2": {
            "level": 33,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 541
        },
        "TRAINER CAMERON 3": {
            "level": 38,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 543
        },
        "TRAINER CAMERON 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 545
        },
        "TRAINER MAURA": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 552
        },
        "TRAINER KAYLA": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 555
        },
        "TRAINER JACKI 1": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 558
        },
        "TRAINER JACKI 2": {
            "level": 34,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 560
        },
        "TRAINER JACKI 3": {
            "level": 37,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 562
        },
        "TRAINER JACKI 4": {
            "level": 40,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 564
        },
        "TRAINER KATHLEEN": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1224
        },
        "TRAINER ALIX": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1546
        },
        "TRAINER ALVARO": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1886
        }
    },
    "Dodrio": {
        "TRAINER VITO": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 257
        },
        "TRAINER DYLAN 4": {
            "level": 34,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 793
        },
        "TRAINER DYLAN 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 794
        },
        "TRAINER MARIA 4": {
            "level": 34,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 798
        },
        "TRAINER MARIA 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 799
        },
        "TRAINER KYRA": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1543
        }
    },
    "Electrode": {
        "TRAINER VITO": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 259
        },
        "TRAINER WATTSON 2": {
            "level": 36,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rollout",
                "Thunder",
                "Explosion",
                "Rain Dance"
            ],
            "index": 1626
        },
        "TRAINER WATTSON 3": {
            "level": 41,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rollout",
                "Thunder",
                "Explosion",
                "Rain Dance"
            ],
            "index": 1631
        },
        "TRAINER WATTSON 4": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rollout",
                "Thunder",
                "Explosion",
                "Rain Dance"
            ],
            "index": 1636
        },
        "TRAINER WATTSON 5": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rollout",
                "Thunder",
                "Explosion",
                "Rain Dance"
            ],
            "index": 1642
        }
    },
    "Kecleon": {
        "TRAINER OWEN": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 261
        },
        "TRAINER JESSICA 1": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bind",
                "Lick",
                "Fury Swipes",
                "Feint Attack"
            ],
            "index": 344
        },
        "TRAINER JESSICA 2": {
            "level": 35,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bind",
                "Lick",
                "Fury Swipes",
                "Feint Attack"
            ],
            "index": 353
        },
        "TRAINER JESSICA 3": {
            "level": 38,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bind",
                "Lick",
                "Fury Swipes",
                "Feint Attack"
            ],
            "index": 355
        },
        "TRAINER JESSICA 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bind",
                "Lick",
                "Fury Swipes",
                "Feint Attack"
            ],
            "index": 357
        },
        "TRAINER JESSICA 5": {
            "level": 44,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bind",
                "Lick",
                "Fury Swipes",
                "Feint Attack"
            ],
            "index": 359
        },
        "JUSTINK": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 489
        },
        "TRAINER JACKSON 5": {
            "level": 39,
            "ivs": {
                "hp": 10,
                "atk": 10,
                "def": 10,
                "spa": 10,
                "spd": 10,
                "spe": 10
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1184
        },
        "TRAINER JONATHAN": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1247
        },
        "TRAINER GERALD": {
            "level": 23,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Fury Swipes",
                "Feint Attack",
                "Bind"
            ],
            "index": 1344
        }
    },
    "Graveler": {
        "TRAINER OWEN": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 262
        },
        "TRAINER WARREN": {
            "level": 33,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 276
        },
        "TRAINER ALAN": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1304
        },
        "  TRAINER TRENT 2": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1316
        },
        "TRAINER TRENT 3": {
            "level": 27,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1319
        },
        " TRAINER TRENT 3": {
            "level": 27,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1320
        },
        "TRAINER TRENT 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1322
        },
        " TRAINER TRENT 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1323
        },
        "  TRAINER TRENT 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1324
        },
        "TRAINER TRENT 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1325
        },
        " TRAINER TRENT 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1326
        },
        "  TRAINER TRENT 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1327
        },
        "TYRA & IVY": {
            "level": 20,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Defense Curl",
                "Rollout",
                "Mud Sport",
                "Rock Throw"
            ],
            "index": 1430
        },
        "TRAINER SAWYER 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1842
        },
        "TRAINER SAWYER 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1845
        }
    },
    "Wailord": {
        "TRAINER OWEN": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 263
        },
        "TRAINER WALLACE": {
            "level": 57,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rain Dance",
                "Water Spout",
                "Double Edge",
                "Blizzard"
            ],
            "index": 729
        },
        "TRAINER THALIA 5": {
            "level": 40,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1882
        }
    },
    "Ludicolo": {
        "TRAINER WARREN": {
            "level": 33,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 277
        },
        "TRAINER MICHELLE": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 294
        },
        "TRAINER WALLACE": {
            "level": 56,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Giga Drain",
                "Surf",
                "Leech Seed",
                "Double Team"
            ],
            "index": 731
        },
        "TRAINER EDWIN 5": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1061
        },
        "TRAINER BRENDAN LILYCOVE TREECKO": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1386
        },
        "TRAINER BRENDAN LILYCOVE TORCHIC": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1389
        },
        "TRAINER MAY LILYCOVE TREECKO": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1398
        },
        "TRAINER MAY LILYCOVE TORCHIC": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1401
        },
        "TRAINER GABRIELLE 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1870
        }
    },
    "Delcatty": {
        "TRAINER MARY": {
            "level": 26,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Feint Attack",
                "Shock Wave"
            ],
            "index": 278
        },
        "    TRAINER COLTON": {
            "level": 42,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Assist",
                "Charm",
                "Feint Attack",
                "Heal Bell"
            ],
            "index": 672
        },
        "TRAINER MIGUEL 4": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 675
        },
        "TRAINER MIGUEL 5": {
            "level": 38,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 676
        },
        "TRAINER WALLY VR 1": {
            "level": 43,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sing",
                "Assist",
                "Charm",
                "Feint Attack"
            ],
            "index": 1064
        },
        "TRAINER LYDIA 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1162
        },
        "TRAINER LYDIA 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1168
        },
        "TRAINER LYDIA 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1174
        },
        "DEZ & LUKE": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1329
        },
        "TRAINER WALLY VR 2": {
            "level": 46,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sing",
                "Assist",
                "Charm",
                "Feint Attack"
            ],
            "index": 1361
        },
        "TRAINER WALLY VR 3": {
            "level": 49,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sing",
                "Assist",
                "Charm",
                "Feint Attack"
            ],
            "index": 1366
        },
        "TRAINER WALLY VR 4": {
            "level": 52,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sing",
                "Assist",
                "Charm",
                "Feint Attack"
            ],
            "index": 1371
        },
        "TRAINER WALLY VR 5": {
            "level": 55,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sing",
                "Assist",
                "Charm",
                "Feint Attack"
            ],
            "index": 1376
        },
        "TRAINER GABRIELLE 4": {
            "level": 35,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1861
        },
        "TRAINER GABRIELLE 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1867
        }
    },
    "Wigglytuff": {
        "TRAINER ALEXIA": {
            "level": 26,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Defense Curl",
                "Double Edge",
                "Shadow Ball"
            ],
            "index": 279
        }
    },
    "Lairon": {
        "TRAINER KEIRA": {
            "level": 45,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 284
        },
        "TRAINER STEVE 2": {
            "level": 27,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 373
        },
        "TRAINER STEVE 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 374
        },
        "TRAINER STEVE 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 376
        },
        "TRAINER ISAAC 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1139
        }
    },
    "Wingull": {
        "TRAINER BROOKE 1": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 286
        },
        "TRAINER BROOKE 2": {
            "level": 26,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 300
        },
        "TRAINER DARRIN": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 385
        },
        "TRAINER SPENCER": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 393
        },
        "TRAINER DEAN": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 399
        },
        "TRAINER HERMAN": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 403
        },
        "TRAINER DUDLEY": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 412
        },
        "TRAINER BERNIE 1": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 473
        },
        "TRAINER BERNIE 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 475
        },
        "TRAINER PAUL": {
            "level": 15,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 632
        },
        "TRAINER CHASE": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 807
        },
        "TRAINER DONNY": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 814
        },
        "TRAINER ALLISON": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 818
        },
        "TRAINER PERRY": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 837
        },
        "TRAINER HUGH": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 838
        },
        "TRAINER COLIN": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 849
        },
        "TRAINER BEVERLY": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 919
        },
        "TRAINER DENISE": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 923
        },
        "TRAINER ALICE": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 930
        },
        "TRAINER HUEY": {
            "level": 12,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1005
        },
        "TRAINER EDMOND": {
            "level": 13,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1007
        },
        "TRAINER ERNEST 1": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1008
        },
        "TRAINER DWAYNE": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1010
        },
        "TRAINER ERNEST 2": {
            "level": 36,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1020
        },
        "TRAINER BRENDAN ROUTE 110 MUDKIP": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1070
        },
        "TRAINER BRENDAN ROUTE 110 TREECKO": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1076
        },
        "TRAINER MAY ROUTE 110 MUDKIP": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1090
        },
        "TRAINER MAY ROUTE 110 TREECKO": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1097
        },
        "TRAINER LYDIA 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1143
        },
        "TRAINER LYDIA 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1152
        },
        "TRAINER BRENDAN RUSTBORO MUDKIP": {
            "level": 13,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1236
        },
        "TRAINER MAY RUSTBORO MUDKIP": {
            "level": 13,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1251
        },
        "RELI & IAN": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1444
        },
        "TRAINER JOSUE": {
            "level": 25,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1522
        },
        "TRAINER CORY 1": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1524
        },
        "TRAINER MYLES": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1569
        },
        "TRAINER CORY 2": {
            "level": 30,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1781
        },
        "TRAINER PABLO 3": {
            "level": 39,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1795
        }
    },
    "Torkoal": {
        "TRAINER MICHELLE": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 292
        },
        "TRAINER FLANNERY 1": {
            "level": 29,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Sunny Day",
                "Body Slam",
                "Attract"
            ],
            "index": 610
        },
        "TRAINER MAY RUSTBORO TORCHIC": {
            "level": 13,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1584
        },
        "TRAINER FLANNERY 2": {
            "level": 40,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Sunny Day",
                "Explosion",
                "Attract"
            ],
            "index": 1648
        },
        "TRAINER FLANNERY 3": {
            "level": 45,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Sunny Day",
                "Explosion",
                "Attract"
            ],
            "index": 1653
        },
        "TRAINER FLANNERY 4": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Sunny Day",
                "Explosion",
                "Attract"
            ],
            "index": 1659
        },
        "TRAINER FLANNERY 5": {
            "level": 55,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Sunny Day",
                "Explosion",
                "Attract"
            ],
            "index": 1665
        }
    },
    "Skarmory": {
        "TRAINER CAROLINE": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 295
        },
        "TRAINER WINONA 1": {
            "level": 31,
            "ivs": {
                "hp": 26,
                "atk": 26,
                "def": 26,
                "spa": 26,
                "spd": 26,
                "spe": 26
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sand Attack",
                "Fury Attack",
                "Steel Wing",
                "Aerial Ace"
            ],
            "index": 618
        },
        "TRAINER JARED": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 842
        },
        "TRAINER HUMBERTO": {
            "level": 30,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 844
        },
        "TRAINER AIDAN": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1421
        },
        "TRAINER COBY": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1477
        },
        "TRAINER ELIJAH": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1530
        },
        " TRAINER ELIJAH": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1531
        },
        "TRAINER WINONA 2": {
            "level": 43,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Whirlwind",
                "Spikes",
                "Steel Wing",
                "Aerial Ace"
            ],
            "index": 1689
        },
        "TRAINER WINONA 3": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Whirlwind",
                "Spikes",
                "Steel Wing",
                "Aerial Ace"
            ],
            "index": 1695
        },
        "TRAINER WINONA 4": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Whirlwind",
                "Spikes",
                "Steel Wing",
                "Aerial Ace"
            ],
            "index": 1701
        },
        "TRAINER WINONA 5": {
            "level": 58,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Whirlwind",
                "Spikes",
                "Steel Wing",
                "Aerial Ace"
            ],
            "index": 1707
        },
        "TRAINER STEVEN": {
            "level": 77,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Toxic",
                "Aerial Ace",
                "Spikes",
                "Steel Wing"
            ],
            "index": 1757
        }
    },
    "Ninetales": {
        "TRAINER JULIE": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 298
        }
    },
    "Tropius": {
        "TRAINER JULIE": {
            "level": 42,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 299
        },
        "TRAINER WINONA 1": {
            "level": 29,
            "ivs": {
                "hp": 25,
                "atk": 25,
                "def": 25,
                "spa": 25,
                "spd": 25,
                "spe": 25
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sunny Day",
                "Aerial Ace",
                "Solar Beam",
                "Synthesis"
            ],
            "index": 616
        },
        "TRAINER HUGH": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 839
        },
        "TRAINER JARED": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 843
        },
        "TRAINER PRESLEY": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 845
        },
        "TRAINER BECK": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 867
        },
        "TRAINER BRENDAN LILYCOVE MUDKIP": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1380
        },
        "TRAINER BRENDAN LILYCOVE TREECKO": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1384
        },
        "TRAINER BRENDAN LILYCOVE TORCHIC": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1388
        },
        "TRAINER MAY LILYCOVE MUDKIP": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1392
        },
        "TRAINER MAY LILYCOVE TREECKO": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1396
        },
        "TRAINER MAY LILYCOVE TORCHIC": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1400
        },
        "TRAINER MYLES": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1570
        },
        "TRAINER WINONA 2": {
            "level": 38,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sunny Day",
                "Aerial Ace",
                "Solar Beam",
                "Earthquake"
            ],
            "index": 1687
        },
        "TRAINER WINONA 3": {
            "level": 43,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sunny Day",
                "Aerial Ace",
                "Solar Beam",
                "Earthquake"
            ],
            "index": 1692
        },
        "TRAINER WINONA 4": {
            "level": 49,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sunny Day",
                "Aerial Ace",
                "Solar Beam",
                "Earthquake"
            ],
            "index": 1698
        },
        "TRAINER WINONA 5": {
            "level": 54,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sunny Day",
                "Aerial Ace",
                "Solar Beam",
                "Earthquake"
            ],
            "index": 1704
        },
        "TRAINER DARIUS": {
            "level": 30,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1756
        }
    },
    "Camerupt": {
        "TRAINER BROOKE 5": {
            "level": 34,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 310
        },
        "TRAINER FLANNERY 1": {
            "level": 26,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Tackle",
                "Sunny Day",
                "Attract"
            ],
            "index": 609
        },
        "TRAINER MADELINE 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Take Down",
                "Earthquake",
                "Sunny Day"
            ],
            "index": 918
        },
        "TRAINER TABITHA MOSSDEEP": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1052
        },
        "TRAINER MAXIE MAGMA HIDEOUT": {
            "level": 39,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1255
        },
        "TRAINER MAXIE MT CHIMNEY": {
            "level": 25,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1258
        },
        "TRAINER TABITHA MAGMA HIDEOUT": {
            "level": 33,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1511
        },
        "TRAINER DARCY": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1513
        },
        "TRAINER MAXIE MOSSDEEP": {
            "level": 44,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1516
        },
        "TRAINER FLANNERY 2": {
            "level": 38,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Sunny Day",
                "Earthquake",
                "Attract"
            ],
            "index": 1647
        },
        "TRAINER FLANNERY 3": {
            "level": 43,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Sunny Day",
                "Earthquake",
                "Attract"
            ],
            "index": 1652
        },
        "TRAINER FLANNERY 4": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Sunny Day",
                "Earthquake",
                "Attract"
            ],
            "index": 1658
        },
        "TRAINER FLANNERY 5": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Sunny Day",
                "Earthquake",
                "Attract"
            ],
            "index": 1664
        },
        "TRAINER SAWYER 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1847
        }
    },
    "Banette": {
        "TRAINER PATRICIA": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 312
        },
        "TRAINER PHOEBE": {
            "level": 49,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shadow Ball",
                "Grudge",
                "Will O Wisp",
                "Feint Attack"
            ],
            "index": 586
        },
        " TRAINER PHOEBE": {
            "level": 49,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shadow Ball",
                "Psychic",
                "Thunderbolt",
                "Facade"
            ],
            "index": 588
        },
        "TRAINER JERRY 5": {
            "level": 34,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 640
        },
        "TRAINER ALVARO": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1885
        }
    },
    "Lunatone": {
        "TRAINER PATRICIA": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 313
        },
        "TRAINER JACKI 1": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 559
        },
        "TRAINER JACKI 2": {
            "level": 34,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 561
        },
        "TRAINER JACKI 3": {
            "level": 37,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 563
        },
        "TRAINER JACKI 4": {
            "level": 40,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 565
        },
        "TRAINER JACKI 5": {
            "level": 43,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 566
        },
        "TATE&LIZA": {
            "level": 65,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Earthquake",
                "Psychic",
                "Rest",
                "Calm Mind"
            ],
            "index": 1730
        },
        "TRAINER MITCHELL": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Explosion",
                "Reflect",
                "Light Screen",
                "Psychic"
            ],
            "index": 1117
        }
    },
    "Duskull": {
        "TRAINER KINDRA": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 314
        },
        "TRAINER TAMMY": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 316
        },
        "TRAINER VALERIE 5": {
            "level": 42,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 326
        },
        "GINA & MIA": {
            "level": 10,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Night Shade",
                "Disable"
            ],
            "index": 997
        }
    },
    "Shuppet": {
        "TRAINER KINDRA": {
            "level": 30,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 315
        },
        "TRAINER TAMMY": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 317
        },
        "TRAINER TASHA": {
            "level": 32,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 319
        }
    },
    "Grumpig": {
        "TRAINER VALERIE 5": {
            "level": 42,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 328
        }
    },
    "Luvdisc": {
        "TRAINER DAPHNE": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Attract",
                "Sweet Kiss",
                "Flail",
                "Water Pulse"
            ],
            "index": 329
        },
        " TRAINER DAPHNE": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Attract",
                "Safeguard",
                "Take Down",
                "Water Pulse"
            ],
            "index": 330
        },
        "TRAINER JUAN 1": {
            "level": 41,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Attract",
                "Sweet Kiss",
                "Flail"
            ],
            "index": 624
        },
        "TRAINER TANYA": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 934
        },
        "TRAINER SUSIE": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 941
        },
        "TRAINER SIENNA": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 944
        },
        " TRAINER SIENNA": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 945
        },
        "TRAINER LAUREL": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 951
        },
        " TRAINER LAUREL": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 952
        },
        "TRAINER JENNY 5": {
            "level": 45,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 958
        },
        "TRAINER ANDREA": {
            "level": 40,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1275
        },
        "LEA & JED": {
            "level": 45,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1331
        },
        " LEA & JED": {
            "level": 45,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1332
        },
        "TRAINER THALIA 3": {
            "level": 36,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1875
        },
        "TRAINER THALIA 4": {
            "level": 38,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1878
        },
        "TRAINER THALIA 5": {
            "level": 40,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1881
        }
    },
    "Seaking": {
        "TRAINER BRIANNA": {
            "level": 40,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": "Nugget",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 335
        },
        "TRAINER SHARON": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 935
        },
        "TRAINER KARA": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 942
        },
        "TRAINER DEBRA": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 946
        },
        "TRAINER CARLEE": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 953
        },
        "TRAINER LYDIA 5": {
            "level": 31,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1175
        }
    },
    "Goldeen": {
        "TRAINER CONNIE": {
            "level": 40,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 346
        },
        "TRAINER CLAUDE": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 739
        },
        "TRAINER DENISE": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 924
        },
        "TRAINER BETH": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 925
        },
        "TRAINER MISSY": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 928
        },
        "TRAINER ALICE": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 929
        },
        " TRAINER ALICE": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 931
        },
        "TRAINER BRENDA": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 938
        },
        "TRAINER KATIE": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 939
        },
        "TRAINER LYDIA 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1148
        },
        "TRAINER LYDIA 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1157
        },
        "TRAINER LYDIA 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1163
        },
        "TRAINER LYDIA 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1169
        },
        "TRAINER CRISSY": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1276
        },
        "TRAINER JOHANNA": {
            "level": 13,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1343
        },
        "LISA & RAY": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1455
        },
        "TRAINER RACHEL": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1562
        }
    },
    "Clamperl": {
        "TRAINER OLIVIA": {
            "level": 35,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Iron Defense",
                "Whirlpool",
                "Rain Dance",
                "Water Pulse"
            ],
            "index": 348
        }
    },
    "Corphish": {
        "TRAINER OLIVIA": {
            "level": 37,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Taunt",
                "Crabhammer",
                "Water Pulse"
            ],
            "index": 349
        }
    },
    "Whiscash": {
        "TRAINER MOLLIE": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 361
        },
        "TRAINER JUAN 1": {
            "level": 41,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rain Dance",
                "Water Pulse",
                "Amnesia",
                "Earthquake"
            ],
            "index": 625
        },
        "TRAINER WALLACE": {
            "level": 56,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Earthquake",
                "Surf",
                "Amnesia",
                "Hyper Beam"
            ],
            "index": 732
        },
        "TRAINER JUAN 2": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rain Dance",
                "Water Pulse",
                "Double Team",
                "Fissure"
            ],
            "index": 1733
        },
        "TRAINER JUAN 3": {
            "level": 51,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rain Dance",
                "Water Pulse",
                "Double Team",
                "Fissure"
            ],
            "index": 1738
        },
        "TRAINER JUAN 4": {
            "level": 58,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rain Dance",
                "Water Pulse",
                "Double Team",
                "Fissure"
            ],
            "index": 1743
        },
        "TRAINER JUAN 5": {
            "level": 63,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rain Dance",
                "Water Pulse",
                "Double Team",
                "Fissure"
            ],
            "index": 1749
        }
    },
    "Meditite": {
        "TRAINER MOLLIE": {
            "level": 33,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 362
        },
        "TRAINER BRAWLY 1": {
            "level": 16,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Focus Punch",
                "Light Screen",
                "Reflect",
                "Bulk Up"
            ],
            "index": 601
        },
        "TRAINER JERRY 2": {
            "level": 26,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 634
        },
        "TRAINER JERRY 3": {
            "level": 29,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 636
        },
        "TRAINER VICKY": {
            "level": 18,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "High Jump Kick",
                "Meditate",
                "Confusion",
                "Detect"
            ],
            "index": 697
        },
        "TRAINER SHELBY 1": {
            "level": 21,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 698
        },
        "TRAINER SHELBY 2": {
            "level": 30,
            "ivs": {
                "hp": 25,
                "atk": 25,
                "def": 25,
                "spa": 25,
                "spd": 25,
                "spe": 25
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 700
        },
        "TRAINER JOCELYN": {
            "level": 13,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 895
        },
        "TRAINER LAURA": {
            "level": 13,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 896
        },
        "TRAINER CYNDY 1": {
            "level": 18,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 897
        },
        "TRAINER CORA": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 899
        },
        "TRAINER CYNDY 2": {
            "level": 26,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 901
        },
        "TRAINER CYNDY 3": {
            "level": 29,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 903
        },
        "TRAINER REYNA": {
            "level": 33,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1043
        },
        "TRAINER LILITH": {
            "level": 13,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1213
        },
        "TRAINER SYLVIA": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1215
        },
        "TRAINER VIVIAN": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bide",
                "Detect",
                "Confusion",
                "Thunder Punch"
            ],
            "index": 1345
        },
        " TRAINER VIVIAN": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder Punch",
                "Detect",
                "Confusion",
                "Meditate"
            ],
            "index": 1346
        },
        "TRAINER DANIELLE": {
            "level": 23,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Bide",
                "Detect",
                "Confusion",
                "Fire Punch"
            ],
            "index": 1347
        },
        "TRAINER HELENE": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1548
        },
        "TRAINER MARLENE": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1550
        },
        "TRAINER AISHA": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1556
        },
        "TRAINER CALLIE": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1564
        },
        "TRAINER BRAWLY 2": {
            "level": 33,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Psychic",
                "Light Screen",
                "Reflect",
                "Focus Punch"
            ],
            "index": 1607
        }
    },
    "Aron": {
        "TRAINER STEVE 1": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 368
        },
        "TRAINER DILLON": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 715
        },
        "TRAINER TIMMY": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 727
        },
        "TRAINER ISAAC 1": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1112
        },
        "TRAINER ISAAC 2": {
            "level": 22,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1121
        },
        "TRAINER ISAAC 3": {
            "level": 25,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1127
        },
        "TRAINER ISAAC 4": {
            "level": 28,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1133
        },
        "TRAINER WYATT": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1481
        },
        " TRAINER WYATT": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1482
        },
        "TRAINER DEANDRE": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1488
        }
    },
    "Horsea": {
        "TRAINER THALIA 1": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 370
        },
        "TRAINER STAN": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 396
        },
        "TRAINER TARA": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 926
        },
        "TRAINER LINDA": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 947
        },
        "TRAINER THALIA 2": {
            "level": 34,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1874
        }
    },
    "Rhyhorn": {
        "TRAINER MARK": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 371
        },
        "TRAINER STEVE 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 375
        },
        "TRAINER STEVE 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 377
        }
    },
    "Aggron": {
        "TRAINER STEVE 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 378
        },
        "TRAINER STEVEN": {
            "level": 76,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Earthquake",
                "Solar Beam",
                "Dragon Claw"
            ],
            "index": 1759
        }
    },
    "Rhydon": {
        "TRAINER STEVE 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 379
        }
    },
    "Tentacool": {
        "TRAINER DOMINIK": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 381
        },
        "TRAINER DOUGLAS": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 382
        },
        " TRAINER DOUGLAS": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 383
        },
        "TRAINER DARRIN": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 384
        },
        " TRAINER DARRIN": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 386
        },
        "TRAINER DAVID": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 390
        },
        "TRAINER SPENCER": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 392
        },
        "TRAINER DUDLEY": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 411
        },
        "TRAINER CHAD": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 414
        },
        "TRAINER ANDREW": {
            "level": 10,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 736
        },
        "TRAINER DALE": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 741
        },
        " TRAINER DALE": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 743
        },
        "TRAINER BARNY": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 746
        },
        "TRAINER WADE": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 748
        },
        "TRAINER ELLIOT 2": {
            "level": 24,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 751
        },
        "TRAINER ELLIOT 3": {
            "level": 26,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 756
        },
        "TRAINER DWAYNE": {
            "level": 11,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1012
        },
        "TRAINER ERNEST 2": {
            "level": 36,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1021
        },
        "TRAINER ERNEST 3": {
            "level": 39,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1024
        },
        "TRAINER ERNEST 4": {
            "level": 42,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1027
        },
        "TRAINER JONAH": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1405
        },
        "TRAINER WAYNE": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1417
        },
        " TRAINER WAYNE": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1418
        },
        "LISA & RAY": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1456
        },
        "TRAINER CHRIS": {
            "level": 20,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1458
        },
        "TRAINER CHANDLER": {
            "level": 12,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1462
        },
        " TRAINER CHANDLER": {
            "level": 12,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1463
        },
        "TRAINER PETE": {
            "level": 15,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1517
        },
        "TRAINER CORY 1": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1526
        },
        "TRAINER CORY 2": {
            "level": 30,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1783
        },
        "TRAINER CORY 3": {
            "level": 32,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1786
        }
    },
    "Tentacruel": {
        "TRAINER JEROME": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 388
        },
        "TRAINER NOLEN": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 395
        },
        "TRAINER HERMAN": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 404
        },
        "TRAINER SANTIAGO": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 405
        },
        "TRAINER DUDLEY": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 413
        },
        "TRAINER WALLACE": {
            "level": 55,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Toxic",
                "Hydro Pump",
                "Sludge Bomb",
                "Ice Beam"
            ],
            "index": 730
        },
        "TRAINER CARTER": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 750
        },
        "TRAINER ELLIOT 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 760
        },
        " TRAINER ELLIOT 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 765
        },
        "TRAINER PHILLIP": {
            "level": 44,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1013
        },
        "TRAINER ERNEST 5": {
            "level": 45,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1031
        },
        "TRAINER HARRISON": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1219
        },
        "TRAINER HENRY": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1408
        },
        "TRAINER CORY 4": {
            "level": 34,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1789
        },
        "TRAINER CORY 5": {
            "level": 36,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1792
        }
    },
    "Sealeo": {
        "TRAINER FRANKLIN": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 408
        },
        "TRAINER GLACIA": {
            "level": 50,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Encore",
                "Body Slam",
                "Hail",
                "Ice Ball"
            ],
            "index": 590
        },
        " TRAINER GLACIA": {
            "level": 52,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Attract",
                "Double Edge",
                "Hail",
                "Blizzard"
            ],
            "index": 592
        },
        "TRAINER JUAN 1": {
            "level": 43,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Encore",
                "Body Slam",
                "Aurora Beam",
                "Water Pulse"
            ],
            "index": 626
        }
    },
    "Spheal": {
        "TRAINER KEVIN": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 409
        },
        "TRAINER NIKKI": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 937
        },
        "TRAINER KATIE": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 940
        },
        "TRAINER DUNCAN": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1018
        },
        "TRAINER KELVIN": {
            "level": 33,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1041
        },
        "TRAINER REED": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1422
        }
    },
    "Staryu": {
        "TRAINER TONY 4": {
            "level": 34,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 418
        },
        "TRAINER CAMDEN": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 800
        },
        " TRAINER CAMDEN": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 801
        },
        "TRAINER ISAIAH 1": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 804
        },
        "TRAINER PABLO 1": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 805
        },
        " TRAINER PABLO 1": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 806
        },
        "TRAINER CHASE": {
            "level": 34,
            "ivs": {
                "hp": 9,
                "atk": 9,
                "def": 9,
                "spa": 9,
                "spd": 9,
                "spe": 9
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 808
        },
        "TRAINER ISAIAH 2": {
            "level": 39,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 809
        },
        "TRAINER ISAIAH 3": {
            "level": 42,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 810
        },
        "TRAINER ISOBEL": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 813
        },
        "TRAINER DONNY": {
            "level": 34,
            "ivs": {
                "hp": 19,
                "atk": 19,
                "def": 19,
                "spa": 19,
                "spd": 19,
                "spe": 19
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 815
        },
        "TRAINER TALIA": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 816
        },
        "TRAINER KATELYN 1": {
            "level": 35,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 817
        },
        "TRAINER ALLISON": {
            "level": 33,
            "ivs": {
                "hp": 29,
                "atk": 29,
                "def": 29,
                "spa": 29,
                "spd": 29,
                "spe": 29
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 819
        },
        "TRAINER KATELYN 2": {
            "level": 39,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 820
        },
        "TRAINER KATELYN 3": {
            "level": 42,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 821
        },
        "TRAINER JENNY 4": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 956
        },
        "TRAINER ISABELLA": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1240
        },
        "TRAINER CAMRON": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1523
        },
        "TRAINER PABLO 2": {
            "level": 37,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1793
        },
        " TRAINER PABLO 2": {
            "level": 37,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1794
        },
        "TRAINER PABLO 3": {
            "level": 39,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1796
        },
        " TRAINER PABLO 3": {
            "level": 39,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1797
        },
        "TRAINER PABLO 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1799
        },
        " TRAINER PABLO 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1800
        }
    },
    "Machamp": {
        " TRAINER NOB 5": {
            "level": 33,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": "Black Belt",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 438
        },
        "TRAINER AURON": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1039
        },
        "TRAINER BRAWLY 2": {
            "level": 33,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Karate Chop",
                "Rock Slide",
                "Focus Punch",
                "Bulk Up"
            ],
            "index": 1606
        },
        "TRAINER BRAWLY 3": {
            "level": 38,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Karate Chop",
                "Rock Slide",
                "Focus Punch",
                "Bulk Up"
            ],
            "index": 1610
        },
        "TRAINER BRAWLY 4": {
            "level": 43,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Karate Chop",
                "Rock Slide",
                "Focus Punch",
                "Bulk Up"
            ],
            "index": 1615
        },
        "TRAINER BRAWLY 5": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Cross Chop",
                "Rock Slide",
                "Focus Punch",
                "Bulk Up"
            ],
            "index": 1621
        },
        "TRAINER KOJI 5": {
            "level": 43,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1813
        },
        " TRAINER KOJI 5": {
            "level": 43,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1814
        }
    },
    "Slugma": {
        "TRAINER JEFF": {
            "level": 22,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 467
        },
        " TRAINER JEFF": {
            "level": 22,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 468
        },
        "TRAINER JACE": {
            "level": 23,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 470
        },
        "TRAINER KEEGAN": {
            "level": 23,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 471
        },
        "TRAINER BERNIE 1": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 472
        },
        "TRAINER BERNIE 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 474
        },
        "TRAINER BERNIE 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 476
        },
        "TRAINER BERNIE 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 478
        },
        "TRAINER FLANNERY 1": {
            "level": 24,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Smog",
                "Light Screen",
                "Sunny Day"
            ],
            "index": 608
        },
        "TRAINER BRENDAN ROUTE 110 MUDKIP": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1069
        },
        "TRAINER BRENDAN ROUTE 119 MUDKIP": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1072
        },
        "TRAINER BRENDAN ROUTE 110 TORCHIC": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1084
        },
        "TRAINER BRENDAN ROUTE 119 TORCHIC": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1087
        },
        "TRAINER MAY ROUTE 110 MUDKIP": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1091
        },
        "TRAINER MAY ROUTE 119 MUDKIP": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1093
        },
        "TRAINER MAY ROUTE 110 TORCHIC": {
            "level": 18,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1105
        },
        "TRAINER MAY ROUTE 119 TORCHIC": {
            "level": 29,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1108
        },
        "TRAINER BRENDAN RUSTBORO TORCHIC": {
            "level": 13,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1249
        },
        "TRAINER BRENDAN LILYCOVE MUDKIP": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1381
        },
        "TRAINER BRENDAN LILYCOVE TORCHIC": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1390
        },
        "TRAINER MAY LILYCOVE MUDKIP": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1393
        },
        "TRAINER MAY LILYCOVE TORCHIC": {
            "level": 32,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1402
        },
        "TRAINER BRYANT": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1539
        },
        "TRAINER DAYTON": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1560
        }
    },
    "Magcargo": {
        "TRAINER BERNIE 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 480
        },
        "TRAINER FLANNERY 2": {
            "level": 38,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Attract",
                "Light Screen",
                "Rock Slide"
            ],
            "index": 1645
        },
        "TRAINER FLANNERY 3": {
            "level": 43,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Attract",
                "Light Screen",
                "Rock Slide"
            ],
            "index": 1650
        },
        "TRAINER FLANNERY 4": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Attract",
                "Light Screen",
                "Rock Slide"
            ],
            "index": 1656
        },
        "TRAINER FLANNERY 5": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "White Herb",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Overheat",
                "Attract",
                "Light Screen",
                "Rock Slide"
            ],
            "index": 1661
        }
    },
    "Nuzleaf": {
        "TRAINER LARRY": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 486
        },
        "TRAINER SHANE": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 488
        },
        "TRAINER EDWIN 1": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1049
        },
        "TRAINER EDWIN 2": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1056
        },
        "TRAINER EDWIN 3": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1058
        },
        "TRAINER EDWIN 4": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1060
        },
        "TRAINER LORENZO": {
            "level": 28,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1178
        },
        "TRAINER JENNA": {
            "level": 28,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1190
        },
        "TRAINER CHARLOTTE": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1486
        },
        "TRAINER BRANDEN": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1537
        },
        "TRAINER GABRIELLE 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1859
        },
        "TRAINER GABRIELLE 4": {
            "level": 35,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1865
        }
    },
    "Surskit": {
        "TRAINER BRENT": {
            "level": 26,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 504
        },
        "TRAINER JEFFREY 1": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 511
        },
        " TRAINER JEFFREY 1": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 512
        },
        "  TRAINER JEFFREY 1": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 513
        },
        "TRAINER JEFFREY 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 516
        },
        " TRAINER JEFFREY 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 517
        },
        "  TRAINER JEFFREY 2": {
            "level": 31,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 518
        },
        "TRAINER JEFFREY 3": {
            "level": 34,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 519
        },
        " TRAINER JEFFREY 3": {
            "level": 34,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 520
        },
        "TRAINER JEFFREY 4": {
            "level": 36,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 522
        },
        " TRAINER JEFFREY 4": {
            "level": 36,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 524
        },
        "TRAINER JEFFREY 5": {
            "level": 38,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 526
        },
        " TRAINER JEFFREY 5": {
            "level": 38,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 528
        },
        "TRAINER JAMES 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1286
        },
        "TRAINER JAMES 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1289
        }
    },
    "Wurmple": {
        "TRAINER DONALD": {
            "level": 24,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 505
        },
        "TRAINER TAYLOR": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 508
        },
        "TRAINER JEFFREY 4": {
            "level": 36,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 523
        }
    },
    "Silcoon": {
        "TRAINER DONALD": {
            "level": 24,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 506
        }
    },
    "Beautifly": {
        "TRAINER DONALD": {
            "level": 24,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 507
        },
        "TRAINER DEREK": {
            "level": 16,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 515
        },
        "TRAINER JEFFREY 5": {
            "level": 38,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 530
        },
        "TRAINER GEORGIA": {
            "level": 16,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 643
        },
        "MIU & YUKI": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 993
        },
        "MEL & PAUL": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Gust",
                "Mega Drain",
                "Attract",
                "Stun Spore"
            ],
            "index": 1432
        },
        "TRAINER CALE": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1567
        }
    },
    "Cascoon": {
        "TRAINER TAYLOR": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 509
        }
    },
    "Dustox": {
        "TRAINER TAYLOR": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 510
        },
        "TRAINER DEREK": {
            "level": 16,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 514
        },
        "TRAINER JEFFREY 5": {
            "level": 38,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 527
        },
        "MIU & YUKI": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 994
        },
        "TRAINER JAMES 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1284
        },
        "TRAINER JAMES 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1287
        },
        "TRAINER JAMES 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1291
        },
        "MEL & PAUL": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Gust",
                "Psybeam",
                "Toxic",
                "Protect"
            ],
            "index": 1431
        },
        "TRAINER CALE": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1566
        }
    },
    "Masquerain": {
        " TRAINER JEFFREY 3": {
            "level": 34,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 521
        },
        " TRAINER JEFFREY 4": {
            "level": 36,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 525
        },
        "TRAINER JEFFREY 5": {
            "level": 38,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": "Silver Powder",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 529
        }
    },
    "Kirlia": {
        "TRAINER PRESTON": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 532
        },
        " TRAINER WILLIAM": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 537
        },
        "TRAINER HANNAH": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 550
        },
        "TRAINER ALEXIS": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 556
        },
        "TRAINER JERRY 3": {
            "level": 29,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 635
        },
        "TRAINER JERRY 4": {
            "level": 32,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 637
        },
        "TRAINER JERRY 5": {
            "level": 34,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 639
        },
        "TRAINER ALIX": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1547
        }
    },
    "Ralts": {
        "TRAINER VIRGIL": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 533
        },
        "TRAINER WILLIAM": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 535
        },
        " TRAINER WILLIAM": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 536
        },
        "TRAINER TED": {
            "level": 17,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 629
        },
        "TRAINER JERRY 2": {
            "level": 26,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 633
        },
        "TRAINER WALLY MAUVILLE": {
            "level": 16,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1359
        },
        "TRAINER BRANDI": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1555
        }
    },
    "Girafarig": {
        "TRAINER BLAKE": {
            "level": 36,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 534
        },
        "TRAINER TERRY": {
            "level": 37,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1222
        },
        "TRAINER CLIFFORD": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1225
        }
    },
    "Solrock": {
        "TRAINER JOSHUA": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 539
        },
        "TRAINER CAMERON 1": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 540
        },
        "TRAINER CAMERON 2": {
            "level": 33,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 542
        },
        "TRAINER CAMERON 3": {
            "level": 38,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 544
        },
        "TRAINER CAMERON 4": {
            "level": 41,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 546
        },
        "TRAINER CAMERON 5": {
            "level": 45,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 547
        },
        "TATE&LIZA": {
            "level": 65,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sunny Day",
                "Solar Beam",
                "Psychic",
                "Flamethrower"
            ],
            "index": 1731
        },
        "TRAINER MITCHELL": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Explosion",
                "Reflect",
                "Light Screen",
                "Shadow Ball"
            ],
            "index": 1118
        }
    },
    "Alakazam": {
        "TRAINER CAMERON 5": {
            "level": 45,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 548
        },
        "TRAINER JACKI 5": {
            "level": 43,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 567
        }
    },
    "Wobbuffet": {
        "TRAINER KAYLA": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 553
        },
        "TRAINER CEDRIC": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Destiny Bond",
                "Safeguard",
                "Counter",
                "Mirror Coat"
            ],
            "index": 974
        },
        "TRAINER NICHOLAS": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1226
        },
        "TRAINER EVERETT": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1887
        }
    },
    "Natu": {
        "TRAINER KAYLA": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 554
        },
        "TRAINER COLIN": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 850
        },
        "TRAINER ROBERT 2": {
            "level": 32,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 857
        },
        "TRAINER ROBERT 3": {
            "level": 35,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 859
        },
        "TRAINER ROBERT 4": {
            "level": 38,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 861
        },
        "TRAINER ALEX": {
            "level": 33,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 865
        },
        "TRAINER MACEY": {
            "level": 36,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1233
        }
    },
    "Golduck": {
        "TRAINER WALTER 5": {
            "level": 41,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fury Swipes",
                "Disable",
                "Confusion",
                "Psych Up"
            ],
            "index": 578
        }
    },
    "Crawdaunt": {
        "TRAINER SIDNEY": {
            "level": 48,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Surf",
                "Swords Dance",
                "Strength",
                "Facade"
            ],
            "index": 583
        },
        "TRAINER JUAN 1": {
            "level": 43,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Crabhammer",
                "Taunt",
                "Leer"
            ],
            "index": 627
        },
        "TRAINER JUAN 2": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rest",
                "Crabhammer",
                "Taunt",
                "Double Team"
            ],
            "index": 1735
        },
        "TRAINER JUAN 3": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rest",
                "Guillotine",
                "Taunt",
                "Double Team"
            ],
            "index": 1740
        },
        "TRAINER JUAN 4": {
            "level": 58,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rest",
                "Guillotine",
                "Taunt",
                "Double Team"
            ],
            "index": 1746
        },
        "TRAINER JUAN 5": {
            "level": 63,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rest",
                "Guillotine",
                "Taunt",
                "Double Team"
            ],
            "index": 1752
        }
    },
    "Absol": {
        "TRAINER SIDNEY": {
            "level": 49,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Rock Slide",
                "Swords Dance",
                "Slash"
            ],
            "index": 584
        },
        "TRAINER JAZMYN": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1035
        },
        "TRAINER HALLE": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1150
        }
    },
    "Dusclops": {
        "TRAINER PHOEBE": {
            "level": 48,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shadow Punch",
                "Confuse Ray",
                "Curse",
                "Protect"
            ],
            "index": 585
        },
        " TRAINER PHOEBE": {
            "level": 51,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shadow Ball",
                "Ice Beam",
                "Rock Slide",
                "Earthquake"
            ],
            "index": 589
        },
        "TRAINER QUINCY": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Skill Swap",
                "Protect",
                "Will O Wisp",
                "Toxic"
            ],
            "index": 711
        }
    },
    "Glalie": {
        "TRAINER GLACIA": {
            "level": 50,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Light Screen",
                "Crunch",
                "Icy Wind",
                "Ice Beam"
            ],
            "index": 591
        },
        " TRAINER GLACIA": {
            "level": 52,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shadow Ball",
                "Explosion",
                "Hail",
                "Ice Beam"
            ],
            "index": 593
        }
    },
    "Walrein": {
        " TRAINER GLACIA": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Surf",
                "Body Slam",
                "Ice Beam",
                "Sheer Cold"
            ],
            "index": 594
        },
        "TRAINER JUAN 2": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Body Slam",
                "Protect",
                "Ice Beam"
            ],
            "index": 1734
        },
        "TRAINER JUAN 3": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Body Slam",
                "Protect",
                "Ice Beam"
            ],
            "index": 1739
        },
        "TRAINER JUAN 4": {
            "level": 58,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Body Slam",
                "Protect",
                "Ice Beam"
            ],
            "index": 1745
        },
        "TRAINER JUAN 5": {
            "level": 63,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Body Slam",
                "Protect",
                "Sheer Cold"
            ],
            "index": 1751
        }
    },
    "Shelgon": {
        "TRAINER DRAKE": {
            "level": 52,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rock Tomb",
                "Dragon Claw",
                "Protect",
                "Double Edge"
            ],
            "index": 595
        },
        " TRAINER NICOLAS 5": {
            "level": 49,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": "Dragon Fang",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 835
        }
    },
    "Altaria": {
        "TRAINER DRAKE": {
            "level": 54,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Edge",
                "Dragon Breath",
                "Dragon Dance",
                "Aerial Ace"
            ],
            "index": 596
        },
        "TRAINER WINONA 1": {
            "level": 33,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Earthquake",
                "Dragon Breath",
                "Dragon Dance",
                "Aerial Ace"
            ],
            "index": 619
        },
        "TRAINER NICOLAS 1": {
            "level": 37,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 824
        },
        " TRAINER NICOLAS 1": {
            "level": 37,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 825
        },
        "TRAINER NICOLAS 2": {
            "level": 41,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 826
        },
        " TRAINER NICOLAS 2": {
            "level": 41,
            "ivs": {
                "hp": 13,
                "atk": 13,
                "def": 13,
                "spa": 13,
                "spd": 13,
                "spe": 13
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 827
        },
        "TRAINER NICOLAS 3": {
            "level": 44,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 828
        },
        " TRAINER NICOLAS 3": {
            "level": 44,
            "ivs": {
                "hp": 14,
                "atk": 14,
                "def": 14,
                "spa": 14,
                "spd": 14,
                "spe": 14
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 829
        },
        "TRAINER NICOLAS 4": {
            "level": 46,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 831
        },
        " TRAINER NICOLAS 4": {
            "level": 46,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 832
        },
        "TRAINER NICOLAS 5": {
            "level": 49,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 833
        },
        " TRAINER NICOLAS 5": {
            "level": 49,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 834
        },
        "TRAINER ROBERT 3": {
            "level": 35,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 860
        },
        "TRAINER ROBERT 4": {
            "level": 38,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 862
        },
        "TRAINER ROBERT 5": {
            "level": 41,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 863
        },
        "TRAINER DIANA 5": {
            "level": 40,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 988
        },
        "TRAINER WALLY VR 1": {
            "level": 44,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Safeguard",
                "Dragon Breath",
                "Dragon Dance"
            ],
            "index": 1063
        },
        "TRAINER WALLY VR 2": {
            "level": 47,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Safeguard",
                "Dragon Breath",
                "Dragon Dance"
            ],
            "index": 1360
        },
        "TRAINER WALLY VR 3": {
            "level": 50,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Safeguard",
                "Dragon Breath",
                "Dragon Dance"
            ],
            "index": 1365
        },
        "TRAINER WALLY VR 4": {
            "level": 53,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Safeguard",
                "Dragon Breath",
                "Dragon Dance"
            ],
            "index": 1370
        },
        "TRAINER WALLY VR 5": {
            "level": 56,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Safeguard",
                "Dragon Breath",
                "Dragon Dance"
            ],
            "index": 1375
        },
        "TRAINER WINONA 2": {
            "level": 45,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Rest",
                "Dragon Dance",
                "Earthquake"
            ],
            "index": 1690
        },
        "TRAINER WINONA 3": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Rest",
                "Dragon Dance",
                "Earthquake"
            ],
            "index": 1696
        },
        "TRAINER WINONA 4": {
            "level": 55,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Aerial Ace",
                "Rest",
                "Dragon Dance",
                "Earthquake"
            ],
            "index": 1702
        },
        "TRAINER WINONA 5": {
            "level": 60,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sky Attack",
                "Rest",
                "Dragon Dance",
                "Earthquake"
            ],
            "index": 1708
        }
    },
    "Kingdra": {
        "TRAINER DRAKE": {
            "level": 53,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Smokescreen",
                "Dragon Dance",
                "Surf",
                "Body Slam"
            ],
            "index": 597
        },
        "TRAINER JUAN 1": {
            "level": 46,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Double Team",
                "Ice Beam",
                "Rest"
            ],
            "index": 628
        },
        "TRAINER JUAN 2": {
            "level": 51,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Double Team",
                "Ice Beam",
                "Rest"
            ],
            "index": 1736
        },
        "TRAINER JUAN 3": {
            "level": 56,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Double Team",
                "Ice Beam",
                "Rest"
            ],
            "index": 1741
        },
        "TRAINER JUAN 4": {
            "level": 61,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Double Team",
                "Ice Beam",
                "Rest"
            ],
            "index": 1747
        },
        "TRAINER JUAN 5": {
            "level": 66,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Chesto Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Double Team",
                "Ice Beam",
                "Rest"
            ],
            "index": 1753
        },
        "TRAINER THALIA 5": {
            "level": 40,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1883
        }
    },
    "Flygon": {
        "TRAINER DRAKE": {
            "level": 53,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Crunch",
                "Dragon Breath",
                "Earthquake"
            ],
            "index": 598
        }
    },
    "Salamence": {
        "TRAINER DRAKE": {
            "level": 55,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Dragon Claw",
                "Rock Slide",
                "Crunch"
            ],
            "index": 599
        }
    },
    "Slaking": {
        "TRAINER NORMAN 1": {
            "level": 31,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Counter",
                "Yawn",
                "Facade",
                "Feint Attack"
            ],
            "index": 614
        },
        "KATE & JOY": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Focus Punch",
                "Yawn",
                "Slack Off",
                "Feint Attack"
            ],
            "index": 653
        },
        "TRAINER QUINCY": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Attract",
                "Ice Beam",
                "Thunderbolt",
                "Flamethrower"
            ],
            "index": 710
        },
        "TRAINER KATELYNN": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Earthquake",
                "Shadow Ball",
                "Aerial Ace",
                "Brick Break"
            ],
            "index": 713
        },
        "TRAINER NORMAN 2": {
            "level": 42,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Blizzard",
                "Shadow Ball",
                "Double Edge",
                "Fire Blast"
            ],
            "index": 1667
        },
        " TRAINER NORMAN 2": {
            "level": 45,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hyper Beam",
                "Flamethrower",
                "Thunderbolt",
                "Shadow Ball"
            ],
            "index": 1669
        },
        "TRAINER NORMAN 3": {
            "level": 47,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Blizzard",
                "Shadow Ball",
                "Double Edge",
                "Fire Blast"
            ],
            "index": 1670
        },
        " TRAINER NORMAN 3": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hyper Beam",
                "Flamethrower",
                "Thunderbolt",
                "Shadow Ball"
            ],
            "index": 1674
        },
        "TRAINER NORMAN 4": {
            "level": 52,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Blizzard",
                "Shadow Ball",
                "Double Edge",
                "Fire Blast"
            ],
            "index": 1675
        },
        " TRAINER NORMAN 4": {
            "level": 55,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hyper Beam",
                "Flamethrower",
                "Thunderbolt",
                "Shadow Ball"
            ],
            "index": 1679
        },
        "TRAINER NORMAN 5": {
            "level": 57,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Blizzard",
                "Shadow Ball",
                "Double Edge",
                "Fire Blast"
            ],
            "index": 1680
        },
        " TRAINER NORMAN 5": {
            "level": 60,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hyper Beam",
                "Flamethrower",
                "Thunderbolt",
                "Shadow Ball"
            ],
            "index": 1685
        },
        "TRAINER CRISTIN 5": {
            "level": 41,
            "ivs": {
                "hp": 17,
                "atk": 17,
                "def": 17,
                "spa": 17,
                "spd": 17,
                "spe": 17
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1825
        }
    },
    "Swablu": {
        "TRAINER WINONA 1": {
            "level": 29,
            "ivs": {
                "hp": 25,
                "atk": 25,
                "def": 25,
                "spa": 25,
                "spd": 25,
                "spe": 25
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Perish Song",
                "Mirror Move",
                "Safeguard",
                "Aerial Ace"
            ],
            "index": 615
        },
        "TRAINER ROBERT 1": {
            "level": 29,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 851
        },
        "TRAINER ROBERT 2": {
            "level": 32,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 858
        },
        "TRAINER MARTHA": {
            "level": 23,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 970
        },
        "TRAINER DIANA 1": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 973
        },
        "TRAINER DIANA 2": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 979
        },
        "TRAINER DIANA 3": {
            "level": 28,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 982
        },
        "TRAINER DIANA 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 985
        },
        "TRAINER SOPHIA": {
            "level": 38,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1191
        },
        "TRAINER ASHLEY": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1356
        },
        " TRAINER ASHLEY": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1357
        },
        "  TRAINER ASHLEY": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1358
        },
        "KIM & IRIS": {
            "level": 32,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sing",
                "Fury Attack",
                "Safeguard",
                "Aerial Ace"
            ],
            "index": 1427
        }
    },
    "Oddish": {
        "TRAINER PAUL": {
            "level": 15,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 631
        },
        "TRAINER DIANA 1": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 972
        },
        "TRAINER SALLY": {
            "level": 16,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1271
        }
    },
    "Plusle": {
        "TRAINER ISABEL 1": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 682
        },
        "TRAINER ISABEL 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 684
        },
        "TRAINER ISABEL 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 686
        },
        "TRAINER ISABEL 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 688
        },
        "TRAINER ISABEL 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 690
        },
        "AMY & LIV": {
            "level": 36,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Charge",
                "Fake Tears",
                "Helping Hand"
            ],
            "index": 1003
        },
        "TRAINER KALEB": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1465
        }
    },
    "Minun": {
        "TRAINER ISABEL 1": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 683
        },
        "TRAINER ISABEL 2": {
            "level": 26,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 685
        },
        "TRAINER ISABEL 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 687
        },
        "TRAINER ISABEL 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 689
        },
        "TRAINER ISABEL 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 691
        },
        "AMY & LIV": {
            "level": 36,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Charge",
                "Charm",
                "Helping Hand"
            ],
            "index": 1004
        },
        "TRAINER KALEB": {
            "level": 14,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1464
        }
    },
    "Gulpin": {
        "TRAINER BEN": {
            "level": 17,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Amnesia",
                "Sludge",
                "Yawn",
                "Pound"
            ],
            "index": 709
        },
        "TRAINER JAIDEN": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1545
        },
        "TRAINER PAT": {
            "level": 25,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1579
        }
    },
    "Gardevoir": {
        "TRAINER KATELYNN": {
            "level": 43,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Skill Swap",
                "Psychic",
                "Thunderbolt",
                "Calm Mind"
            ],
            "index": 712
        },
        "TRAINER WALLY VR 1": {
            "level": 45,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Calm Mind",
                "Psychic",
                "Future Sight"
            ],
            "index": 1067
        },
        "TRAINER WALLY VR 2": {
            "level": 48,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Calm Mind",
                "Psychic",
                "Future Sight"
            ],
            "index": 1364
        },
        "TRAINER WALLY VR 3": {
            "level": 51,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Calm Mind",
                "Psychic",
                "Future Sight"
            ],
            "index": 1369
        },
        "TRAINER WALLY VR 4": {
            "level": 54,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Calm Mind",
                "Psychic",
                "Future Sight"
            ],
            "index": 1374
        },
        "TRAINER WALLY VR 5": {
            "level": 57,
            "ivs": {
                "hp": 30,
                "atk": 30,
                "def": 30,
                "spa": 30,
                "spd": 30,
                "spe": 30
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Calm Mind",
                "Psychic",
                "Future Sight"
            ],
            "index": 1379
        }
    },
    "Milotic": {
        "TRAINER WALLACE": {
            "level": 58,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Recover",
                "Surf",
                "Ice Beam",
                "Toxic"
            ],
            "index": 734
        }
    },
    "Barboach": {
        "TRAINER CLAUDE": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 740
        },
        "TRAINER NOLAN": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 745
        },
        "TRAINER KAI": {
            "level": 19,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1485
        }
    },
    "Doduo": {
        "TRAINER DYLAN 1": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 790
        },
        "TRAINER DYLAN 2": {
            "level": 28,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 791
        },
        "TRAINER DYLAN 3": {
            "level": 31,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 792
        },
        "TRAINER MARIA 1": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 795
        },
        "TRAINER MARIA 2": {
            "level": 28,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 796
        },
        "TRAINER MARIA 3": {
            "level": 31,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 797
        },
        "TRAINER JARED": {
            "level": 27,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 841
        },
        "TRAINER EDWARDO": {
            "level": 29,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 847
        },
        "TRAINER KYRA": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1542
        },
        "TRAINER MELINA": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1554
        }
    },
    "Bagon": {
        "TRAINER NICOLAS 4": {
            "level": 46,
            "ivs": {
                "hp": 15,
                "atk": 15,
                "def": 15,
                "spa": 15,
                "spd": 15,
                "spe": 15
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 830
        },
        "TRAINER AARON": {
            "level": 34,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Dragon Breath",
                "Headbutt",
                "Focus Energy",
                "Ember"
            ],
            "index": 836
        }
    },
    "Ninjask": {
        "TRAINER YASU": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 868
        },
        "TRAINER TAKASHI": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 869
        },
        "TRAINER LUNG": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 878
        },
        "TRAINER DOUG": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1279
        },
        "TRAINER KENT": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1282
        },
        "TRAINER JAMES 2": {
            "level": 27,
            "ivs": {
                "hp": 1,
                "atk": 1,
                "def": 1,
                "spa": 1,
                "spd": 1,
                "spe": 1
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1283
        },
        "TRAINER JAMES 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1285
        },
        "TRAINER JAMES 4": {
            "level": 31,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1288
        },
        "TRAINER JAMES 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1290
        },
        " TRAINER JAMES 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1292
        },
        "TRAINER KEIGO": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sand Attack",
                "Double Team",
                "Fury Cutter",
                "Swords Dance"
            ],
            "index": 1351
        },
        "TRAINER JAIDEN": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1544
        }
    },
    "Koffing": {
        "TRAINER TAKASHI": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 870
        },
        "TRAINER LAO 1": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Smog",
                "Self Destruct"
            ],
            "index": 874
        },
        " TRAINER LAO 1": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Smog",
                "Self Destruct"
            ],
            "index": 875
        },
        "  TRAINER LAO 1": {
            "level": 17,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge",
                "Self Destruct"
            ],
            "index": 876
        },
        "TRAINER LUNG": {
            "level": 18,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 877
        },
        "TRAINER LAO 2": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge",
                "Self Destruct"
            ],
            "index": 879
        },
        " TRAINER LAO 2": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge"
            ],
            "index": 880
        },
        "  TRAINER LAO 2": {
            "level": 24,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge",
                "Self Destruct"
            ],
            "index": 881
        },
        "   TRAINER LAO 2": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Sludge"
            ],
            "index": 882
        },
        "TRAINER LAO 3": {
            "level": 27,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge",
                "Self Destruct"
            ],
            "index": 883
        },
        " TRAINER LAO 3": {
            "level": 27,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge",
                "Self Destruct"
            ],
            "index": 884
        },
        "  TRAINER LAO 3": {
            "level": 27,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge"
            ],
            "index": 885
        },
        "   TRAINER LAO 3": {
            "level": 29,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Sludge"
            ],
            "index": 886
        },
        "TRAINER LAO 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge"
            ],
            "index": 887
        },
        " TRAINER LAO 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge"
            ],
            "index": 888
        },
        "  TRAINER LAO 4": {
            "level": 30,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge"
            ],
            "index": 889
        },
        "   TRAINER LAO 4": {
            "level": 32,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Sludge"
            ],
            "index": 890
        },
        "TRAINER LAO 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge"
            ],
            "index": 891
        },
        " TRAINER LAO 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge",
                "Self Destruct"
            ],
            "index": 892
        },
        "  TRAINER LAO 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Tackle",
                "Sludge",
                "Self Destruct"
            ],
            "index": 893
        },
        "TRAINER JONAS": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Toxic",
                "Thunder",
                "Self Destruct",
                "Sludge Bomb"
            ],
            "index": 1036
        },
        "TRAINER HIDEO": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Self Destruct",
                "Sludge",
                "Smokescreen"
            ],
            "index": 1348
        },
        " TRAINER HIDEO": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Poison Gas",
                "Sludge",
                "Smokescreen"
            ],
            "index": 1349
        },
        "TRAINER KEIGO": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Poison Gas",
                "Self Destruct",
                "Sludge",
                "Smokescreen"
            ],
            "index": 1350
        },
        "TRAINER RILEY": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Self Destruct",
                "Sludge",
                "Smokescreen"
            ],
            "index": 1353
        }
    },
    "Lanturn": {
        "TRAINER DIANNE": {
            "level": 43,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunderbolt",
                "Earthquake"
            ],
            "index": 872
        },
        "TRAINER KAYLEE": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 949
        },
        "LILA & ROY": {
            "level": 51,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1453
        }
    },
    "Weezing": {
        "  TRAINER LAO 5": {
            "level": 35,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": "Smoke Ball",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Tackle",
                "Sludge"
            ],
            "index": 894
        }
    },
    "Castform": {
        "TRAINER ANGELICA": {
            "level": 30,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rain Dance",
                "Weather Ball",
                "Thunder",
                "Water Pulse"
            ],
            "index": 912
        },
        "TRAINER KAYLEY": {
            "level": 31,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sunny Day",
                "Weather Ball",
                "Flamethrower",
                "Solar Beam"
            ],
            "index": 1037
        }
    },
    "Seadra": {
        "TRAINER LINDA": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 948
        },
        "TRAINER THALIA 3": {
            "level": 36,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1877
        },
        "TRAINER THALIA 4": {
            "level": 38,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1880
        }
    },
    "Vileplume": {
        "TRAINER DIANA 5": {
            "level": 40,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 987
        }
    },
    "Feebas": {
        "TRAINER ANNIKA": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flail",
                "Water Pulse",
                "Return",
                "Attract"
            ],
            "index": 1033
        },
        " TRAINER ANNIKA": {
            "level": 39,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": "Oran Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flail",
                "Water Pulse",
                "Return",
                "Attract"
            ],
            "index": 1034
        },
        "TRAINER CHRIS": {
            "level": 26,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1459
        }
    },
    "Chinchou": {
        "TRAINER CONOR": {
            "level": 33,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1046
        },
        "TRAINER TISHA": {
            "level": 34,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1424
        },
        "LILA & ROY": {
            "level": 42,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1447
        }
    },
    "Treecko": {
        "TRAINER BRENDAN ROUTE 103 MUDKIP": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1068
        },
        "TRAINER MAY ROUTE 103 MUDKIP": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1089
        },
        "TRAINER BRENDAN RUSTBORO MUDKIP": {
            "level": 15,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1237
        },
        "TRAINER MAY RUSTBORO MUDKIP": {
            "level": 15,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1252
        }
    },
    "Grovyle": {
        "TRAINER BRENDAN ROUTE 110 MUDKIP": {
            "level": 20,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1071
        },
        "TRAINER BRENDAN ROUTE 119 MUDKIP": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1074
        },
        "TRAINER MAY ROUTE 110 MUDKIP": {
            "level": 20,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1092
        },
        "TRAINER MAY ROUTE 119 MUDKIP": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1095
        },
        "TRAINER BRENDAN LILYCOVE MUDKIP": {
            "level": 34,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1383
        },
        "TRAINER MAY LILYCOVE MUDKIP": {
            "level": 34,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1395
        }
    },
    "Torchic": {
        "TRAINER BRENDAN ROUTE 103 TREECKO": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1075
        },
        "TRAINER MAY ROUTE 103 TREECKO": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1096
        },
        "TRAINER BRENDAN RUSTBORO TREECKO": {
            "level": 15,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1235
        },
        "TRAINER MAY RUSTBORO TREECKO": {
            "level": 15,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1583
        }
    },
    "Mudkip": {
        "TRAINER BRENDAN ROUTE 103 TORCHIC": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1082
        },
        "TRAINER MAY ROUTE 103 TORCHIC": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1103
        },
        "TRAINER BRENDAN RUSTBORO TORCHIC": {
            "level": 15,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1250
        },
        "TRAINER MAY RUSTBORO TORCHIC": {
            "level": 15,
            "ivs": {
                "hp": 6,
                "atk": 6,
                "def": 6,
                "spa": 6,
                "spd": 6,
                "spe": 6
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1585
        }
    },
    "Marshtomp": {
        "TRAINER BRENDAN ROUTE 110 TORCHIC": {
            "level": 20,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1085
        },
        "TRAINER BRENDAN ROUTE 119 TORCHIC": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1088
        },
        "TRAINER MAY ROUTE 110 TORCHIC": {
            "level": 20,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1106
        },
        "TRAINER MAY ROUTE 119 TORCHIC": {
            "level": 31,
            "ivs": {
                "hp": 18,
                "atk": 18,
                "def": 18,
                "spa": 18,
                "spd": 18,
                "spe": 18
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1109
        },
        "TRAINER BRENDAN LILYCOVE TORCHIC": {
            "level": 34,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1391
        },
        "TRAINER MAY LILYCOVE TORCHIC": {
            "level": 34,
            "ivs": {
                "hp": 24,
                "atk": 24,
                "def": 24,
                "spa": 24,
                "spd": 24,
                "spe": 24
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1403
        }
    },
    "Pinsir": {
        "TRAINER DAVIS": {
            "level": 27,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1116
        }
    },
    "Bellossom": {
        "TRAINER CATHERINE 5": {
            "level": 39,
            "ivs": {
                "hp": 10,
                "atk": 10,
                "def": 10,
                "spa": 10,
                "spd": 10,
                "spe": 10
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1199
        }
    },
    "Nincada": {
        "TRAINER DOUG": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1278
        },
        "TRAINER RILEY": {
            "level": 28,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Leech Life",
                "Fury Swipes",
                "Mind Reader",
                "Dig"
            ],
            "index": 1352
        }
    },
    "Volbeat": {
        "TRAINER GREG": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1280
        },
        "KIRA & DAN": {
            "level": 39,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1341
        },
        "TRAINER ANGELO": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shock Wave",
                "Quick Attack",
                "Confuse Ray"
            ],
            "index": 1755
        }
    },
    "Illumise": {
        "TRAINER GREG": {
            "level": 25,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1281
        },
        "KIRA & DAN": {
            "level": 39,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1342
        },
        "TRAINER ANGELO": {
            "level": 17,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Shock Wave",
                "Quick Attack",
                "Charm"
            ],
            "index": 1754
        }
    },
    "Nosepass": {
        "TRAINER ALAN": {
            "level": 22,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1303
        },
        "TRAINER RUBEN": {
            "level": 34,
            "ivs": {
                "hp": 12,
                "atk": 12,
                "def": 12,
                "spa": 12,
                "spd": 12,
                "spe": 12
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1415
        },
        "TRAINER ROXANNE 2": {
            "level": 37,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Explosion",
                "Protect",
                "Rock Slide"
            ],
            "index": 1589
        },
        "TRAINER ROXANNE 3": {
            "level": 42,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Explosion",
                "Protect",
                "Rock Slide"
            ],
            "index": 1594
        },
        "TRAINER ROXANNE 4": {
            "level": 47,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Explosion",
                "Protect",
                "Rock Slide"
            ],
            "index": 1599
        },
        "TRAINER ROXANNE 5": {
            "level": 52,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Double Team",
                "Explosion",
                "Protect",
                "Rock Slide"
            ],
            "index": 1605
        },
        "TRAINER ANDRES 3": {
            "level": 33,
            "ivs": {
                "hp": 2,
                "atk": 2,
                "def": 2,
                "spa": 2,
                "spd": 2,
                "spe": 2
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1772
        },
        "TRAINER ANDRES 4": {
            "level": 35,
            "ivs": {
                "hp": 3,
                "atk": 3,
                "def": 3,
                "spa": 3,
                "spd": 3,
                "spe": 3
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1775
        },
        "TRAINER ANDRES 5": {
            "level": 37,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1778
        }
    },
    "Golem": {
        "  TRAINER TRENT 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1328
        },
        "TRAINER ROXANNE 2": {
            "level": 32,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Protect",
                "Rollout",
                "Magnitude",
                "Explosion"
            ],
            "index": 1586
        },
        "TRAINER ROXANNE 3": {
            "level": 37,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Protect",
                "Rollout",
                "Magnitude",
                "Explosion"
            ],
            "index": 1591
        },
        "TRAINER ROXANNE 4": {
            "level": 42,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Protect",
                "Rollout",
                "Earthquake",
                "Explosion"
            ],
            "index": 1596
        },
        "TRAINER ROXANNE 5": {
            "level": 47,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Focus Punch",
                "Rollout",
                "Earthquake",
                "Explosion"
            ],
            "index": 1601
        },
        "TRAINER SAWYER 5": {
            "level": 33,
            "ivs": {
                "hp": 4,
                "atk": 4,
                "def": 4,
                "spa": 4,
                "spd": 4,
                "spe": 4
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1848
        }
    },
    "Kabuto": {
        "TRAINER ROXANNE 2": {
            "level": 35,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Swords Dance",
                "Ice Beam",
                "Surf",
                "Rock Slide"
            ],
            "index": 1587
        }
    },
    "Onix": {
        "TRAINER ROXANNE 2": {
            "level": 35,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Iron Tail",
                "Explosion",
                "Roar",
                "Rock Slide"
            ],
            "index": 1588
        },
        "TRAINER ROXANNE 3": {
            "level": 40,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Iron Tail",
                "Explosion",
                "Roar",
                "Rock Slide"
            ],
            "index": 1593
        },
        "TRAINER ROXANNE 4": {
            "level": 45,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Iron Tail",
                "Explosion",
                "Roar",
                "Rock Slide"
            ],
            "index": 1598
        }
    },
    "Omanyte": {
        "TRAINER ROXANNE 3": {
            "level": 37,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Protect",
                "Ice Beam",
                "Rock Slide",
                "Surf"
            ],
            "index": 1590
        }
    },
    "Kabutops": {
        "TRAINER ROXANNE 3": {
            "level": 40,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Swords Dance",
                "Ice Beam",
                "Surf",
                "Rock Slide"
            ],
            "index": 1592
        },
        "TRAINER ROXANNE 4": {
            "level": 45,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Swords Dance",
                "Ice Beam",
                "Surf",
                "Rock Slide"
            ],
            "index": 1597
        },
        "TRAINER ROXANNE 5": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Swords Dance",
                "Ice Beam",
                "Surf",
                "Rock Slide"
            ],
            "index": 1603
        }
    },
    "Omastar": {
        "TRAINER ROXANNE 4": {
            "level": 42,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Protect",
                "Ice Beam",
                "Rock Slide",
                "Surf"
            ],
            "index": 1595
        },
        "TRAINER ROXANNE 5": {
            "level": 47,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Protect",
                "Ice Beam",
                "Rock Slide",
                "Surf"
            ],
            "index": 1602
        }
    },
    "Aerodactyl": {
        "TRAINER ROXANNE 5": {
            "level": 47,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Rock Slide",
                "Hyper Beam",
                "Supersonic",
                "Protect"
            ],
            "index": 1600
        }
    },
    "Steelix": {
        "TRAINER ROXANNE 5": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Iron Tail",
                "Explosion",
                "Roar",
                "Rock Slide"
            ],
            "index": 1604
        }
    },
    "Hitmontop": {
        "TRAINER BRAWLY 2": {
            "level": 35,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Pursuit",
                "Counter",
                "Protect",
                "Triple Kick"
            ],
            "index": 1608
        },
        "TRAINER BRAWLY 3": {
            "level": 40,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Pursuit",
                "Counter",
                "Protect",
                "Triple Kick"
            ],
            "index": 1612
        },
        "TRAINER BRAWLY 4": {
            "level": 45,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Pursuit",
                "Counter",
                "Protect",
                "Triple Kick"
            ],
            "index": 1617
        },
        "TRAINER BRAWLY 5": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Pursuit",
                "Counter",
                "Protect",
                "Triple Kick"
            ],
            "index": 1623
        }
    },
    "Hitmonchan": {
        "TRAINER BRAWLY 4": {
            "level": 40,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sky Uppercut",
                "Protect",
                "Fire Punch",
                "Ice Punch"
            ],
            "index": 1614
        },
        "TRAINER BRAWLY 5": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Sky Uppercut",
                "Protect",
                "Fire Punch",
                "Ice Punch"
            ],
            "index": 1620
        }
    },
    "Hitmonlee": {
        "TRAINER BRAWLY 5": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Mega Kick",
                "Focus Punch",
                "Earthquake",
                "Bulk Up"
            ],
            "index": 1619
        }
    },
    "Raichu": {
        "TRAINER WATTSON 4": {
            "level": 44,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Slam",
                "Rain Dance",
                "Protect"
            ],
            "index": 1634
        },
        "TRAINER WATTSON 5": {
            "level": 51,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Slam",
                "Rain Dance",
                "Protect"
            ],
            "index": 1640
        }
    },
    "Ampharos": {
        "TRAINER WATTSON 4": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Protect",
                "Thunder Wave",
                "Light Screen"
            ],
            "index": 1635
        },
        "TRAINER WATTSON 5": {
            "level": 51,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder",
                "Protect",
                "Thunder Wave",
                "Light Screen"
            ],
            "index": 1641
        }
    },
    "Electabuzz": {
        "TRAINER WATTSON 5": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Swift",
                "Focus Punch",
                "Thunder Punch",
                "Light Screen"
            ],
            "index": 1639
        }
    },
    "Ponyta": {
        "TRAINER FLANNERY 2": {
            "level": 36,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Attract",
                "Solar Beam",
                "Bounce"
            ],
            "index": 1646
        },
        "TRAINER FLANNERY 3": {
            "level": 41,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Attract",
                "Solar Beam",
                "Bounce"
            ],
            "index": 1651
        }
    },
    "Houndour": {
        "TRAINER FLANNERY 4": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Roar",
                "Solar Beam",
                "Taunt",
                "Sunny Day"
            ],
            "index": 1654
        }
    },
    "Rapidash": {
        "TRAINER FLANNERY 4": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Attract",
                "Solar Beam",
                "Bounce"
            ],
            "index": 1657
        },
        "TRAINER FLANNERY 5": {
            "level": 51,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Flamethrower",
                "Attract",
                "Solar Beam",
                "Bounce"
            ],
            "index": 1663
        }
    },
    "Arcanine": {
        "TRAINER FLANNERY 5": {
            "level": 51,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Helping Hand",
                "Flamethrower",
                "Sunny Day",
                "Roar"
            ],
            "index": 1660
        }
    },
    "Houndoom": {
        "TRAINER FLANNERY 5": {
            "level": 51,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Roar",
                "Solar Beam",
                "Taunt",
                "Sunny Day"
            ],
            "index": 1662
        }
    },
    "Chansey": {
        "TRAINER NORMAN 2": {
            "level": 42,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Light Screen",
                "Sing",
                "Skill Swap",
                "Focus Punch"
            ],
            "index": 1666
        },
        "TRAINER NORMAN 3": {
            "level": 47,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Light Screen",
                "Sing",
                "Skill Swap",
                "Focus Punch"
            ],
            "index": 1671
        }
    },
    "Kangaskhan": {
        "TRAINER NORMAN 3": {
            "level": 45,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fake Out",
                "Dizzy Punch",
                "Endure",
                "Reversal"
            ],
            "index": 1672
        },
        "TRAINER NORMAN 4": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fake Out",
                "Dizzy Punch",
                "Endure",
                "Reversal"
            ],
            "index": 1677
        },
        "TRAINER NORMAN 5": {
            "level": 55,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Fake Out",
                "Dizzy Punch",
                "Endure",
                "Reversal"
            ],
            "index": 1682
        }
    },
    "Blissey": {
        "TRAINER NORMAN 4": {
            "level": 52,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Light Screen",
                "Sing",
                "Skill Swap",
                "Focus Punch"
            ],
            "index": 1676
        },
        "TRAINER NORMAN 5": {
            "level": 57,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Protect",
                "Sing",
                "Skill Swap",
                "Focus Punch"
            ],
            "index": 1681
        }
    },
    "Tauros": {
        "TRAINER NORMAN 5": {
            "level": 57,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Take Down",
                "Protect",
                "Fire Blast",
                "Earthquake"
            ],
            "index": 1683
        }
    },
    "Dratini": {
        "TRAINER WINONA 2": {
            "level": 40,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder Wave",
                "Thunderbolt",
                "Protect",
                "Ice Beam"
            ],
            "index": 1686
        }
    },
    "Hoothoot": {
        "TRAINER WINONA 3": {
            "level": 43,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Psychic",
                "Reflect",
                "Dream Eater"
            ],
            "index": 1691
        }
    },
    "Dragonair": {
        "TRAINER WINONA 3": {
            "level": 45,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder Wave",
                "Thunderbolt",
                "Protect",
                "Ice Beam"
            ],
            "index": 1693
        },
        "TRAINER WINONA 4": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Thunder Wave",
                "Thunderbolt",
                "Protect",
                "Ice Beam"
            ],
            "index": 1699
        }
    },
    "Noctowl": {
        "TRAINER WINONA 4": {
            "level": 48,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Psychic",
                "Reflect",
                "Dream Eater"
            ],
            "index": 1697
        },
        "TRAINER WINONA 5": {
            "level": 53,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Psychic",
                "Reflect",
                "Dream Eater"
            ],
            "index": 1703
        }
    },
    "Dragonite": {
        "TRAINER WINONA 5": {
            "level": 55,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hyper Beam",
                "Thunderbolt",
                "Earthquake",
                "Ice Beam"
            ],
            "index": 1706
        }
    },
    "Slowpoke": {
        "TATE&LIZA": {
            "level": 58,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Yawn",
                "Psychic",
                "Calm Mind",
                "Protect"
            ],
            "index": 1722
        }
    },
    "Hypno": {
        "TATE&LIZA": {
            "level": 63,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Dream Eater",
                "Headbutt",
                "Protect"
            ],
            "index": 1726
        }
    },
    "Slowking": {
        "TATE&LIZA": {
            "level": 63,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Yawn",
                "Psychic",
                "Calm Mind",
                "Protect"
            ],
            "index": 1728
        }
    },
    "Poliwag": {
        "TRAINER JUAN 2": {
            "level": 46,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Rain Dance",
                "Protect",
                "Hydro Pump"
            ],
            "index": 1732
        }
    },
    "Poliwhirl": {
        "TRAINER JUAN 3": {
            "level": 50,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Rain Dance",
                "Protect",
                "Hydro Pump"
            ],
            "index": 1737
        },
        "TRAINER JUAN 4": {
            "level": 56,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Rain Dance",
                "Protect",
                "Hydro Pump"
            ],
            "index": 1744
        }
    },
    "Lapras": {
        "TRAINER JUAN 4": {
            "level": 56,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hydro Pump",
                "Perish Song",
                "Ice Beam",
                "Confuse Ray"
            ],
            "index": 1742
        },
        "TRAINER JUAN 5": {
            "level": 61,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hydro Pump",
                "Perish Song",
                "Ice Beam",
                "Confuse Ray"
            ],
            "index": 1748
        }
    },
    "Politoed": {
        "TRAINER JUAN 5": {
            "level": 61,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Hypnosis",
                "Rain Dance",
                "Hydro Pump",
                "Perish Song"
            ],
            "index": 1750
        }
    },
    "Cradily": {
        "TRAINER STEVEN": {
            "level": 76,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Giga Drain",
                "Ancient Power",
                "Ingrain",
                "Confuse Ray"
            ],
            "index": 1760
        }
    },
    "Armaldo": {
        "TRAINER STEVEN": {
            "level": 76,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Water Pulse",
                "Ancient Power",
                "Aerial Ace",
                "Slash"
            ],
            "index": 1761
        }
    },
    "Metagross": {
        "TRAINER STEVEN": {
            "level": 78,
            "ivs": {
                "hp": 31,
                "atk": 31,
                "def": 31,
                "spa": 31,
                "spd": 31,
                "spe": 31
            },
            "item": "Sitrus Berry",
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [
                "Earthquake",
                "Psychic",
                "Meteor Mash",
                "Shadow Ball"
            ],
            "index": 1762
        }
    },
    "Beldum": {
        "TRAINER ANABEL": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1763
        },
        "TRAINER TUCKER": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1764
        },
        "TRAINER SPENSER": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1765
        },
        "TRAINER GRETA": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1766
        },
        "TRAINER NOLAND": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1767
        },
        "TRAINER LUCY": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1768
        },
        "TRAINER BRANDON": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1769
        }
    },
    "Chimecho": {
        "TRAINER MARIELA": {
            "level": 41,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1884
        }
    },
    "Charmander": {
        "TRAINER RED": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1888
        }
    },
    "Bulbasaur": {
        "TRAINER LEAF": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1889
        }
    },
    "Groudon": {
        "TRAINER BRENDAN PLACEHOLDER": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1890
        }
    },
    "Kyogre": {
        "TRAINER MAY PLACEHOLDER": {
            "level": 5,
            "ivs": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "spa": 0,
                "spd": 0,
                "spe": 0
            },
            "item": null,
            "ability": null,
            "nature": null,
            "teraType": null,
            "status": "Healthy",
            "moves": [],
            "index": 1891
        }
    }
};