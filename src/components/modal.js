export function openModal(modalNode) {
    modalNode.classList.add('popup_is-opened');

    function closeEscape(event) {
        if (event.key === "Escape") {
            modalNode.classList.remove('popup_is-opened')
            document.removeEventListener('keydown', closeEscape)
        }
    }

    document.addEventListener('keydown', closeEscape)
}

export function closeModal(modalNode) {

    const closeButton = modalNode.querySelector('.popup__close');

    closeButton.addEventListener('click', function () {
        modalNode.classList.remove('popup_is-opened')
    })

    modalNode.addEventListener('click', function (event) {
        if (event.target.classList.contains("popup")) {
            modalNode.classList.remove('popup_is-opened')
        }
    })
}