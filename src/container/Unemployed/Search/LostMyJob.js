// tìm hiểu quyền lợi trợ cấp bạn chưa từng nghỉ việc

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonDate } from 'components/common';
import { IonAlert } from '@ionic/react';
import { IonInput } from '@ionic/react';
import moment from 'moment';
import { currency } from 'utils/currency';
import PropTypes from 'prop-types';
import { unemployedActions } from '../../../store/actions';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class Severance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      money: '',
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      loading: false,
      mess: '',
      show: false,
      show1: false,
      show3: false
    };
  }
  send = () => {
    const { startDay, startMonth, startYear, money, endDay, endMonth, endYear } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === '' ||
      money === ''
    ) {
      this.setState({ mess: 'Các trường là bắt buộc không được để trống' });
      return;
    }
    this.setState({ loading: true, mess: '' });
    const params = {
      startDate: {
        day: startDay,
        month: startMonth,
        year: startYear
      },
      endDate: {
        day: endDay,
        month: endMonth,
        year: endYear
      },
      money: money
    };
    this.props.check(params, this.success, this.fail);
  };
  success = () => {
    this.setState({
      loading: false,
      show: true
    });
  };
  fail = mess => {
    this.setState({
      loading: false,
      mess: mess
    });
  };
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Bạn chưa từng nghỉ việc tạm thời và nhận trợ cấp thôi việc tạ DN (đơn vị) hiện tại'
        )}
        cardName="contentBoder"
        btnColor="primary"
        _onClick={this.send}
        loading={this.state.loading}
        btnName={t('finish')}
      >
        <div className="cardInfo">
          <ContentTitle>
            {t(
              'Bạn bổ xung thêm thông tin theo quy định của BHXH để Ví kiểm tra quyền lợi và cung cấp dịch vụ hỗ trợ thủ tục cho bạn nhanh và chính xác nhất'
            )}
          </ContentTitle>
          <div className="form">
            <div>
              <p>{t('Thời điểm bạn bắt đầu làm việc tại DN( đơn vị )')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Thời điểm bạn bắt đầu nghỉ việc do thôi việc tại DN(đơn vị)')}</p>
              <ButtonDate
                pickDay={e => this.setState({ endDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ endMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ endYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div className="input-sick">
              <p>
                {t(
                  'Tiền lương bình quân 06 tháng theo Hợp đồng lao động trước khi nghỉ việc của bạn (Tổng lương 06 tháng / 6) là vnđ'
                )}
              </p>
              <IonInput
                type="number"
                placeholder="Tiền lương"
                onIonChange={e => this.setState({ money: parseInt(e.target.value) })}
              />
            </div>

            <div className="mess-error">
              <p>{this.state.mess}</p>
            </div>
          </div>
        </div>
        <IonAlert
          isOpen={this.state.show}
          setShowAlert={() => this.setState({ show: false })}
          header={'Thông báo'}
          message={
            '<div>' +
            'Đơn vị bạn đang làm việc, hiện tại đang nợ tiền đóng BHXH, hoặc không đóng Bảo hiểm thất nghiệp cho bạn.' +
            '</div>' +
            '<div>' +
            'Nên theo luật lao động nắm 2012, DN (đơn vị) bạn có trách nghiệm chi trả toàn bộ trợ cấp thôi việc cho bạn mà không có sự hỗ trợ thêm của BHXH' +
            '</div>' +
            '<div>' +
            'Thời gian làm việc tại đơn vị là ' +
            '<span class="momney">' +
            this.props.data.thoigianlamviec +
            ' năm' +
            '</span>' +
            '.Bạn nhận được khoản thanh toán trợ cấp thôi việc giá trị 1/2 tháng lương nhân với số năm làm việc' +
            '</div>'
          }
          buttons={[
            {
              text: 'Tiếp tục',
              handler: () => {
                this.setState({ show1: true });
              }
            }
          ]}
        />
        <IonAlert
          isOpen={this.state.show1}
          onDidDismiss={() => this.setState({ show1: false })}
          header={'Thông báo'}
          message={
            '<div>Tổng số tiền NLĐ được nhận trợ câp thôi việc cho DN (đơn vị) chi trả: </div>' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.tiennhanduoc)) +
            ' năm' +
            '<span>'
          }
          buttons={[
            {
              text: 'Tiếp tục',
              handler: () => {
                this.setState({ show3: true });
              }
            }
          ]}
        />
        <IonAlert
          isOpen={this.state.show3}
          onDidDismiss={() => this.setState({ show3: false })}
          header={'Thông báo'}
          message={
            '<div>Thời gian bạn được DN (đơn vị) đóng BH thất nghiệp là: ' +
            '<span class="momney">' +
            parseInt(this.props.data.sonamdongbaohiem) +
            ' năm' +
            '<span>' +
            '</div>' +
            '<div>Căn cứ theo quy định thì bạn đủ điều kiện nhận được quyền lợi trợ cấp thôi việc<div>'
          }
          buttons={[
            {
              text: 'Tiếp tục',
              handler: () => {
                this.setState({ show4: true });
              }
            }
          ]}
        />
        <IonAlert
          isOpen={this.state.show4}
          onDidDismiss={() => this.setState({ show4: false })}
          header={'Thông báo'}
          message={
            '<div>Thời gian bạn được DN (đơn vị) đóng BH thất nghiệp là: ' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.tiennhanduoc)) +
            ' năm' +
            '<span>' +
            '</div>' +
            '<div class="popup-note">Ghi chú: khoản trợ cấp này 100% do DN, đơn vị chi trả cho NLD. Bên BHXH đã hỗ trợ chi trả trong phần trợ cấp thất nghiệp thời gian NLĐ đóng BH thất nghiệp<div>'
          }
          buttons={['Quay về']}
        />
      </Layout>
    );
  }
}
Severance.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.unemployed.lostmyjob
  };
};

const mapDispatchToProps = {
  check: unemployedActions.lostmyjob
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Severance));
