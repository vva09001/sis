// kiểm tra quản lý hưởng phụ cấp

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

class Allowance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      percent: '',
      check1: false,
      check2: false,
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const { startDay, startMonth, startYear, percent, endDay, endMonth, endYear } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === '' ||
      percent === ''
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
      percent: percent,
      endDate: {
        day: endDay,
        month: endMonth,
        year: endYear
      }
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
          'Quyền lợi hưởng BHXH - Phụ cấp cho người chăm sóc NLĐ bị tai nạn lao động, bệnh nghề nghiệp '
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
              <p>
                {t(
                  'Thời điểm bạn bắt đầu nghỉ việc để điều trị do tai nạn lao động, bệnh nghề nghiệp'
                )}
              </p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>
                {t(
                  'Thời điểm cuối cùng mà bạn điều trị ổn định (sau khi điều trị bệnh lần 1, hoặc tái phát, hoặc sau dưỡng sức phục hồi sức khỏe)'
                )}
              </p>
              <ButtonDate
                pickDay={e => this.setState({ endDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ endMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ endYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div className="input-sick">
              <p>
                {t(
                  'Tỷ lệ suy giảm khả năng lao động của bạn theo đánh Hội đồng giám định y khoa cấp tỉnh/thành phố %'
                )}
              </p>
              <IonInput
                type="number"
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
            'Tổng số tiền được nhận từ phía BHXH chi trả hàng tháng: ' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.tongtiennhanduoc)) +
            ' vnđ' +
            '</span>' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
Allowance.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.occupationalDisease.allowance
  };
};

const mapDispatchToProps = {
  check: occupationalDisease.allowance
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Allowance));
