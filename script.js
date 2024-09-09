function focusTab(uuid) {
    tab = document.getElementById(uuid)
    console.log('ok')
    document.getElementById("searchbar").value = ""
    document.getElementById("searchbar").value = document.getElementById(`tabtop${window.lastuuid}`).dataset.src
    window.lastuuid = uuid
    // remove the hidden class to all the other elements with the protrety before
    try {
        tab.classList.add('hidden')
        for (var i = 0; i < tab.parentElement.children.length; i++) {
            if (tab.parentElement.children[i].id == uuid) {} else {
                tab.parentElement.children[i].classList.remove('hidden')
            }
        }
    } catch {
        console.log('this tab was closed')
    }
}

function newt() {
    // create button for the tab
    var uuid = crypto.randomUUID()
    window.lastuuid = uuid
    const tabtop = document.createElement('button')
    tabtop.innerHTML = `<span id='tabtopt${uuid}'>New Tab</span><i class='bx bx-x tabclose' id='uuid${uuid}'></i>`
    tabtop.addEventListener('click',(event)=>{focusTab(tabtop.dataset.uuid,event);focusTab(tabtop.dataset.uuid,event);window.it = event})
    tabtop.dataset.uuid = uuid
    tabtop.dataset.src = 'https://geoloupgome.netlify.app/app.html?uuid=' + uuid
    tabtop.id = `tabtop${uuid}`
    document.getElementById('tabtop').appendChild(tabtop)
    // create iframe of the tab
    iframe = document.createElement('iframe');
    iframe.setAttribute('is',"x-frame-bypass")
    iframe.id = uuid;
    iframe.src = 'https://geoloupgome.netlify.app/app.html?uuid=' + uuid
    document.getElementById("tabs").appendChild(iframe)
    document.getElementById("uuid" + uuid).addEventListener('click',()=>{closetab(tabtop.dataset.uuid)})
    var contextMenuTwo = CtxMenu(tabtop);
    contextMenuTwo.addItem("New tab", newt);
    contextMenuTwo.addSeparator();
    contextMenuTwo.addItem("Close tab", closectxtab);
    // Add a separator
    focusTab(uuid)
}
document.getElementById('tabtop').addEventListener("scroll", (event) => {
    console.log(event)
});

function closetab(uuid) {
    document.getElementById(uuid).remove()
    document.getElementById('uuid' + uuid).remove()
    document.getElementById(`tabtop${uuid}`).remove()
}

function burger(elm) {
    uuid = elm.dataset.uuid
    state = elm.dataset.state
    if (state == "false") {
        elm.dataset.state = "true"
        // code here to switch the class
        document.getElementById(uuid).classList.remove('Bhide')
        document.getElementById(uuid).classList.add('Bshow')
    } else {
        elm.dataset.state = "false"
        // code here to switch the class
        document.getElementById(uuid).classList.add('Bhide')
        document.getElementById(uuid).classList.remove('Bshow')
    }
}

function search() {
    var searchbar = document.getElementById("searchbar")
    var search = searchbar.value
    console.log(search)
    if (search.includes("https://") || search.includes("http://")) {
        // change the iframe src
        document.getElementById(`tabtop${window.lastuuid}`).src = search
        document.getElementById(window.lastuuid).src = search
    } else {
        console.log('was not url so not supported')
        searchbar.value = ""
    }
}

/*<button onclick="focusTab(this.dataset.uuid)" data-uuid="21e86172-e87c-41c5-af3d-59fdeeeb7108">New Tab<i class='bx bx-x tabclose'></i></button>*/
document.getElementById('newtab').addEventListener('click',()=>{newt()})
document.getElementById('searchbar').addEventListener('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        // Do something
        search()
        console.log('enter')
    }
});

function refreshTab() {
    tab = document.getElementById(window.lastuuid)
    tab.src = document.getElementById('tabtop' + window.lastuuid).dataset.src
}