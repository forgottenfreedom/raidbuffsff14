const wrapper = document.getElementById('wrapper');
const reminder = document.getElementById('reminder');
const collapse = document.getElementsByClassName('collapse');
const blacklist = [
    'Triple Technical Finish',
    'Double Technical Finish',
    'Single Technical Finish',
];

let settings = {};

document.addEventListener('DOMContentLoaded', () => {
    getName();
    getSettings();
});

function getName () {
    for (let buffname in buffs) {
        let name = buffs[buffname].name.replace('Quadruple', '');
        let shortname = name.toLowerCase().replace(/\s+/g, '');
        if (!blacklist.includes(name)) {
            createSettings(name, shortname);
            createSettingsreminder(name,shortname);
        }
    }
}

function createSettings (buff, shortbuff) {
    let form = document.createElement('form');
    form.name = buff;
    form.className = 'form';

    let labelcheckbox = document.createElement('label');
    labelcheckbox.for = shortbuff + 'cb';
    labelcheckbox.innerText = buff;
    labelcheckbox.className = 'label';

    let inputcheckbox = document.createElement('input');
    inputcheckbox.type = 'checkbox';
    inputcheckbox.name = shortbuff + 'cb';

    let labeltts = document.createElement('label');
    labeltts.for = shortbuff + 'tts';
    labeltts.innerText = 'TTS';
    labeltts.className = 'ttslabel';

    let inputtts = document.createElement('input');
    inputtts.type = 'text';
    inputtts.name = shortbuff + 'tts';

    form.appendChild(labelcheckbox);
    form.appendChild(inputcheckbox);
    form.appendChild(labeltts);
    form.appendChild(inputtts);
    wrapper.appendChild(form);
}

function createSettingsreminder (buff, shortbuff) {
    let form = document.createElement('form');
    form.name = buff;
    form.className = 'form';

    let labelcheckbox = document.createElement('label');
    labelcheckbox.for = shortbuff + 'cbr';
    labelcheckbox.innerText = buff;
    labelcheckbox.className = 'label';

    let inputcheckbox = document.createElement('input');
    inputcheckbox.type = 'checkbox';
    inputcheckbox.name = shortbuff + 'cbr';

    let labelremindertime = document.createElement('label');
    labelremindertime.for = shortbuff + 'time';
    labelremindertime.innerText = 'Time left to remind';
    labelremindertime.className = 'ttslabel';

    let inputremindertime = document.createElement('input');
    inputremindertime.type = 'number';
    inputremindertime.name = shortbuff + 'time';
    inputremindertime.class = 'reminderinput';

    let labelremindertext = document.createElement('label');
    labelremindertext.for = shortbuff + 'text';
    labelremindertext.innerText = 'Text to say:';
    labelremindertext.className = 'ttslabel';

    let innputremindertext = document.createElement('input');
    innputremindertext.type = 'text';
    innputremindertext.name = shortbuff + 'text';
    innputremindertext.class = 'reminderinput';

    form.appendChild(labelcheckbox);
    form.appendChild(inputcheckbox);
    form.appendChild(labelremindertime);
    form.appendChild(inputremindertime);
    form.appendChild(labelremindertext);
    form.appendChild(innputremindertext);
    reminder.appendChild(form);
}

function savesettings () {
    let ttsglobal = document.ttsform.gloabltts;
    let ttslanguage = document.ttsform.ttslanguage;

    settings['globaltts'] = ttsglobal.checked;
    settings['ttslanguage'] = ttslanguage.value;
    let form = wrapper.childNodes;
    let form2 = reminder.childNodes;
    for (let i = 0; i<form.length; i++) {
        let checkbox = form[i];
        for (let e = 0; e< checkbox.length; e++) {
            if (checkbox[e] != undefined) {
                if (checkbox[e].type == 'checkbox') {
                    settings[checkbox[e].name] = checkbox[e].checked;
                }
                else if (checkbox[e].type == 'text') {
                    settings[checkbox[e].name] = checkbox[e].value;
                };
            };
        };
    };
    for (let i = 0; i < form2.length; i++) {
        let checkbox2 = form2[i];
        for (let e = 0; e < checkbox2.length; e++) {
            if (checkbox2[e] != undefined) {
                if (checkbox2[e].type == 'checkbox') {
                    settings[checkbox2[e].name] = checkbox2[e].checked;
                }
                else if (checkbox2[e].type == 'number') {
                    settings[checkbox2[e].name] = checkbox2[e].value;
                }
                else if (checkbox2[e].type == 'text') {
                    settings[checkbox2[e].name] = checkbox2[e].value;
                }
            }
        }
    }
    localStorage.setItem('settings', JSON.stringify(settings));
    window.close();
}

function getSettings () {
    let form =wrapper.childNodes;
    let form2 =reminder.childNodes;
    let storedsettings = JSON.parse(localStorage.getItem('settings'));
    let ttsglobal = document.ttsform.gloabltts;
    let ttslanguage = document.ttsform.ttslanguage;

    ttsglobal.checked = storedsettings.globaltts;
    ttslanguage.value = storedsettings.ttslanguage;

    for (let i = 0; i < form.length; i++) {
        for (let e = 0; e < form[i].length; e++) {
            let thing = form[i][e];
            if (thing != undefined) {
                if (thing.name in storedsettings) {
                    if (thing.type == 'checkbox') {
                        thing.checked = storedsettings[thing.name]
                    }
                    else if (thing.type == 'text') {
                        thing.value = storedsettings[thing.name]
                    }
                }
            }
        }
    }
    for (let i = 0; i < form2.length; i++) {
        for (let e = 0; e < form2[i].length; e++) {
            let thing = form2[i][e];
            if (thing != undefined) {
                if (thing.name in storedsettings) {
                    if (thing.type == 'checkbox') {
                        thing.checked = storedsettings[thing.name];
                    }
                    else if (thing.type == 'number') {
                        thing.value = storedsettings[thing.name];
                    }
                    else if (thing.type == 'text') {
                        thing.value = storedsettings[thing.name];
                    }
                }
            }
        }
    }
}

for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function () {
        this.classList.toggle('active');
        console.log(this);
        let content = this.nextElementSibling;
        console.log(content);
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}