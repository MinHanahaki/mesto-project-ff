// @todo: Темплейт карточки

const template = document.querySelector("#card-template").content;

// @todo: DOM узлы

const list = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(card, callback) {
    const cardNode = template.querySelector(".card").cloneNode(true);

    const image = cardNode.querySelector(".card__image");
    image.src = card.link;
    image.alt = card.name;

    const titleNode = cardNode.querySelector(".card__title");
    titleNode.textContent = card.name;

    const deleteButton = cardNode.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function () {
        callback(cardNode);
    });

    return cardNode;
}

// @todo: Функция удаления карточки

function deleteCard(cardNode) {
    cardNode.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (element) {
    const card = createCard(element, deleteCard);

    list.append(card);
});
