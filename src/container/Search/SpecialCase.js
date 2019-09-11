//sinh con thông thường nhưng vào trường hợp đặc biệt

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonNumber, ButtonDate } from 'components/common';
import { PopupSuccess } from 'components/common';
import { currency } from 'utils/currency';
import moment from 'moment';
import PropTypes from 'prop-types';
import { childbirthActions } from '../../store/actions';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class SpecialCase extends Component {
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
        title={t('Sinh con thông thường, nhưng vào trường hợp đặc biệt')}
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
              <p>{t('Số lượng con sinh ra')}</p>
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
            'tiền trợ cấp thai sản: ' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.tientrocap)) +
            ' VNĐ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'Thời gian được nghỉ sinh theo quy định ' +
            '<span class="momney">' +
            this.props.data.sothangdongbaohiem +
            ' tháng' +
            '</span>' +
            '</br>' +
            'Bạn nghỉ sinh trước thời điểm là ' +
            '<span class="momney">' +
            this.props.data.sothangtruocthoidiemsinh +
            ' tháng' +
            '</span>' +
            '</br>' +
            'Nên số tháng còn lại bạn được nghỉ tiếp sau sinh là ' +
            '<span class="momney">' +
            this.props.data.sothangconlai +
            ' tháng' +
            '</span>' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
SpecialCase.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.childbirth.specailBirth
  };
};

const mapDispatchToProps = {
  check: childbirthActions.specialBirth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SpecialCase));
