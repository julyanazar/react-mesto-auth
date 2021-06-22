class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    getInitialData() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    }

    // Получить доступные карточки
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
            .then(res => this._checkRequestResult(res));
    }

    // Получить данные пользователя
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
            .then(res => this._checkRequestResult(res));
    }

    // Редактировать данные пользователя
    editUserInfo(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(res => this._checkRequestResult(res));
    }

    // Добавление новой карточки
    addCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => this._checkRequestResult(res));
    }

    // Поставить лайк
    likeCard(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(res => this._checkRequestResult(res));
    }

    // Удалить лайк
    deleteLikeCard(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._checkRequestResult(res));
    }

    // Удалить карточку
    removeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._checkRequestResult(res));
    }

    // Редактировать аватар пользователя
    editUserAvatar(urlAvatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: urlAvatar
            })
        })
            .then(res => this._checkRequestResult(res));
    }

    _checkRequestResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка! ${res.status}`);
    }

}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-23',
    headers: {
        authorization: 'e56d1e25-39ae-447a-8210-54350a3c4955',
        'Content-Type': 'application/json'
    }
});

export default api;