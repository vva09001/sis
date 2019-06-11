import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Layout from 'container/Layout/Layout';
import Menu from 'container/Common/Menu';
import { IonThumbnail, IonText, IonRow, IonCol } from '@ionic/react';
import PropTypes from 'prop-types';

class ProfileContainer extends Component {
  render() {
    return (
      <Layout>
        <Menu />
        <IonRow className="profile ion-justify-content-center">
          <IonCol className="ion-text-center">
            <IonThumbnail>
              <img
                alt="profile"
                size={300}
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              />
            </IonThumbnail>
            <IonText color="primary">
              <h2>MAI DINH KHOA</h2>
            </IonText>
          </IonCol>
        </IonRow>
      </Layout>
    );
  }
}

ProfileContainer.propTypes = {
  token: PropTypes.string
};

const mapStateToProps = state => {
  return {
    token: state.User.token
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ProfileContainer));
