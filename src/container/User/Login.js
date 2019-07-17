import React, { Component } from 'react';
import Authpage from 'container/Layout/Authpage';
import { IonCardContent, IonInput, IonButton, IonSpinner } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        username: '',
        password: ''
      },
      show: false,
      loading: false
    };
  }
  _onChange = e => {
    const newparams = this.state.params;
    newparams[e.target.name] = e.target.value;
    this.setState({
      params: newparams
    });
  };
  login = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        this.props.login(this.state.params, this.success, this.fail);
      }
    );
  };
  success = () => {
    this.setState(
      {
        loading: false
      },
      () => {
        //console.log('success');
      }
    );
  };
  fail = () => {
    this.setState(
      {
        loading: false
      },
      () => {
        //console.log('fail');
      }
    );
  };
  render() {
    const { t } = this.props;
    return (
      <Authpage>
        <img src="img/user.png" alt="icon_user" />
        <div className="header">
          <h1>{t('login')}</h1>
        </div>
        <IonCardContent>
          <div className="phone">
            <IonInput
              placeholder={t('phoneNumber')}
              name="username"
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="user">
            <IonInput placeholder={t('fullName')} />
          </div>
          <div className="pass">
            <IonInput
              placeholder={t('password')}
              name="password"
              type="password"
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="btn-login">
            {/* <Link to="homepage">
              <IonButton>{t('login')}</IonButton>
            </Link> */}
            {this.state.loading ? (
              <IonSpinner />
            ) : (
              <IonButton onClick={this.login}>{t('login')}</IonButton>
            )}
          </div>
          <div className="register">
            <IonButton class="btn-register">
              <Link to="/personalinfo">{t('register')}</Link>
            </IonButton>
            <IonButton class="btn-pass">{t('forgotPassword')}</IonButton>
          </div>
        </IonCardContent>
      </Authpage>
    );
  }
}
HomePage.propTypes = {
  t: PropTypes.func,
  login: PropTypes.func
};
const mapStateToProps = state => {
  return {
    loading: state.user.loading
  };
};

const mapDispatchToProps = {
  login: userActions.login
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePage));
