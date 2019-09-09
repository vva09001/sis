//kiểm tra quyền lợi ốm đau ngắn ngày

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { IonSelect, IonSelectOption } from '@ionic/react';
import { ButtonDate } from 'components/common';
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
      days: 2,
      type: '',
      check1: false,
      check2: false,
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const { startDay, startMonth, startYear, endDay, endMonth, endYear, days, type } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === '' ||
      days === '' ||
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
      days: days,
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
        title={t('Kiểm tra quyền lợi hưởng BHXH Ốm đau ngắn ngày')}
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
              <p>{t('Ngày nghỉ hàng tuần của Bạn là ngày nào ?')}</p>
              <IonSelect
                placeholder="Ngày nghỉ"
                interface="action-sheet"
                onIonChange={e => this.setState({ days: e.target.value })}
              >
                <IonSelectOption value={2}>Thứ hai</IonSelectOption>
                <IonSelectOption value={3}>Thứ ba</IonSelectOption>
                <IonSelectOption value={4}>Thứ tư</IonSelectOption>
                <IonSelectOption value={5}>Thứ năm</IonSelectOption>
                <IonSelectOption value={6}>Thứ sáu</IonSelectOption>
                <IonSelectOption value={7}>Thứ bảy</IonSelectOption>
                <IonSelectOption value={8}>Chủ nhật</IonSelectOption>
              </IonSelect>
            </div>
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
            <div>
              <p>{t('Ốm đau trong trường hợp nào')}</p>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={true}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check1}
                />
                <p>Ốm đau trong điều kiện bình thường</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={false}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check2}
                />
                <p>Ốm đau trong điều kiện nặng nhọc, độc hại, phụ cấp khu vực từ 0,7 trở lên</p>
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
            'Tổng số tiền được nhận: ' +
            '<span class="momney">' +
            parseInt(this.props.data.tiennhanduoc) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div class="text-bule">' +
            'Thời gian nghỉ' +
            '</div>' +
            '<div>' +
            'Bạn tham gia BHXH được ' +
            '<span class="momney">' +
            parseInt(this.props.data.thoigianthamgiabhxh) +
            ' năm' +
            '</span>' +
            ',bạn ốm ' +
            this.props.data.truonghopomdau +
            ' nên theo quy định, tổng thời gian các lần nghỉ ốm ngắn hạn trong năm hiện tại mà BHXH có trách nghiệm giải quyết quyền lợi cho bạn (nếu sảy ra sự việc), được giới hạn là ' +
            '<span class="momney">' +
            parseInt(this.props.data.thoigiandcnghi) +
            ' ngày' +
            '</span>' +
            '</div>' +
            '<div>' +
            'Lần nghỉ ốm ngắn hạn của bạn đợt này là ' +
            '<span class="momney">' +
            parseInt(this.props.data.songngaynghi) +
            ' ngày.' +
            '</span>' +
            'Bạn nhớ theo dõi cộng số ngày đã nhận quyền lợi, ngày chưa nhận quyền lợi để khi cần sử dụng đến' +
            '</div>'
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
    data: state.sick.sickShortDay
  };
};

const mapDispatchToProps = {
  check: sickActions.sickShortDay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShortDay));
