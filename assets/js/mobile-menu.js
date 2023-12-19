// Меню

const menu = document.querySelector('.base-header')

let lock = false
const burger = document.querySelector('.hamburger-mobile')

burger.addEventListener('click', function() {

    if (lock) return

    lock = true

    toggleMenu()

    setTimeout(() => {
        lock = false
    }, delay)
})

function toggleMenu() {
    burger.classList.toggle('active')
    menu.classList.toggle('active')

    lockBody()
}


function lockBody() {
    const scrollWidth = window.innerWidth - document.body.clientWidth

    document.body.classList.toggle('lock')

    document.body.style.paddingRight = scrollWidth + 'px'
}
