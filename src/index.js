import './index.css';
import {createCard, deleteCard, initialCards, likeCard, openCard} from './components/cards'
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

editButton.addEventListener('click', function () {
    openModal(editModal);
    closeModal(editModal);

    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;

    const profileForm = editModal.querySelector(".popup__form");

    function handleFormSubmit(event) {
        event.preventDefault()

        profileTitle.textContent = profileTitleInput.value
        profileDescription.textContent = profileDescriptionInput.value

        editModal.classList.remove('popup_is-opened')

        profileForm.removeEventListener("submit", handleFormSubmit)
    }

    profileForm.addEventListener('submit', handleFormSubmit)
})

addButton.addEventListener('click', function () {
    openModal(addModal);
    closeModal(addModal);

    const newCardForm = addModal.querySelector(".popup__form");

    function handleFormSubmit(event) {
        event.preventDefault()

        const newCard = {
            name: cardNameInput.value,
            link: cardLinkInput.value
        }

        initialCards.unshift(newCard)

        renderCards()

        addModal.classList.remove('popup_is-opened')
        newCardForm.removeEventListener("submit", handleFormSubmit)
        cardNameInput.value = ""
        cardLinkInput.value = ""
    }

    newCardForm.addEventListener('submit', handleFormSubmit)
})

function renderCards() {
    list.innerHTML = ""

    initialCards.forEach(function (element) {
        const card = createCard(element, deleteCard, likeCard, openCard);

        list.append(card);
    });
}

renderCards()