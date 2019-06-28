import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import popupAct from 'store/popup/actions';
import 'style/alert.scss';
import 'style/common.scss';
const Popup = props => {
  const { t } = useTranslation();
  const { options, dispatch } = props;

  const onClose = () => {
    const action = popupAct.closePopup;
    dispatch(action);
  };

  let title = 'Thông báo';
  let kindof = 'multiple';
  if (options.type === 'danger') {
    title = 'Rất tiếc';
  }
  if (options.kindof === 'single') {
    kindof = 'hidden';
  }

  return (
    <div className={'popup ' + options.pClass}>
      <div className={`header-${options.type}`}>{title}</div>
      <div className="body">
        <div className={`title ${kindof}`}>I am a Full-stack Developer</div>
        <div className="content">I Am asd asd asdad as dasdas</div>
      </div>
      <div className="footer">
        <IonButton
          color="light"
          size="large"
          onClick={() => {
            onClose();
          }}
        >
          {t(' Đóng ')}
        </IonButton>
      </div>
    </div>
  );
};

Popup.propTypes = {
  showPopup: PropTypes.func,
  children: PropTypes.node,
  kindof: PropTypes.string,
  options: PropTypes.object,
  dispatch: PropTypes.func
};
export default connect()(Popup);
