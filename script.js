let primaryPlayer;
let partyList;
let refire = 0;

document.addEventListener("onOverlayStateUpdate", function (e) {
    document.documentElement.classList.toggle(
        'resizeHandle',
        !e.detail.isLocked,
    )
    if (e.detail.isLocked) {
        document.getElementById('unlockedGuide').style.display = 'none';
    }
    else {
        document.getElementById('unlockedGuide').style.display = 'flex';
    }
});

addOverlayListener("ChangePrimaryPlayer", async (data) => {
    primaryPlayer = {
        id: data.charID,
        name: data.charName,
    };
    const playerInfo = await callOverlayHandler({ call: 'getCombatants', ids: [primaryPlayer.id]});
    primaryPlayer = {
        id: primaryPlayer.id,
        name: primaryPlayer.name,
        job: playerInfo.combatants[0].Job,
    }
    if (partyList == undefined) {
        partyList = [
            {
                id: primaryPlayer.id.toString(16).toUpperCase(),
                name: primaryPlayer.name,
                job: primaryPlayer.job,
            }
        ]
    }
});

addOverlayListener("PartyChanged", (data) => {
    if (data.party.length == 0) {
        partyList = [
            {  
                id: primaryPlayer.id.toString(16).toUpperCase(),
                name: primaryPlayer.name,
                job: primaryPlayer.job,
            }
        ]
    }
    else {
        partyList = data.party;
    }
});

addOverlayListener("ChangeZone", (data) => {
    changezone();
})

addOverlayListener("LogLine", (data) => {
    if (trackedLogLineId.includes(data.line[0])
        && trackedAbilityId.includes(data.line[4])
        && partyList.some(member => member.id === data.line[2]) )
    {
        buffdraw(data.line[2], data.line[4]); // data.line[2] is PlayerID | data.line[4] is skillID
    }
    else if (data.line[0] === wipeLogLineId
            && wipeTrackedActorId.includes(data.line[3]) ) {
            wipereset();
    }
});

startOverlayEvents();

document.body.addEventListener('contextmenu', () => {
    let openSettings = window.open('settingsPage/settingsbeta.html','settings', 'top=200,left=200,width=650,height=600,scrollbars=no');
        let settingsTimer = setInterval(() => {
            if (openSettings.closed) {
                clearInterval(settingsTimer);
                loadsettings ();
            }
        }, 1000);
});