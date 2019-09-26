//trường hợp con chết nghỉ sớm hơn chỉ định bác sỹ

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonNumber, ButtonDate, CheckBook } from 'components/common';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import { currency } from 'utils/currency';
import PropTypes from 'prop-types';
import { childbirthActions } from '../../store/actions';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class LeaveEarlierThanIndicated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      qty: '',
      num: '',
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
      birthDay,
      birthMonth,
      birthYear,
      endDay,
      endMonth,
      endYear,
      qty
    } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      birthDay === '' ||
      birthMonth === '' ||
      birthYear === '' ||
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
      birthDate: {
        day: birthDay,
        month: birthMonth,
        year: birthYear
      },
      endDate: {
        day: endDay,
        month: endMonth,
        year: endYear
      },
      qty: qty
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
          'Trường hợp con chết sau khi sinh, (mà trước đó nghỉ sinh sớm hơn theo quy định BHXH theo chỉ định của Bác sỹ)'
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
              'Bạn bổ sung thêm thông tin theo quy định của BHXH để Ví kiểm tra quyền lợi và cung cấp dịch vụ hỗ trợ thủ tục cho bạn nhanh và chính xác nhất'
            )}
          </ContentTitle>
          <div className="form">
            <div>
              <p>{t('thời điểm bắt đầu nghỉ')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div className="numberChildren">
              <p>{t('Thời điểm bạn sinh con')}</p>
              <ButtonDate
                pickDay={e => this.setState({ birthDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ birthMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ birthYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Thời điểm cuối cùng nghỉ chế độ sinh con')}</p>
              <ButtonDate
                pickDay={e => this.setState({ endDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ endMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ endYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div className="numberChildren">
              <p>{t('Số lượng con khi sinh')}</p>
              <ButtonNumber changeNumber={e => this.setState({ qty: e.target.value })} />
            </div>
            <div className="numberChildren">
              <p>{t('Số lượng con còn sống')}</p>
              <ButtonNumber changeNumber={e => this.setState({ num: e.target.value })} />
            </div>
            <div className="numberChildren">
              <p>{t('Số lượng con đã chết')}</p>
              <ButtonNumber changeNumber={e => this.setState({ num: e.target.value })} />
            </div>
            <div>
              <p>{t('Khi con chết trong khoảng thời gian nào')}</p>
              <CheckBook labelName="Dưới 2 tháng tuổi" />
              <CheckBook labelName="Trong khoảng thời gian từ 2 tháng đến 6 tháng" />
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
            currency(parseInt(this.props.data.tongtien)) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div>' +
            ' Trong đó : tiền thai sản:' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.tienthaisan)) +
            ' VNĐ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'tiền trợ cấp: ' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.tientrocap)) +
            ' VNĐ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Thời gian nghỉ' +
            '</div' +
            '<div>' +
            'Theo quy định BHXH :' +
            '</div>' +
            '<div>' +
            'Con dưới 02 tháng tuổi bị chết thị mẹ được nghỉ việc 04 tháng tính từ ngày sinh con' +
            '</div>' +
            '<div>' +
            'Con dưới 02 tháng tuổi bị chết thị mẹ được nghỉ việc 04 tháng tính từ ngày sinh con' +
            '</div>' +
            '<div>' +
            'Cả hai trường hợp trên theo quy định thời gian nghỉ việc không vượt quá 06 tháng (bao gồm tính cả các tháng nghỉ việc trước khi sinh)' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
LeaveEarlierThanIndicated.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.childbirth.maternityLeave
  };
};

const mapDispatchToProps = {
  check: childbirthActions.maternityLeave
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(LeaveEarlierThanIndicated));
