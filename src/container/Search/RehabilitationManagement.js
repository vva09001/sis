//kiểm tra quản lý phục dưỡng
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonNumber, ButtonDate } from 'components/common';
import { PopupSuccess } from 'components/common';
import { currency } from 'utils/currency';
import moment from 'moment';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { maintenanceActions } from '../../store/actions';
import { connect } from 'react-redux';

class RehabilitationManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      kindDay: '',
      kindMonth: '',
      kindYear: '',
      backDay: '',
      backMonth: '',
      backYear: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      qty: '',
      type: '',
      check1: false,
      check2: false,
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const {
      startDay,
      startMonth,
      startYear,
      kindDay,
      kindMonth,
      kindYear,
      backDay,
      backMonth,
      backYear,
      endDay,
      endMonth,
      endYear,
      qty,
      type
    } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === '' ||
      qty === '' ||
      type === '' ||
      kindDay === '' ||
      kindMonth === '' ||
      kindYear === '' ||
      backDay === '' ||
      backMonth === '' ||
      backYear === ''
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
      kindDate: {
        day: kindDay,
        month: kindMonth,
        year: kindYear
      },
      backDate: {
        day: backDay,
        month: backMonth,
        year: backYear
      },
      endDate: {
        day: endDay,
        month: endMonth,
        year: endYear
      },
      qty: qty,
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
        check1: !this.state.check1,
        type: e.target.value
      });
    }
    if (e.target.value === '2' && e.target.checked) {
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
        title={t('Quyền lợi hưởng BHXH – Phục dưỡng phục hồi sức khỏe sau thai sản')}
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
              <p>{t('Bạn thuộc trường hợp nào')}</p>
              <div>
                <p>{t('bạn không được may mắn')}</p>
                <div className="checkbox">
                  <input
                    type="checkBox"
                    value="1"
                    onChange={e => this.checkBox(e)}
                    checked={this.state.check1}
                  />
                  <p>Trong quá trình sinh con phải phẫu thuật</p>
                </div>
                <div className="checkbox">
                  <input
                    type="checkBox"
                    value="2"
                    onChange={e => this.checkBox(e)}
                    checked={this.state.check2}
                  />
                  <p>Thuộc trường hợp khác</p>
                </div>
              </div>
            </div>
            <div className="numberChildren">
              <span>{t('Số con sinh')}</span>
              <ButtonNumber changeNumber={e => this.setState({ qty: e.target.value })} />
            </div>
            <div>
              <p>{t('Thời điểm diễn ra một trong 03 trường hợp nêu trên.')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Thời điểm trở lại làm việc sau chế độ nghỉ thai sản')}</p>
              <ButtonDate
                pickDay={e => this.setState({ kindDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ kindMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ kindYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Thời điểm bắt đầu nghỉ dưỡng sức')}</p>
              <ButtonDate
                pickDay={e => this.setState({ backDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ backMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ backYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Thời điểm cuối cùng nghỉ dưỡng sức')}</p>
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
            currency(parseInt(this.props.data.tiennhanduoc)) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Thời gian được nghỉ: ' +
            '<span class="momney">' +
            parseInt(this.props.data.songayduocnghi) +
            ' ngày' +
            '</span>' +
            '</div>' +
            '<div>'
          }
        />
      </Layout>
    );
  }
}
RehabilitationManagement.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.maintenance.maintenance
  };
};

const mapDispatchToProps = {
  check: maintenanceActions.maintenance
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(RehabilitationManagement));
