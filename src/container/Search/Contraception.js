// kiểm tra quyền lợi tránh thai

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonDate } from 'components/common';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import PropTypes from 'prop-types';
import { contraceptionActions } from '../../store/actions';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class Contraception extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check1: false,
      check2: false,
      type: '',
      startDay: '',
      startMonth: '',
      startYear: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const { startDay, startMonth, startYear, endDay, endMonth, endYear, type } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === '' ||
      type === ''
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
      type: type
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
    if (e.target.value === 'Tránh thai' && e.target.checked) {
      this.setState({
        check2: false,
        check1: !this.state.check1,
        type: e.target.value
      });
    }
    if (e.target.value === 'Triệt sản' && e.target.checked) {
      this.setState({
        check1: false,
        check2: !this.state.check2,
        type: e.target.value
      });
    }
  };
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Quyền lợi hưởng BHXH Tránh thai, triệt sản')}
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
              <p>{t('Bạn thuộc trường hợp nào')}</p>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value="Tránh thai"
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check1}
                />
                <p>Tránh Thai</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value="Triệt sản"
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check2}
                />
                <p>Triệt Sản</p>
              </div>
            </div>
            <div>
              <p>{t('thời điểm bắt đầu nghỉ')}</p>
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
            parseInt(this.props.data.tienthaisan) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Thời gian nghỉ' +
            '</div>' +
            '<div>' +
            'Trường hợp của bạn là ' +
            this.props.data.tuantuoi +
            '</div>' +
            '<div>' +
            'Nên theo quy định bạn được nghỉ ' +
            this.props.data.songaynghi +
            ' ngày tính từ ngày bắt đầu nghỉ việc thực hiện tránh thai, triệt sản' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
Contraception.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.contraception.contraception
  };
};

const mapDispatchToProps = {
  check: contraceptionActions.contraception
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Contraception));
