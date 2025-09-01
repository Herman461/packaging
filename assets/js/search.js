window.addEventListener('DOMContentLoaded', function () {
    const searchHeaderInput = document.querySelector('.header-search__input input')
    const searchHeaderResult = document.querySelector('.header-search__result')

    const handleChangeInputSearch = (value) => {
        if (value !== '' && !searchHeaderResult.classList.contains('active')) {
            searchHeaderResult.classList.add('active')
        }

        if (value === '' && searchHeaderResult.classList.contains('active')) {
            searchHeaderResult.classList.remove('active')
        }
    }
    searchHeaderInput.addEventListener('input', function (e) {
        handleChangeInputSearch(e.target.value)
    })

    const searchHeaderOpenButton = document.querySelector('.header-search__search')
    const searchHeaderCloseButton = document.querySelector('.header-search__close')

    const searchHeaderClear = document.querySelector('.header-search__clear')
    const searchHeaderBody = document.querySelector('.header-search__body')

    searchHeaderOpenButton.addEventListener('click', function () {
        searchHeaderBody.classList.add('active')
    })

    searchHeaderCloseButton.addEventListener('click', function () {
        searchHeaderBody.classList.remove('active')
    })

    searchHeaderClear.addEventListener('click', function () {
        searchHeaderInput.value = ''
        handleChangeInputSearch('')
    })
})