let iswipe;
let settings = JSON.parse(localStorage.getItem('settings'));
let refirecounter = {};

for (let name in buffs) {
    refirecounter[name] = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('settings') == null) {
        localStorage.setItem('settings', JSON.stringify(defaultsettings));
    }
});

function loadsettings () {
    settings = JSON.parse(localStorage.getItem('settings'));
}

function buffdraw(playerID, skillID) {
    let wrapper = document.getElementById('wrapper');
    let tts = buffs[skillID].tts;
    let ttssetting = settings.globaltts;
    let language = settings.ttslanguage;
    let img = buffs[skillID].img;
    let duration = buffs[skillID].duration;
    let cooldown = buffs[skillID].cooldown - 1;
    let priority = buffs[skillID].priority;
    let newpic = document.createElement('div');
    let skilltts = settings[tts['english'].toLowerCase().replace(/\s+/g, '') + 'cb'];
    let customtts = settings[tts['english'].toLowerCase().replace(/\s+/g, '') + 'tts'];
    let skillreminder = settings[tts['english'].toLowerCase().replace(/\s+/g, '') + 'cbr'];
    let remindertime = settings[tts['english'].toLowerCase().replace(/\s+/g, '') + 'time'];
    let remindertext = settings[tts['english'].toLowerCase().replace(/\s+/g, '') + 'text'];
    let usertts
    iswipe = false;

    if (customtts != '') {
        usertts = customtts;
    }
    else {
        usertts = tts[language];
    }

    if (ttssetting == true && skilltts == true) {
        saythings (skillID, tts);
        console.log(usertts);
    };

    let durationtimer = setInterval(() => {
        if (duration < 1 || iswipe == true) {
            clearInterval(durationtimer);
        }
        duration -= 1;
    }, 1000);

    let cooldowntimer = setInterval(() => {
        if (cooldown < 1 || iswipe == true) {
            clearInterval(cooldowntimer);
            newpic.className = 'done';
            newpic.innerHTML = 'Ready';
        }
        else if (duration >= 0) {
            newpic.className = 'duration';
            newpic.innerHTML = duration;
        }
        else {
            newpic.className = 'cooldown';
            newpic.innerHTML = cooldown;
        }
        if (skillreminder == true && remindertime == cooldown && ttssetting ==true) {
            saythings (skillID, remindertext);
            //console.log(remindertext);
        }
        cooldown -= 1;
    }, 1000);

    newpic.style = `background-image: url("${img}"); background-position: center; background-repeat: no-repeat;`;
    newpic.id = playerID + - + priority;

    if (document.getElementById('awaitingdata') != null) {
        wrapper.removeChild(document.getElementById('awaitingdata'));
    }

    if (document.getElementById(playerID + - + priority) != null) {
        wrapper.replaceChild(newpic, document.getElementById(playerID + - + priority));
    }
    else {
        wrapper.appendChild(newpic);
    }
    sortBuffs();
}

function sortBuffs() {
    let wrapper = document.getElementById('wrapper');
    let elements = wrapper.childNodes;
    let sortMe = [];

    for (let i=0; i<elements.length; i++) {
        if (!elements[i].id) {
            continue;
        }
        let sortsplit = elements[i].id.split('-');
        if (sortsplit.length > 1) {
            sortMe.push([1 * sortsplit[1], elements[i]]);
        }
    }
    sortMe.sort(function(x, y) {
        return x[0] - y[0];
    });
    for (let i=0; i<sortMe.length; i++) {
        wrapper.appendChild(sortMe[i][1]);
    }
}

function saythings (skill, tts) {
    refirecounter[skill] += 1;

    if (refirecounter[skill] == 1) {
        callOverlayHandler({call: 'cactbotSay', text: tts});
    }
    setTimeout(() => {
        refirecounter[skill] = 0
    }, 50);
}

function wipereset () {
    iswipe = true;
    let children = document.getElementById('wrapper');
    for (let i = 0; i < children.children.length; i++) {
        let childrendivs
        if (children.children[i].id == undefined) {
            continue;
        }
        else {
            childrendivs = document.getElementById(children.children[i].id)
            childrendivs.innerHTML = 'Ready';
            childrendivs.className = 'done';
            }
    }
}

function changezone () {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild)}
        
    if (document.getElementById('awaitingdata') == null) {
        let span = document.createElement('span');
        span.id = 'awaitingdata';
        span.className = 'awaitingdata';
        span.innerHTML = 'Awaiting data...';

        wrapper.appendChild(span);
    }
}