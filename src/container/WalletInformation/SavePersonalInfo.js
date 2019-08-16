import React, { Component } from 'react';
import Layout from '../Layout/LayoutButtons';
import { IonInput, IonButton, IonDatetime, IonSelect, IonSelectOption } from '@ionic/react';
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
      DOB: this.props.profile.DOB,
      CMND: this.props.profile.CMND,
      bhxh: this.props.profile.bhxh,
      fullname: this.props.profile.fullname,
      loading: false,
      mess: ''
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
      const params = {
        username: username,
        email: email,
        password: password,
        gender: gender,
        DOB: DOB,
        CMND: CMND,
        bhxh: bhxh,
        fullname: fullname
      };
      const id = this.props.profile.id;
      const token = this.props.profile.token;
      this.setState({ loading: true });
      this.props.save_info(params, id, token, this.success, this.fail);
    }
  };
  success = () => {
    this.setState({ loading: false }, () => {
      // history.push('/');
    });
  };
  fail = res => {
    this.setState({ loading: false, mess: res });
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
              name="DOB"
              value={this.state.DOB}
              onIonChange={e => this._onChange(e)}
            />
          </div>
          <div className="user marginbottom">
            <IonInput
              placeholder="CMND/ Thẻ căn cước"
              name="CMND"
              type="number"
              value={this.state.CMND}
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="pass marginbottom">
            <IonInput
              placeholder="Địa chỉ email"
              name="email"
              type="email"
              value={this.state.email}
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="user-bootom">
            <IonInput
              placeholder="Tên đăng nhập"
              name="username"
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
        </div>
        <div className="btn-submit">
          <IonButton onClick={this.register}>
            {this.state.loading ? <Loading /> : t('finish')}
          </IonButton>
        </div>
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
