//kiểm tra quyền lợi bạn nhờ mang thai hộ

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonNumber, ButtonDate } from 'components/common';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import PropTypes from 'prop-types';
import { surrogacyActions } from '../../store/actions';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
class ThankSurrogacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      deathDay: '',
      deathMonth: '',
      deathYear: '',
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
      deathDay,
      deathMonth,
      deathYear,
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
      deathDay === '' ||
      deathMonth === '' ||
      deathYear === ''
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
      deathDate: {
        day: deathDay,
        month: deathMonth,
        year: deathYear
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
    if (e.target.value === 'true' && e.target.checked) {
      this.setState({
        check2: false,
        check1: !this.state.check1,
        type: true
      });
    }
    if (e.target.value === 'false' && e.target.checked) {
      this.setState({
        check1: false,
        check2: !this.state.check2,
        type: false
      });
    }
  };
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Bạn là người nhờ mang thai hộ')}
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
              <p>{t('thời điểm nhận con')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Thời điểm cuối cùng nghỉ chế độ')}</p>
              <ButtonDate
                pickDay={e => this.setState({ endDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ endMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ endYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div className="btn-number">
              <p>{t('Bạn ở tình trạng sinh bình thường')}</p>
              <p>{t('Số lượng con sinh')}</p>
              <ButtonNumber changeNumber={e => this.setState({ qty: e.target.value })} />
            </div>
            <div>
              <p>{t('bạn không được may mắn')}</p>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value="true"
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check1}
                />
                <p>Các con đều chết dưới 60 ngày tuổi</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value="false"
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check2}
                />
                <p>Các con đều chết sau 60 ngày tuổi</p>
              </div>
            </div>
            <div>
              <p>{t('là một sự tế nhị')}</p>
              <ButtonDate
                pickDay={e => this.setState({ deathDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ deathMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ deathYear: moment(e.target.value).format('YYYY') })}
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
            parseInt(this.props.data.tongtien) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'Trong đó tiền thai sản: ' +
            '<span class="momney">' +
            parseInt(this.props.data.tienthaisan) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'tiền trợ cấp: ' +
            '<span class="momney">' +
            parseInt(this.props.data.tientrocap) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Thời gian nghỉ' +
            '</div>' +
            '<div>' +
            'Bạn nghỉ trước thời điểm sinh là ' +
            this.props.data.sothangtruocthoidiemsinh +
            ' ngày' +
            '</div>' +
            '<div>' +
            ' + Căn cứ thông tin sinh con,giao con, căn cứ theo qu định' +
            '</div>' +
            '<div>' +
            'Số ngày nghỉ còn lại của bạn là: ' +
            this.props.data.sothangconlai +
            '</div>' +
            '<div>' +
            '(Ghi chú:   theo quy định phải, quyền lợi của bạn tính theo tổng số ngày nghỉ chứ không phải tính theo đơn vị thời gian tháng như các quyền khác)' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
ThankSurrogacy.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.surrogacy.thanksurrogacy
  };
};

const mapDispatchToProps = {
  check: surrogacyActions.thanksurrogacy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ThankSurrogacy));
