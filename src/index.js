import './index.css';
import {createCard, deleteCard, initialCards, likeCard} from './components/cards'
import {closeModal, openModal} from "./components/modal";

const list = document.querySelector(".places__list");

const editButton = document.querySelector(".profile__edit-button");
const editModal = document.querySelector(".popup_type_edit");

const addButton = document.querySelector(".profile__add-button");
const addModal = document.querySelector(".popup_type_new-card");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector(".popup__input_type_name");
const profileDescriptionInput = document.querySelector(".popup__input_type_description");

const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");

const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupCaption = popupTypeImage.querySelector('.popup__caption');

const profileForm = editModal.querySelector(".popup__form");
const newCardForm = addModal.querySelector(".popup__form");

const modals = document.querySelectorAll(".popup");

modals.forEach(function (modal) {
    modal.addEventListener('click', function (event) {
        if (event.target.classList.contains("popup")) {
            closeModal(modal)
        }
    })

    const closeButton = modal.querySelector('.popup__close');

    closeButton.addEventListener('click', function () {
        closeModal(modal)
    })
})

editButton.addEventListener('click', function () {
    openModal(editModal);

    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;

})

function handleProfileFormSubmit(event) {
    event.preventDefault()

    profileTitle.textContent = profileTitleInput.value
    profileDescription.textContent = profileDescriptionInput.value

    closeModal(editModal)
}

profileForm.addEventListener('submit', handleProfileFormSubmit)

addButton.addEventListener('click', function () {
    openModal(addModal);
})

function handleNewCardFormSubmit(event) {
    event.preventDefault()

    const newCard = {
        name: cardNameInput.value,
        link: cardLinkInput.value
    }

    const card = createCard(newCard, deleteCard, likeCard, openCard)
    list.append(card);

    closeModal(addModal)
    cardNameInput.value = ""
    cardLinkInput.value = ""
}

newCardForm.addEventListener('submit', handleNewCardFormSubmit)


export function openCard(name, link) {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;

    openModal(popupTypeImage);
}

list.innerHTML = ""

initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard, likeCard, openCard);

    list.append(card);
});
