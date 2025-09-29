$(document).ready(function () {
    $('#base-contacts-select').select2({
        minimumResultsForSearch: Infinity,
        dropdownCssClass: "base-contacts-select-dropdown",
        selectionCssClass: "base-contacts-selection",
        placeholder: "Выбрать тему",


    });
});


document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.querySelector('.feedback-form')

    function openSuccessModal() {

        const scrollWidth = window.innerWidth - document.body.clientWidth

        const modalTitle = '#modal-contacts-success'

        document.querySelector(modalTitle).classList.add('active')

        document.body.classList.add('lock')

        document.body.style.paddingRight = scrollWidth + 'px'
    }

    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault()
        openSuccessModal()
    })



    const dragAndDropModal = document.getElementById("modal-drag-and-drop");


    const dragAndDropButton = document.querySelector('.modal-drag-and-drop__button')
    const wrapFile = document.querySelector('.wrap-file')
    const wrapTextarea = document.querySelector('.feedback-form__right .wrap-textarea')
    const fileNameSpan = document.querySelector('.field-uploaded-files__file span')
    const fileDeleteButton = document.querySelector('.field-uploaded-files__delete')

    dragAndDropButton.addEventListener('click', function (e) {
        wrapFile.click()
    })


    if (!dragAndDropModal) {

        return;
    }

    dragAndDropModal.addEventListener("dragenter", preventDefaults, false);
    dragAndDropModal.addEventListener("dragover", preventDefaults, false);
    dragAndDropModal.addEventListener("dragleave", preventDefaults, false);
    dragAndDropModal.addEventListener("drop", preventDefaults, false);

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }



    dragAndDropModal.addEventListener("dragenter", function () {
        dragAndDropModal.classList.add("modal-drag-and-drop_active")
    })

    dragAndDropModal.addEventListener("dragover", function () {
        dragAndDropModal.classList.add("modal-drag-and-drop_active")
    })

    dragAndDropModal.addEventListener("dragleave", function () {
        dragAndDropModal.classList.remove("modal-drag-and-drop_active")
    })

    dragAndDropModal.addEventListener("drop", function (e) {
        dragAndDropModal.classList.remove("modal-drag-and-drop_active")

        const files = e.dataTransfer.files
        if (files.length) {
            wrapFile.files = files

            const file = wrapFile.files[0]
            fileNameSpan.textContent = file.name

            dragAndDropModal.querySelector('[data-modal-close]').click()
            wrapTextarea.classList.add('wrap-textarea_with-file')
        }
    })

    if (wrapFile) {
        wrapFile.addEventListener("change", function () {
            if (wrapFile.files.length) {
                const file = wrapFile.files[0]

                fileNameSpan.textContent = file.name

                dragAndDropModal.querySelector('[data-modal-close]').click()
                wrapTextarea.classList.add('wrap-textarea_with-file')
            }
        });
    }

    fileDeleteButton.addEventListener('click', function () {
        wrapTextarea.classList.remove('wrap-textarea_with-file')
        fileNameSpan.textContent = ''
        wrapFile.value = null

    })
})