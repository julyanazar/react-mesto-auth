const popupsAll = document.querySelectorAll('.popup');

const popupProfileInfo = document.querySelector('.popup_profile_info');
const popupProfileInfoSelector = '.popup_profile_info';

const popupCardAdd = document.querySelector('.popup_card_add');
const popupCardAddSelector = '.popup_card_add';

const popupZoomImg = document.querySelector('.popup_zoom_img');
const popupZoomImgSelector = '.popup_zoom_img';

const popupZoomTitle = popupZoomImg.querySelector('.popup__caption');
const popupZoomPicture = popupZoomImg.querySelector('.popup__img');

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupEditAvatar = document.querySelector('.popup_edit_avatar');
const popupEditAvatarSelector = '.popup_edit_avatar';

const formAvatarElement = popupEditAvatar.querySelector('.form_avatar');
const popupAvatarInput = popupEditAvatar.querySelector('.form__input-link-avatar');
const popupEditAvatarSaveButton = popupEditAvatar.querySelector('.form__save-button');

const profileAvatar = document.querySelector('.profile__avatar');
const profileAvatarContainer = document.querySelector('.profile__avatar-container');

const formInputName = document.querySelector('.form__input-name');
const formInputNameSelector = '.profile__title';

const formInputAbout = document.querySelector('.form__input-about');
const formInputAboutSelector = '.profile__subtitle';

const formEditElement = document.querySelector('.form_edit');
const saveButtonFormEdit = formEditElement.querySelector('.form__save-button');

const formAddElement = document.querySelector('.form_add');
const saveButtonFormAdd = formAddElement.querySelector('.form__save-button');

const inputCardName = formAddElement.querySelector('.form__input-card-name');
const inputImg = formAddElement.querySelector('.form__input-src');

const cardsContainer = document.querySelector('.elements__items');
const cardListSelector = '.elements__items';
const templateElement = document.querySelector('.template');

const elementImg = document.querySelector('.element__img');

const inactiveButtonSaveClass = 'form__save-button_invalid';

const popupDeleteCardSelector = '.popup_delete_card';

const profileSelectors = {
    nameSelector: '.profile__title',
    aboutSelector: '.profile__subtitle',
    avatarSelector: '.profile__avatar'
}

const configValidation = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save-button',
    inactiveButtonClass: 'form__save-button_invalid',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
}

export {
    popupsAll,
    popupProfileInfo,
    popupCardAdd,
    popupZoomImg,
    popupZoomTitle,
    popupZoomPicture,
    editButton,
    addCardButton,
    profileTitle,
    profileSubtitle,
    formInputName,
    formInputAbout,
    formEditElement,
    saveButtonFormEdit,
    formAddElement,
    saveButtonFormAdd,
    inputCardName,
    inputImg,
    cardsContainer,
    templateElement,
    elementImg,
    inactiveButtonSaveClass,
    configValidation,
    cardListSelector,
    formInputNameSelector,
    formInputAboutSelector,
    profileSelectors,
    popupProfileInfoSelector,
    popupCardAddSelector,
    popupZoomImgSelector,
    profileAvatar,
    profileAvatarContainer,
    popupEditAvatar,
    popupEditAvatarSelector,
    formAvatarElement,
    popupAvatarInput,
    popupEditAvatarSaveButton,
    popupDeleteCardSelector
}