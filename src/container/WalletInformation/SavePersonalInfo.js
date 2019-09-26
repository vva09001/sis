import React, { Component } from 'react';
import Layout from '../Layout/LayoutButtons';
import { IonInput, IonButton, IonDatetime, IonSelect, IonSelectOption } from '@ionic/react';
import { PopupSuccess } from 'components/common';
import Loading from 'components/Loading';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';
import history from 'utils/history';

class SavePersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.profile.username,
      email: this.props.profile.email,
      password: '',
      gender: this.props.profile.gender,
      dob: this.props.profile.dob,
      cmnd: this.props.profile.cmnd,
      bhxh: this.props.profile.bhxh,
      fullname: this.props.profile.fullname,
      loading: false,
      mess: '',
      showAlert: false,
      messMail: '',
      messPhone: '',
      ckeckMail: false,
      ckeckPhone: false
    };
  }
  _onChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  register = () => {
    const { username, email, password, gender, DOB, CMND, bhxh, fullname } = this.state;
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      DOB === '' ||
      CMND === '' ||
      // bhxh === '' ||
      fullname === ''
    ) {
      this.setState({ mess: 'Tất cả các trường là bắt buộc không được để trống' });
      return;
    }
    const params = {
      username: username,
      email: email,
      password: password,
      gender: gender,
      DOB: DOB,
      CMND: CMND,
      // bhxh: bhxh,
      fullname: fullname
    };
    if (!this.state.ckeckMail && !this.state.ckeckPhone) {
      this.setState({ loading: true });
      this.props.save_info(params, this.success, this.fail);
    }
  };
  success = () => {
    this.setState({ loading: false, mess: '', showAlert: true }, () => {
      // history.push('/');
    });
  };
  fail = res => {
    this.setState({ loading: false, mess: res });
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
      <Layout
        title={t('save_info')}
        sussget={t(
          'Hàng tháng, Ví sẽ gửi báo cáo quản lý BHXH cho bạn thông qua  mail hoặc Zalo của bạn, vậy nên bạn đăng ký với Ví một địa chỉ mail, hoặc zalo, hoặc cả hai cho chắc chắn mình luôn nhận được báo cáo.'
        )}
        btnColor="light"
        btnName={t('back')}
        _onClick={() => history.goBack()}
      >
        <div className="from-peson">
          <div className="phone">
            <IonInput
              name="fullname"
              placeholder="Họ và tên (có dấu)"
              value={this.state.fullname}
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="user marginbottom">
            <IonSelect
              placeholder="Giới tính"
              okText="Chọn"
              cancelText="Hủy"
              name="gender"
              interface="action-sheet"
              value={this.state.gender.toString()}
              onIonChange={e => this._onChange(e)}
            >
              <IonSelectOption value="true">Nữ</IonSelectOption>
              <IonSelectOption value="false">Nam</IonSelectOption>
            </IonSelect>
          </div>
          <div className="pass marginbottom">
            <IonDatetime
              display-format="YYYY-MM-DD"
              placeholder="Ngày tháng năm sinh"
              name="dob"
              value={this.state.dob}
              onIonChange={e => this._onChange(e)}
            />
          </div>
          <div className="user marginbottom">
            <IonInput
              placeholder="CMND/ Thẻ căn cước"
              name="cmnd"
              type="number"
              value={this.state.cmnd}
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="pass marginbottom">
            <IonInput
              placeholder="Địa chỉ email"
              name="email"
              type="email"
              onBlur={e => this.validateEmail(e)}
              value={this.state.email}
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="user-bootom">
            <IonInput
              placeholder="Số điện thoại (Tên đăng nhập)"
              name="username"
              onBlur={e => this.validatePhone(e)}
              value={this.state.username}
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
        <PopupSuccess
          isOpen={this.state.showAlert}
          setShowAlert={() => this.setState({ showAlert: false })}
          message="Lưu thông tin cá nhân thành công"
        />
      </Layout>
    );
  }
}

SavePersonalInfo.propTypes = {
  t: PropTypes.func,
  save_info: PropTypes.func,
  profile: PropTypes.object
};

const mapStateToProps = state => {
  return {
    profile: state.user.profile
  };
};

const mapDispatchToProps = {
  save_info: userActions.saveInfo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SavePersonalInfo));
