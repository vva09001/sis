import React, { Component } from 'react';
import Authpage from 'container/Layout/Authpage';
import { IonInput, IonButton } from '@ionic/react';
import Loading from 'components/Loading';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';
import history from 'utils/history';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        username: '',
        password: ''
      },
      loading: false,
      mess: ''
    };
  }
  componentDidMount() {
    const size = Object.keys(this.props.profile).length;
    if (size > 0) {
      history.push('/homepage');
    }
  }
  _onChange = e => {
    const newparams = this.state.params;
    newparams[e.target.name] = e.target.value;
    this.setState({
      params: newparams
    });
  };
  login = () => {
    if (this.state.params.username === '' || this.state.params.password === '') {
      if (this.state.params.username === '') {
        this.setState({
          mess: 'Tên người đăng là bắt buộc không được để trống'
        });
        return;
      }
      if (this.state.params.password === '') {
        this.setState({
          mess: 'Mật khẩu là bắt buộc không được để trống'
        });
        return;
      }
    }
    this.setState(
      {
        loading: true,
        mess: ''
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
        history.push('/homepage');
      }
    );
  };
  fail = mess => {
    this.setState(
      {
        loading: false,
        mess: mess
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
        <div className="from-peson">
          <div className="phone">
            <IonInput
              placeholder="Tên đăng nhập (Số điện thoại)"
              name="username"
              inputMode="numeric"
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
          <div className="mess-error">
            <p>{this.state.mess}</p>
          </div>
          <div className="btn-login">
            <IonButton onClick={this.login}>
              {this.state.loading ? <Loading /> : t('login')}
            </IonButton>
          </div>
          <div className="register">
            <div className="btn-register">
              <IonButton onClick={() => history.push('/register')}>{t('register')}</IonButton>
            </div>
            <div className="btn-pass">
              <IonButton onClick={() => history.push('/forgotpw')}>{t('forgotPassword')}</IonButton>
            </div>
          </div>
        </div>
      </Authpage>
    );
  }
}
HomePage.propTypes = {
  t: PropTypes.func,
  login: PropTypes.func,
  profile: PropTypes.object
};
const mapStateToProps = state => {
  return {
    profile: state.user.profile
  };
};

const mapDispatchToProps = {
  login: userActions.login
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePage));
