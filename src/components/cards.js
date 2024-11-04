import {closeModal, openModal} from "./modal";

export const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

const template = document.querySelector("#card-template").content;
const imageModal = document.querySelector(".popup_type_image");

export function createCard(card, deleteCallback, likeCallback, openCallback) {
    const cardNode = template.querySelector(".card").cloneNode(true);

    const image = cardNode.querySelector(".card__image");
    image.src = card.link;
    image.alt = card.name;
    openCallback(cardNode, card.link)

    const titleNode = cardNode.querySelector(".card__title");
    titleNode.textContent = card.name;

    const deleteButton = cardNode.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function () {
        deleteCallback(cardNode);
    });

    const likeButton = cardNode.querySelector(".card__like-button")
    likeButton.addEventListener("click", function () {
        likeCallback(cardNode)
    })

    return cardNode;
}

export function deleteCard(cardNode) {
    cardNode.remove();
}

export function likeCard(cardNode) {
    const likeButton = cardNode.querySelector(".card__like-button")
    likeButton.classList.toggle("card__like-button_is-active")
}

export function openCard(cardNode, link) {
    const image = cardNode.querySelector(".card__image");

    image.addEventListener('click', function () {
        const popupImage = imageModal.querySelector('.popup__image')
        popupImage.src = link;

        openModal(imageModal);
        closeModal(imageModal);
    })
}