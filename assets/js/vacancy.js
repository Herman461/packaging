window.addEventListener('DOMContentLoaded', function() {

    const vacancyActionButton = document.querySelector('.vacancy__action')
    const vacancyCloseButton = document.querySelector('.filter-vacancy__close')
    const vacancyFilter = document.querySelector('.filter-vacancy')

    if (vacancyActionButton) {
        vacancyActionButton.addEventListener('click', function() {
            document.body.classList.add('lock')
            vacancyFilter.classList.add('active')
        })

    }

    if (vacancyCloseButton) {
        vacancyCloseButton.addEventListener('click', function() {
            document.body.classList.remove('lock')
            vacancyFilter.classList.remove('active')
        })
    }



    const fileInput = document.querySelector('.vacancy-single__file');
    const attachButton = document.querySelector('.vacancy-single__attach');
    const fileDisplay = document.querySelector('.file-display');
    const fileNameDisplay = document.querySelector('.file-display span');
    const removeFileButton = document.querySelector('.file-display__delete');


    if (attachButton) {
        attachButton.addEventListener('click', function() {
            fileInput.click();
        });
    }


    if (fileInput) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                fileNameDisplay.textContent = file.name;

                fileDisplay.style.display = 'flex';
                attachButton.style.display = 'none';
            }
        });

    }


    if (removeFileButton) {
        removeFileButton.addEventListener('click', function() {

            fileInput.value = '';

            fileDisplay.style.display = 'none';
            attachButton.style.display = 'flex';
        });
    }


    const successModal = document.querySelector('.modal-success');
    const vacancyFormSubmitButton = document.querySelector('.vacancy-single__button')

    if (vacancyFormSubmitButton) {
        vacancyFormSubmitButton.addEventListener('click', function() {
            successModal.classList.add('active')
            document.body.classList.add('lock')
        })
    }
})
