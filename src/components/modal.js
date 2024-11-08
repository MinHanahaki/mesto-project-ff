export function openModal(modalNode) {
    modalNode.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeEscape(modalNode))
}

export function closeModal(modalNode) {
    modalNode.classList.remove('popup_is-opened')
    document.removeEventListener('keydown', closeEscape(modalNode))
}

function closeEscape(modalNode) {
    return function (event) {
        if (event.key === "Escape") {
            closeModal(modalNode)
        }
    }
}
