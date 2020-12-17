const ttsenable = document.ttsform.enabletts;
const ttslanguage = document.ttsform.ttslanguage;

let tts;
let language;

ttsenable.addEventListener('change', () => {
    tts = ttsenable.checked;
});

ttslanguage.addEventListener('change', () => {
    language = ttslanguage.value
});

document.addEventListener('DOMContentLoaded', getSettings);
document.addEventListener('change', makeSettings);

function makeSettings () {
    let settings = {
        'tts' : tts,
        'language' : language,
    }
    localStorage.setItem('settings', JSON.stringify(settings));
}

function getSettings () {
    let settings = JSON.parse(localStorage.getItem('settings'));
    ttsenable.checked = settings.tts;
    tts = settings.tts;
    ttslanguage.value = settings.language;
    language = settings.language;
}