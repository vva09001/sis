import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
const Popup = props => {
  const { t } = useTranslation();
  return (
    <div className="popup">
      <div className="popup-wrapper rounded bg-white position-relative">
        <div className="popup-header mb-2 text-center">{props.title || t('THÔNG BÁO')}</div>
        <div className="popup-body mb-2 text-center">{props.children}</div>
        <div className="popup-footer text-center">
          <button type="button" onClick={props.showPopup} className="mclose w100">
            {t('ĐÓNG')}
          </button>
        </div>
      </div>
    </div>
  );
};
Popup.propTypes = {
  showPopup: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string
};
export default Popup;
