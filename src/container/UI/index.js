import React from 'react';
import { connect } from 'react-redux';
import Links from '../../components/common/Link';
import Popup from '../../components/Popup/index';
import popupAct from 'store/popup/actions';
import { IonButton } from '@ionic/react';
import PropTypes from 'prop-types';
import './index.scss';
class UIComponent extends React.Component {
  onOpenPopup(type, kindof) {
    const action = popupAct.openPopup;
    this.props.dispatch(
      action({
        type: type,
        kindof: kindof
      })
    );
  }

  render() {
    const { payload } = this.props.popup;
    const items = [
      {
        label: 'Primary',
        type: 'primary',
        to: ''
      },
      {
        label: 'Danger',
        type: 'danger',
        to: ''
      }
    ];
    return (
      <React.Fragment>
        <div id="app-example" className={`popup-container-${payload.pClass}`}>
          <Links items={items} />
          <IonButton
            onClick={() => {
              this.onOpenPopup('primary', 'single');
            }}
          >
            Popup Single Primary
          </IonButton>
          <IonButton
            color="danger"
            onClick={() => {
              this.onOpenPopup('danger', 'single');
            }}
          >
            Popup Single Danger
          </IonButton>
          <IonButton
            onClick={() => {
              this.onOpenPopup('primary', 'multi');
            }}
          >
            Popup Multi Primary
          </IonButton>
          <IonButton
            color="danger"
            onClick={() => {
              this.onOpenPopup('danger', 'multi');
            }}
          >
            Popup Multi Danger
          </IonButton>
        </div>
        <Popup options={payload} />
      </React.Fragment>
    );
  }
}

UIComponent.propTypes = {
  dispatch: PropTypes.func,
  onPopup: PropTypes.any,
  popup: PropTypes.any
};

const mapStateToProps = state => {
  return {
    popup: state.Popup
  };
};

export default connect(mapStateToProps)(UIComponent);
