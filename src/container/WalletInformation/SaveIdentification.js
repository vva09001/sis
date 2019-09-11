import React, { Component } from 'react';
import Layout from '../Layout/LayoutButtons';
import { IonButton, IonInput, IonAlert } from '@ionic/react';
import Loading from 'components/Loading';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { userActions } from '../../store/actions';
import { connect } from 'react-redux';

class SaveWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        bhxh: '',
        username: '',
        password: ''
      },
      error: '',
      loading: null,
      showAlert: false,
      messPhone: '',
      ckeckPhone: false
    };
  }

  _onChange = e => {
    const newparams = this.state.params;
    newparams[e.target.name] = e.target.value;
    this.setState({
      params: newparams
    });
  };

  submit = () => {
    const { bhxh, username, password } = this.state.params;
    if (bhxh === '' || username === '' || password === '') {
      this.setState({
        error: 'Các trường là bắt buộc không được để trống'
      });
      return;
    }
    if (!this.state.ckeckPhone) {
      this.setState({ loading: true }, () => {
        this.props.save(this.state.params, this.success, this.fail);
      });
    }
  };
  validatePhone = e => {
    const regex = /(09|01[2|6|8|9])+([0-9]{8})\b/;
    if (!regex.test(e.target.value)) {
      this.setState({ messPhone: 'Số điện thoại không đúng định dạng', ckeckPhone: true });
    } else {
      this.setState({ messPhone: '', ckeckPhone: false });
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
      () => {
        //console.log('fail');
      }
    );
  };

  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Thông tin định danh Ví')}
        sussget={t(
          'Thông tin số điện thoại đăng nhập và mật khẩu khi bạn cần sửa lại, sẽ có phần chỉnh sửa thông tin ở cuối cùng của Ví'
        )}
        btnColor="light"
        btnName={t('back')}
        _onClick={() => history.goBack()}
      >
        <div className="from-peson">
          <div className="phone">
            <IonInput
              placeholder="Mã số BHXH của bạn"
              name="bhxh"
              inputMode="numeric"
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="user inp-custom">
            <IonInput
              placeholder="Số điện thoại của bạn (Tên đăng nhập)"
              name="username"
              inputMode="numeric"
              onBlur={e => this.validatePhone(e)}
              onInput={e => this._onChange(e)}
            />
          </div>
          <div className="pass">
            <IonInput
              placeholder={t('password')}
              name="password"
              type="password"
              onInput={e => this._onChange(e)}
            />
          </div>
          <p className="text-error">{this.state.error}</p>
          <p className="text-error">{this.state.messPhone}</p>
        </div>
        <div className="btn-submit">
          <IonButton onClick={this.submit}>
            {this.state.loading ? <Loading /> : t('save')}
          </IonButton>
        </div>
        <div className="btn-submit">
          <IonButton onClick={() => history.push('/forgotinsurrance')}>
            {t('forgot_code')}
          </IonButton>
        </div>
        <IonAlert
          isOpen={this.state.showAlert}
          onDidDismiss={() => this.setState({ showAlert: false })}
          header={'Thông báo'}
          message={'Lưu thông tin định danh ví thành công'}
          buttons={['Cancel']}
        />
      </Layout>
    );
  }
}

SaveWallet.propTypes = {
  t: PropTypes.func,
  save: PropTypes.func
};

const mapDispatchToProps = {
  save: userActions.saveCodeInsurance
};
export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(SaveWallet));
