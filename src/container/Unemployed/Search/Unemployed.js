// kiểm tra quyền lợi thất nghiệp

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonDate } from 'components/common';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import { currency } from 'utils/currency';
import PropTypes from 'prop-types';
import { unemployedActions } from '../../../store/actions';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class Unemployed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      type: '',
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const { startDay, startMonth, startYear, type } = this.state;

    if (startDay === '' || startMonth === '' || startYear === '' || type === '') {
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
    if (e.target.value === '1' && e.target.checked) {
      this.setState({
        check2: false,
        check3: false,
        check4: false,
        check1: !this.state.check1,
        type: 1
      });
    }
    if (e.target.value === '2' && e.target.checked) {
      this.setState({
        check1: false,
        check3: false,
        check4: false,
        check2: !this.state.check2,
        type: 2
      });
    }
    if (e.target.value === '3' && e.target.checked) {
      this.setState({
        check1: false,
        check2: false,
        check4: false,
        check3: !this.state.check3,
        type: 3
      });
    }
    if (e.target.value === '4' && e.target.checked) {
      this.setState({
        check1: false,
        check2: false,
        check3: false,
        check4: !this.state.check4,
        type: 4
      });
    }
  };
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH Trợ cấp thất nghiệp')}
        cardName="contentBoder"
        btnColor="primary"
        _onClick={this.send}
        loading={this.state.loading}
        btnName={t('finish')}
      >
        <div className="cardInfo">
          <ContentTitle>
            {t(
              'Bạn bổ sung thêm thông tin theo quy định của BHXH để Ví kiểm tra quyền lợi và cung cấp dịch vụ hỗ trợ thủ tục cho bạn nhanh và chính xác nhất'
            )}
          </ContentTitle>
          <div className="form">
            <div>
              <p>
                {t('Thời điểm bạn bắt đầu nghỉ việc do chấm dứt hợp đồng lao động tại DN (đơn vị)')}
              </p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Loại Hợp đồng lao động bạn đã ký với DN (đơn vi)')}</p>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={1}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check1}
                />
                <p>HĐ lao động xác định thời hạn</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={2}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check2}
                />
                <p>HĐ lao động không xác định thời hạn</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={3}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check3}
                />
                <p>HĐ lao động theo mùa vụ</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={4}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check4}
                />
                <p>HĐ lao động theo vụ việc</p>
              </div>
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
            'Tổng số tiền được nhận trợ cấp thất nghiệp từ phía BHXH chi trả: ' +
            '<span class="momney">' +
            currency(this.props.data.tiennhanduoc) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'Tương đương với ' +
            '<span class="momney">' +
            parseInt(this.props.data.sothangduoctrocap) +
            ' tháng' +
            '</span>' +
            ' được trợ cấp thất nghiệp' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
Unemployed.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.unemployed.unemployed
  };
};

const mapDispatchToProps = {
  check: unemployedActions.unemployed
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Unemployed));
