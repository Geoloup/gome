function animatorChecker() {
    if (localStorage.getItem('animaton') == 'true') {
        document.getElementById('apps').classList.add('animation')
    }
    if (localStorage.getItem('animaton') == 'false') {
        document.getElementById('apps').classList.remove('animation')
    }
    if (localStorage.getItem('animaton') == undefined) {
        localStorage.setItem('animaton','true')
        document.getElementById('apps').classList.add('animation')
    }
}
animatorChecker()
function animation() {
    localStorage.setItem('animaton', 'true')
    animatorChecker()
}
function removeAnimation() {
    localStorage.setItem('animaton', 'false')
    animatorChecker()
}