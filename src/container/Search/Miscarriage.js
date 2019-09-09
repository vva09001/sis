// kiểm tra quyền lợi sảy thai

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonDate, ButtonNumber } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import { miscarriageActions } from '../../store/actions';
import { connect } from 'react-redux';

class Miscarriage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      qty: '',
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const { startDay, startMonth, startYear, endDay, endMonth, endYear, qty } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === '' ||
      qty === ''
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
      qty
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
        cardName="contentBoder"
        title={t(
          'Quyền lợi hưởng BHXH – Sảy thai, nạo hút thai, phá thai bệnh lý, thai chết lưu trong thời điểm chưa phải là thời gian nghỉ sinh con'
        )}
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
              <p>{t('thời điểm bắt đầu nghỉ tại DN')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('thời điểm cuối cùng')}</p>
              <ButtonDate
                pickDay={e => this.setState({ endDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ endMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ endYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div className="numberChildren">
              <p>{t('Thai  đã được bao nhiêu tuần tuổi')}</p>
              <ButtonNumber changeNumber={e => this.setState({ qty: e.target.value })} />
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
            'Tổng số tiền được nhận:' +
            '<span class="momney">' +
            parseInt(this.props.data.tiennhanduoc) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Thời gian nghỉ' +
            '</div>' +
            '<div>' +
            'Căn cứ theo quy định và tháng tuổi thai bạn kê khai và quy định cảu luật BHXH, bạn ở trong trường hợp có ' +
            this.props.data.tuantuoi +
            ' tuần tuổi.' +
            ' Nên bạn được nghỉ việc hồi phục sức khỏe là ' +
            this.props.data.songaynghi +
            ' ngày' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
Miscarriage.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.miscarriage.miscarriage
  };
};

const mapDispatchToProps = {
  check: miscarriageActions.miscarriage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Miscarriage));
