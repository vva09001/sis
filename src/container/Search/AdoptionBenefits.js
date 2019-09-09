//kiểm tra quyền lợi con nuôi
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ButtonDate from 'components/common/ButtonDate';
import ButtonNumber from 'components/common/ButtonNumber';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ContentTitle from 'container/Common/ContentTitle';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import { adopetedActions } from '../../store/actions';
import { connect } from 'react-redux';

class AdoptionBenefits extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { startDay, startMonth, startYear, endDay, endMonth, endYear } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === ''
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
        cardName="contentBoder"
        title={t('Quyền lợi hưởng BHXH – Con nuôi')}
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
          <p className="font-12">{t('theo quy định lao động')}</p>
          <div className="form">
            <div className="numberChildren">
              <p>{t('Số tháng tuổi con nuôi')}</p>
              <ButtonNumber />
            </div>
            <div>
              <p>{t('Thời điểm bắt đầu nghỉ')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Thời điểm nghỉ cuối cùng của bạn')}</p>
              <ButtonDate
                pickDay={e => this.setState({ endDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ endMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ endYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div className="numberChildren">
              <p>{t('Số lượng con nuôi')}</p>
              <ButtonNumber />
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
            parseInt(this.props.data.tongtien) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div>' +
            ' Trong đó : tiền thai sản:' +
            '<span class="momney">' +
            parseInt(this.props.data.tienthaisan) +
            ' VNĐ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'tiền trợ cấp: ' +
            '<span class="momney">' +
            parseInt(this.props.data.tientrocap) +
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
            'Căn cứ theo quy định và tháng tuổi con nuôi khi bạn nhận xác định được thời gian bạn được nghỉ chế độ là ' +
            this.props.data.sothangnghi +
            ' tháng' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
AdoptionBenefits.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.adoptedChild.adoptedChild
  };
};

const mapDispatchToProps = {
  check: adopetedActions.adopted
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(AdoptionBenefits));
