//người tra cứu là nam giới
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonDate, CardID } from 'components/common';
import { IonSelect, IonSelectOption } from '@ionic/react';
import moment from 'moment';
import { currency } from 'utils/currency';
import { PopupSuccess } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { childbirthActions } from '../../store/actions';
import { connect } from 'react-redux';
class SearcherTheMale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startMonth: '',
      startYear: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      qty: 1,
      type: '',
      type1: false,
      type2: false,
      check: '',
      check1: false,
      check2: false,
      id: '',
      day: '',
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
      qty,
      day,
      type,
      check,
      id
    } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === '' ||
      day === '' ||
      type === '' ||
      birthDay === '' ||
      birthMonth === '' ||
      birthYear === '' ||
      check === '' ||
      id === ''
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
      qty: qty,
      type: type,
      check: check,
      id: id,
      day: day
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
        type2: false,
        type1: !this.state.check1,
        type: true
      });
    }
    if (e.target.value === 'false' && e.target.checked) {
      this.setState({
        type1: false,
        type2: !this.state.check2,
        type: false
      });
    }
  };
  checkBox1 = e => {
    if (e.target.value === 'true' && e.target.checked) {
      this.setState({
        check2: false,
        check1: !this.state.check1,
        check: true
      });
    }
    if (e.target.value === 'false' && e.target.checked) {
      this.setState({
        check1: false,
        check2: !this.state.check2,
        check: false
      });
    }
  };
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Người tra cứu quyền lợi này là Nam giới, đang tra cứu quyền lợi BHXH trên chính App cài đặt trên điện thoại của mình'
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
              'Bạn bổ xung thêm thông tin theo quy định của BHXH để Ví kiểm tra quyền lợi và cung cấp dịch vụ hỗ trợ thủ tục cho bạn nhanh và chính xác nhất'
            )}
          </ContentTitle>
          <div className="form">
            <div className="numberChildren">
              <span>{t('Ngày nghỉ hàng tuần của bạn')}</span>
              <IonSelect
                placeholder="Ngày nghỉ"
                interface="action-sheet"
                onIonChange={e => this.setState({ day: parseInt(e.target.value) })}
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
              <p>{t('Ngày bắt đầu nghỉ hưởng chế độ')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Ngày cuối cùng nghỉ hưởng chế độ')}</p>
              <ButtonDate
                pickDay={e => this.setState({ endDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ endMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ endYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Ngày vợ sinh con')}</p>
              <ButtonDate
                pickDay={e => this.setState({ birthDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ birthMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ birthYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <div>
                <p>{t('Phương thức sinh con')}</p>
                <div className="checkbox">
                  <input
                    type="checkBox"
                    value="true"
                    onChange={e => this.checkBox(e)}
                    checked={this.state.type1}
                  />
                  <p>Phẫu thuật</p>
                </div>
                <div className="checkbox">
                  <input
                    type="checkBox"
                    value="false"
                    onChange={e => this.checkBox(e)}
                    checked={this.state.type2}
                  />
                  <p>Sinh con thường</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>{t('Vợ mang thai bao nhiêu tháng thì sinh con')}</p>
                <div className="checkbox">
                  <input
                    type="checkBox"
                    value="true"
                    onChange={e => this.checkBox1(e)}
                    checked={this.state.check1}
                  />
                  <p>Trên 8 tháng mang thai</p>
                </div>
                <div className="checkbox">
                  <input
                    type="checkBox"
                    value="false"
                    onChange={e => this.checkBox1(e)}
                    checked={this.state.check2}
                  />
                  <p>Dưới 8 tháng mang thai</p>
                </div>
              </div>
            </div>
            <div className="input">
              <p>{t('Số chứng minh thư hoặc thẻ căn cước của vợ')}</p>
              <CardID changeID={e => this.setState({ id: parseInt(e.target.value) })} />
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
            '<div>' +
            'Số tháng đóng bảo hiểm ' +
            '<span class="momney">' +
            this.props.data.sothangdongbaohiem +
            ' tháng' +
            '</span>' +
            '.Nên số ngày bạn được nghỉ tiếp sau sinh là ' +
            '<span class="momney">' +
            this.props.data.thoigiannghi +
            ' ngày' +
            '</span>' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
SearcherTheMale.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.childbirth.menSearchParticipation
  };
};

const mapDispatchToProps = {
  check: childbirthActions.menSearchParticipation
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SearcherTheMale));
