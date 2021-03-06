import React, { Component } from 'react';
import Layout from '../Layout/LayoutOptions';
import { IonInput, IonButton } from '@ionic/react';
import Loading from 'components/Loading';
import history from 'utils/history';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { userActions } from '../../store/actions';
import { connect } from 'react-redux';

class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: '',
      username: '',
      password: '',
      error: '',
      showAlert: false,
      loading: false,
      messPhone: '',
      messPhone2: '',
      ckeckPhone: false,
      ckeckPhone2: false
    };
  }

  savePhone = () => {
    if (this.state.newUsername === '' || this.state.username === '' || this.state.password === '') {
      this.setState({
        error: 'Số điện thoại là bắt buộc không được để trống'
      });
      return;
    }
    const params = {
      username: this.state.username,
      password: this.state.password,
      newUsername: this.state.newUsername
    };
    if (!this.state.ckeckPhone && !this.state.ckeckPhone2) {
      this.setState(
        {
          loading: true
        },
        () => {
          this.props.save(params, this.success, this.fail);
        }
      );
    }
  };
  validatePhone = e => {
    const regex = /(09|01[2|6|8|9]|0[7|8|3|5])+([0-9]{8})\b/;
    if (!regex.test(e.target.value)) {
      this.setState({ messPhone: 'Số điện thoại không đúng định dạng', ckeckPhone: true });
    } else {
      this.setState({ messPhone: '', ckeckPhone: false });
    }
  };
  validatePhone2 = e => {
    const regex = /(09|01[2|6|8|9]|0[7|8|3|5])+([0-9]{8})\b/;
    if (!regex.test(e.target.value)) {
      this.setState({ messPhone2: 'Số điện thoại không đúng định dạng', ckeckPhone2: true });
    } else {
      this.setState({ messPhone2: '', ckeckPhone2: false });
    }
  };
  success = () => {
    this.setState(
      {
        loading: false,
        showAlert: true
      },
      () => {}
    );
  };
  fail = mess => {
    this.setState(
      {
        loading: false,
        error: mess
      },
      () => {}
    );
  };

  render() {
    const { t } = this.props;
    return (
      <Layout title={t('Lưu số điện thoại đã đăng kí nhận mã tra cứu OTP')}>
        <div className="text-box">
          {t('Trường hợp bạn đã có số điện thoại đăng ký với BHXH để nhận mã tra cứu OTP')}
        </div>
        <div className="input-phone">
          <div className="input">
            <IonInput
              name="newUsername"
              placeholder="Nhập sđt mới"
              inputmode="numeric"
              onBlur={e => this.validatePhone2(e)}
              onInput={e => this.setState({ newUsername: e.target.value })}
            />
          </div>
          <div className="input">
            <IonInput
              name="username"
              placeholder="Nhập sđt đã đăng kí BHXH"
              inputmode="numeric"
              onBlur={e => this.validatePhone(e)}
              onInput={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="input">
            <IonInput
              name="password"
              placeholder="Mật khẩu"
              inputmode="password"
              onInput={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="btn-find">
            <IonButton onClick={this.savePhone}>
              {this.state.loading ? <Loading /> : t('save_Infon')}
            </IonButton>
          </div>
        </div>
        <p className="text-error">{this.state.error}</p>
        <p className="text-error">{this.state.messPhone}</p>
        <p className="text-error">{this.state.messPhone2}</p>
        <div className="text-box">
          {t(
            'Trường hợp nếu bạn chưa hiểu, chưa đăng ký với cơ quan BHXH số điện thoại nhận mã tra cứu OTP'
          )}
        </div>
        <div className="btn-find">
          <IonButton>
            <Link to="/getOTP">{t('looking_for_more_information')}</Link>
          </IonButton>
        </div>
        <div className="btn-back btnBackNo">
          <IonButton color="light" onClick={() => history.goBack()}>
            {t('back')}
          </IonButton>
        </div>
      </Layout>
    );
  }
}

OTP.propTypes = {
  t: PropTypes.func,
  save: PropTypes.func,
  profile: PropTypes.object
};

const mapSateToProps = state => {
  return {
    profile: state.user.profile
  };
};

const mapDispatchToProps = {
  save: userActions.saveCodeInsurance
};
export default connect(
  mapSateToProps,
  mapDispatchToProps
)(withTranslation()(OTP));
