import React, { Component } from 'react';
import Layout from '../Layout/LayoutButtons';
import { IonInput, IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';
class SavePersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        username: '',
        email: '',
        password: '',
        gioi_tinh: '',
        ngay_sinh: '',
        the_can_cuoc: '',
        ma_so: '',
        nickname: ''
      },
      error: false
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
    // if (
    //   this.state.params.username === '' ||
    //   this.state.params.email === '' ||
    //   this.state.params.password === '' ||
    //   this.state.params.gioi_tinh === '' ||
    //   this.state.params.ngay_sinh === '' ||
    //   this.state.params.the_can_cuoc === '' ||
    //   this.state.params.nickname === ''
    // ) {
    //   this.setState({
    //     error: true
    //   });
    // } else {
    //   this.props.register(this.state.params);
    // }
    this.props.register(this.state.params);
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
        to="/"
      >
        <div className="from-peson">
          {this.state.error ? (
            <p className="text-error">{t('Các trường là bắt buộc không được để trống')}</p>
          ) : null}

          <div className="phone">
            <IonInput
              placeholder="Họ và tên (có dấu)"
              onInput={e => this._onChange(e)}
              name="nickname"
            />
          </div>
          <div className="user marginbottom">
            <IonInput placeholder="Giới tính" name="gioi_tinh" onInput={e => this._onChange(e)} />
          </div>
          <div className="pass marginbottom">
            <IonInput
              placeholder="Ngày tháng năm sinh"
              name="ngay_sinh"
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="user marginbottom">
            <IonInput
              placeholder="CMND/ Thẻ căn cước"
              name="the_can_cuoc"
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
              placeholder="Số điện thoại Zalo"
              name="username"
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
        </div>
        <div className="btn-submit">
          <IonButton onClick={this.register}>{t('finish')}</IonButton>
        </div>
      </Layout>
    );
  }
}

SavePersonalInfo.propTypes = {
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
)(withTranslation()(SavePersonalInfo));
