import React, { Component } from 'react';
import Authpage from 'container/Layout/Authpage';
import { IonInput, IonButton, IonDatetime, IonSelect, IonSelectOption } from '@ionic/react';
import Loading from 'components/Loading';
import { PopupSuccess } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';
import history from 'utils/history';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        username: '',
        email: '',
        password: '',
        gender: null,
        dob: '',
        cmnd: '',
        bhxh: '',
        fullname: ''
      },
      ckeckMail: false,
      ckeckPhone: false,
      loading: false,
      mess: '',
      messMail: '',
      messPhone: '',
      showAlert: false
    };
  }
  _onChange = e => {
    const newparams = this.state.params;
    newparams[e.target.name] = e.target.value;
    this.setState({
      params: newparams
    });
  };
  register = () => {
    const { username, email, password, gender, dob, cmnd, fullname } = this.state.params;
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      gender === '' ||
      dob === '' ||
      cmnd === '' ||
      fullname === ''
    ) {
      this.setState({ mess: 'Tất cả các trường là bắt buộc không được để trống' });
      return;
    }
    if (!this.state.ckeckMail && !this.state.ckeckPhone) {
      this.setState({ loading: true });
      this.props.register(this.state.params, this.success, this.fail);
    }
  };
  success = () => {
    this.setState({ loading: false, showAlert: true, mess: '' });
  };
  fail = res => {
    this.setState({ loading: false, mess: res });
  };
  closeAlert = () => {
    this.setState({ showAlert: false }, () => {
      history.push('/');
    });
  };
  validateEmail = e => {
    const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    if (!regex.test(e.target.value)) {
      this.setState({ messMail: 'Email không đúng định dạng', ckeckMail: true });
    } else {
      this.setState({ messMail: '', ckeckMail: false });
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
  render() {
    const { t } = this.props;
    return (
      <Authpage
        title={t('save_info')}
        sussget={t(
          'Hàng tháng, Ví sẽ gửi báo cáo quản lý BHXH cho bạn thông qua  mail hoặc Zalo của bạn, vậy nên bạn đăng ký với Ví một địa chỉ mail, hoặc zalo, hoặc cả hai cho chắc chắn mình luôn nhận được báo cáo.'
        )}
        btnColor="light"
        btnName={t('back')}
        _onClick={() => history.goBack()}
      >
        <img src="img/user.png" alt="icon_user" />
        <div className="header">
          <h1>{t('register')}</h1>
        </div>
        <div className="from-peson">
          <div className="phone">
            <IonInput
              placeholder="Họ và tên (có dấu)"
              onInput={e => this._onChange(e)}
              name="fullname"
            />
          </div>
          <div className="user marginbottom">
            <IonSelect
              placeholder="Giới tính"
              okText="Chọn"
              cancelText="Hủy"
              name="gender"
              interface="action-sheet"
              onIonChange={e => this._onChange(e)}
            >
              <IonSelectOption value={true}>Nữ</IonSelectOption>
              <IonSelectOption value={false}>Nam</IonSelectOption>
            </IonSelect>
          </div>
          <div className="pass marginbottom">
            <IonDatetime
              display-format="YYYY-MM-DD"
              placeholder="Ngày tháng năm sinh"
              name="dob"
              onIonChange={e => this._onChange(e)}
            />
          </div>
          <div className="user marginbottom">
            <IonInput
              placeholder="CMND/ Thẻ căn cước"
              name="cmnd"
              type="number"
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="pass marginbottom">
            <IonInput
              placeholder="Địa chỉ email"
              name="email"
              type="email"
              onBlur={e => this.validateEmail(e)}
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="user-bootom">
            <IonInput
              placeholder="Số điện thoại (Tên đăng nhập)"
              name="username"
              inputMode="numeric"
              onBlur={e => this.validatePhone(e)}
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="pass marginbottom">
            <IonInput
              placeholder="Mật khẩu"
              name="password"
              type="password"
              onInput={e => this._onChange(e)}
            />
          </div>
          <p className="text-error">{this.state.mess}</p>
          <p className="text-error">{this.state.messMail}</p>
          <p className="text-error">{this.state.messPhone}</p>
        </div>
        <div className="btn-submit">
          <IonButton onClick={this.register}>
            {this.state.loading ? <Loading /> : t('finish')}
          </IonButton>
        </div>
        <div className="btn-submit">
          <IonButton color="light" onClick={() => history.goBack()}>
            {t('back')}
          </IonButton>
        </div>
        <PopupSuccess
          isOpen={this.state.showAlert}
          setShowAlert={this.closeAlert}
          message="Đăng ký thành công"
        />
      </Authpage>
    );
  }
}

Register.propTypes = {
  t: PropTypes.func,
  register: PropTypes.func,
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    loading: state.user.loading
  };
};

const mapDispatchToProps = {
  register: userActions.register
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Register));
