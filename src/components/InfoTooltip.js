import resultIcon from '../images/popup-result-icon.svg';

function InfoTooltip({ onClose }) {

    return (
        <div className="popup popup_type_infotool">
            <div className="popup__container">
                <img src={resultIcon} alt="" className="popup__result-icon" />
                <p className="popup__title-info">Тут будет в зависимости от результата текст</p>
                <button type="button" className="popup__button-close" onClick={onClose} />
            </div>
        </div>
    );
}

export default InfoTooltip;