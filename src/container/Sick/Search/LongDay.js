//kiểm tra quyền lợi ốm đau dài ngày

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { IonInput } from '@ionic/react';
import { ButtonDate } from 'components/common';
import { currency } from 'utils/currency';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import PropTypes from 'prop-types';
import { sickActions } from '../../../store/actions';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
class ShortDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      disease: '',
      type: '',
      check1: false,
      check2: false,
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const { startDay, startMonth, startYear, endDay, endMonth, endYear, disease } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === '' ||
      disease === ''
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
      disease: disease
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
        title={t('Kiểm tra quyền lợi hưởng BHXH Ốm đau dài ngày')}
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
              <p>{t('Ngày bắt đầu nghỉ hưởng chế độ ốm đau')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Ngày cuối cùng nghỉ hưởng chế độ ốm đau')}</p>
              <ButtonDate
                pickDay={e => this.setState({ endDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ endMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ endYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div className="input-sick">
              <p>
                {t(
                  'Bạn có thể chữa trị dài ngày thuộc tên bệnh gì trong danh mục bệnh dài ngày của Bộ y tế'
                )}
              </p>
              <IonInput
                placeholder="Tên bệnh"
                onIonChange={e => this.setState({ disease: e.target.value })}
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
            currency(this.props.data.tiennhanduoc) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Sự liên quan thời gian: ' +
            '</div>' +
            '<div>' +
            'Thời gian Bạn tham gia đóng BHXH ' +
            '<span class="momney">' +
            parseInt(this.props.data.sothangdongbaohiem) +
            ' tháng' +
            '</span>' +
            '</div>' +
            '<div>'
          }
        />
      </Layout>
    );
  }
}
ShortDay.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.sick.sickLongDay
  };
};

const mapDispatchToProps = {
  check: sickActions.sickLongDay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShortDay));
