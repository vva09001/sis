// kiểm tra tai nạn lao động

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { IonInput } from '@ionic/react';
import { ButtonDate } from 'components/common';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import PropTypes from 'prop-types';
import { occupationalDisease } from '../../../store/actions';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class Accident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      percent: '',
      type: '',
      money: '',
      check1: false,
      check2: false,
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const { startDay, startMonth, startYear, percent, type, money } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      percent === '' ||
      money === '' ||
      type === ''
    ) {
      this.setState({ mess: 'Các trường là bắt buộc không được để trống' });
      return;
    }
    this.setState({ loading: true, mess: '' });
    const params = {
      accidentDate: {
        day: startDay,
        month: startMonth,
        year: startYear
      },
      percent: percent,
      type: type,
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
  checkBox = e => {
    if (e.target.value === '1' && e.target.checked) {
      this.setState({
        check2: false,
        check1: !this.state.check1,
        type: 1
      });
    }
    if (e.target.value === '2' && e.target.checked) {
      this.setState({
        check1: false,
        check2: !this.state.check2,
        type: 2
      });
    }
  };
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH Tai nạn lao động')}
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
              <p>{t('Thời điểm bạn bị tai nạn lao động bắt đầu nghỉ việc để điều trị')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Bạn bị tai nạn lao động thuộc trường hợp nào.')}</p>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={1}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check1}
                />
                <p>Bị tai nạn lao động không phải do lỗi của bạn</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={2}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check2}
                />
                <p>Bị tai nạn lao động do lỗi của bạn</p>
              </div>
            </div>
            <div className="input-sick">
              <p>
                {t(
                  'Tiền lương thực tế hàng tháng ghi trong hợp đồng lao động mà DN(đơn vị) đang trả cho bạn đ/tháng'
                )}
              </p>
              <IonInput
                placeholder="Tiền"
                onIonChange={e => this.setState({ money: parseInt(e.target.value) })}
              />
            </div>
            <div className="input-sick">
              <p>
                {t(
                  'Tỷ lệ suy giảm khả năng lao động của bạn theo đánh Hội đồng giám định y khoa cấp tỉnh/thành phố %'
                )}
              </p>
              <IonInput
                placeholder="Tỷ lệ"
                onIonChange={e => this.setState({ percent: parseInt(e.target.value) })}
              />
            </div>
            <div className="mess-error">
              <p>{this.state.mess}</p>
            </div>
          </div>
        </div>
        <PopupSuccess
          isOpen={this.state.show}
          setShowAlert={() => this.setState({ show: false })}
          message={
            '<div class="text-bule">' +
            'Tổng số tiền được nhận: ' +
            '<span class="momney">' +
            parseInt(this.props.data.tiennhanduoc) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Sự liên quan thời gian: ' +
            '</div>' +
            '<div>' +
            'Thời gian Bạn tham gia đóng BHXH ' +
            '<span class="momney">' +
            parseInt(this.props.data.sothangdongbaohiem) +
            ' tháng' +
            '</span>' +
            '</div>' +
            '<div>'
          }
        />
      </Layout>
    );
  }
}
Accident.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.occupationalDisease.accident
  };
};

const mapDispatchToProps = {
  check: occupationalDisease.accident
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Accident));
