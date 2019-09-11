// kiểm tra quyền lọi bệnh nghề nghiệp

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { IonInput } from '@ionic/react';
import { ButtonDate } from 'components/common';
import { PopupSuccess } from 'components/common';
import { currency } from 'utils/currency';
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
      money: '',
      check1: false,
      check2: false,
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const { startDay, startMonth, startYear, percent, money } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      percent === '' ||
      money === ''
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
        title={t('Quyền lợi hưởng BHXH Tai bệnh nghề nghiệp')}
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
              <p>{t('Thời điểm bạn bắt đầu nghỉ việc để điều trị bệnh nghề nghiệp')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div className="input-sick">
              <p>
                {t(
                  'Tiền lương thực tế hàng tháng ghi trong hợp đồng lao động mà DN(đơn vị) đang trả cho bạn đ/tháng'
                )}
              </p>
              <IonInput
                placeholder="Tiền"
                type="number"
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
                type="number"
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
            'Tổng số tiền được nhận từ phía BHXH chi trả: ' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.baohiemchitra)) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'Trong đó : Trợ cấp hàng tháng: ' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.trocaphangthang)) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'Trợ cấp một lần: ' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.trocap1lan)) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Tổng số tiền trợ cấp DN (đơn vị) bạn có trách nghiệm chi trả cho bạn: ' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.doannghiechitra)) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'Ngoài số tiền trợ cấp này, DN đơn vị bạn có trách nghiệm thanh toán đầy đủ tiền lươn cho bạn trong thời gian điều trị, cũng như những chi phí điều trị không nằm trong danh mục chi trả của BHYT' +
            '</div>'
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
    data: state.occupationalDisease.sick
  };
};

const mapDispatchToProps = {
  check: occupationalDisease.sick
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Accident));
