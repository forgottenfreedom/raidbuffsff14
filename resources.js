const buffs = {
    '8D2': {
        name: 'Trickattack',
        img: 'https://xivapi.com/i/000000/000618_hr1.png',
        tts: {
            english: 'Trickattack',
            deutsch: 'Trickattacke',
            français: 'Attaque sournoise',
            日本語: 'だまし討ち',
        },
        cooldown: 60,
        duration: 15,
        priority: 1,
    },
    '1CE4': {
        name: 'Brotherhood',
        img: 'https://xivapi.com/i/002000/002542_hr1.png',
        tts: {
            english: 'Brotherhood',
            deutsch: 'Bruderschaft',
            français: 'Fraternité',
            日本語: '桃園結義',
        },
        cooldown: 120,
        duration: 15,
        priority: 2,
    },
    '40A8': {
        name: 'Divination',
        img: 'https://xivapi.com/i/003000/003553_hr1.png',
        tts: {
            english: 'Divination',
            deutsch: 'Weissagung',
            français: 'Divination',
            日本語: 'ディヴィネーション',
        },
        cooldown: 120,
        duration: 15,
        priority: 3,
    }, 
    '1D0C': {
        name: 'Chain Stratagem',
        img: 'https://xivapi.com/i/002000/002815_hr1.png',
        tts: {
            english: 'Chain Stratagem',
            deutsch: 'Kritische Strategie',
            français: 'Stratagèmes entrelacés',
            日本語: '連環計',
        },
        cooldown: 120,
        duration: 15,
        priority: 4,
    }, 
    '3F41': {
        name: 'Single Technical Finish',
        img: 'https://xivapi.com/i/003000/003473_hr1.png',
        tts: {
            english: 'Technical Finish',
            deutsch: 'Komplexes Finale',
            français: 'Final technique',
            日本語: 'デテクニカルフィニッシュ',
        },
        cooldown: 120,
        duration: 20,
        priority: 5,
    },
    '3F42': {
        name: 'Double Technical Finish',
        img: 'https://xivapi.com/i/003000/003473_hr1.png',
        tts: {
            english: 'Technical Finish',
            deutsch: 'Komplexes Finale',
            français: 'Final technique',
            日本語: 'デテクニカルフィニッシュ',
        },
        cooldown: 120,
        duration: 20,
        priority: 5,
    }, 
    '3F43': {
        name: 'Triple Technical Finish',
        img: 'https://xivapi.com/i/003000/003473_hr1.png',
        tts: {
            english: 'Technical Finish',
            deutsch: 'Komplexes Finale',
            français: 'Final technique',
            日本語: 'デテクニカルフィニッシュ',
        },
        cooldown: 120,
        duration: 20,
        priority: 5,
    }, 
    '3F44': {
        name: 'Quadruple Technical Finish',
        img: 'https://xivapi.com/i/003000/003473_hr1.png',
        tts: {
            english: 'Technical Finish',
            deutsch: 'Komplexes Finale',
            français: 'Final technique',
            日本語: 'デテクニカルフィニッシュ',
        },
        cooldown: 120,
        duration: 20,
        priority: 5,
    },
    '1D60': {
        name: 'Embolden',
        img: 'https://xivapi.com/i/003000/003218_hr1.png',
        tts: {
            english: 'Embolden',
            deutsch: '	Ermutigen',
            français: 'Enhardissement',
            日本語: 'デエンボルデン',
        },
        cooldown: 120,
        duration: 20,
        priority: 6,
    },
    'DE5': {
        name: 'Battle Litany',
        img: 'https://xivapi.com/i/002000/002585_hr1.png',
        tts: {
            english: 'Battle Litany',
            deutsch: 'Litanei der Schlacht',
            français: '	Litanie combattante',
            日本語: 'デバトルリタニー',
        },
        cooldown: 120,
        duration: 15,
        priority: 7,
    },
    '76': {
        name: 'Battle Voice',
        img: 'https://xivapi.com/i/002000/002601_hr1.png',
        tts: {
            english: 'Battle Voice',
            deutsch: 'Ode an die Seele',
            français: '	Voix de combat',
            日本語: 'バトルボイス',
        },
        cooldown: 120,
        duration: 15,
        priority: 8,
    },
    '64B9': {
        name: 'Radiant Finale',
        img: 'https://xivapi.com/i/002000/002622_hr1.png',
        tts: {
            english: 'Devotion',
            deutsch: '	Hingabe',
            français: 'Dévouement',
            日本語: 'エギの加護',
        },
        cooldown: 110,
        duration: 15,
        priority: 9,
    },
}
const trackedLogLineId = [
    '21',
    '22',
];
const trackedAbilityId = [
    '8D2', //Trick Attack
    '1CE4', //Brotherhood
    '40A8', //Divination
    '1D0C', //Chain Stratagem
    '3F41', //Single Technical Finish
    '3F42', //Double Technical Finish
    '3F43', //Triple Technical Finish
    '3F44', //Quadruple Technical Finish
    '1D60', //Embolden
    'DE5', //Battle Litany
    '76', //Battle Voice
    '64B9', //Devotion
];
const wipeLogLineId = '33';
const wipeTrackedActorId = [
    '40000003',
    '40000010',
];

const defaultsettings = {
    'battlelitanycb': true,
    'battlelitanytts': "",
    'battlevoicecb': true,
    'battlevoicetts': "",
    'brotherhoodcb': true,
    'brotherhoodtts': "",
    'chainstratagemcb': true,
    'chainstratagemtts': "",
    'devotioncb': true,
    'devotiontts': "",
    'divinationcb': true,
    'divinationtts': "",
    'emboldencb': true,
    'emboldentts': "",
    'globaltts': false,
    'technicalfinishcb': true,
    'technicalfinishtts': "",
    'trickattackcb': true,
    'trickattacktts': "",
    'ttslanguage': "english",
}