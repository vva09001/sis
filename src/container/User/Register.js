import React, { Component } from 'react';
import Authpage from 'container/Layout/Authpage';
import { IonInput, IonButton, IonDatetime, IonSelect, IonSelectOption } from '@ionic/react';
import Loading from 'components/Loading';
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
        DOB: '',
        CMND: '',
        bhxh: '',
        fullname: ''
      },
      loading: false,
      mess: ''
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
    const { username, email, password } = this.state.params;
    if (username === '' || email === '' || password === '') {
      if (username === '') {
        this.setState({ mess: 'Tên người dùng là bắt buộc không được để chống' });
        return;
      }
      if (email === '') {
        this.setState({ mess: 'Địa chỉ email là bắt buộc không được để chống' });
        return;
      }
      if (password === '') {
        this.setState({ mess: 'Mật khẩu là bắt buộc không được để chống' });
        return;
      }
    } else {
      this.setState({ loading: true });
      this.props.register(this.state.params, this.success, this.fail);
    }
  };
  success = () => {
    this.setState({ loading: false }, () => {
      history.push('/');
    });
  };
  fail = res => {
    this.setState({ loading: false, mess: res });
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
              name="DOB"
              onIonChange={e => this._onChange(e)}
            />
          </div>
          <div className="user marginbottom">
            <IonInput
              placeholder="CMND/ Thẻ căn cước"
              name="CMND"
              type="number"
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="pass marginbottom">
            <IonInput
              placeholder="Địa chỉ email"
              name="email"
              type="email"
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="user-bootom">
            <IonInput
              placeholder="Tên đăng nhập (Số điện thoại)"
              name="username"
              inputMode="numeric"
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
