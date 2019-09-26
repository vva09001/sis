// thai chết lưu
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

class StillBirth extends Component {
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
        title={t('Trong thời gian nghỉ trươc khi sinh, thai bị chết lưu')}
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
            <div>
              <p>{t('Thời điểm bạn khám thai')}</p>
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
              <p>{t('Số lượng thai chết')}</p>
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
            'Tổng số tiền được nhận: ' +
            '<span class="momney">' +
            currency(parseInt(this.props.data.tiennhanduoc)) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Thời gian nghỉ' +
            '</div>' +
            '<div>' +
            'Theo quy định BHXH là, cứ mỗi 01 thai chết lưu, LĐ nữ được nghỉ dưỡng 50 ngày tính từ ngày khám phát hiện thai chết lưu' +
            '</div>' +
            '<div>' +
            'Đối với trường hợp của bạn, ngoài thời gian đã được nghỉ tính từ lúc bắt đầu nghỉ thai sản đến lúc khám phát hiện thai chết lưu, còn được nghỉ tiếp ' +
            this.props.data.songaynghi +
            ' ngày nữa để hồi phục sức khỏe trước khi đi làm trở lại' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
StillBirth.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.childbirth.stillBirth
  };
};

const mapDispatchToProps = {
  check: childbirthActions.stillBirth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(StillBirth));
