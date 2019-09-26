// người tra cứu là vợ không tham gia BHXH
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { ButtonDate, CardID, ButtonNumber } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ContentTitle from 'container/Common/ContentTitle';
import moment from 'moment';
import { currency } from 'utils/currency';
import { PopupSuccess } from 'components/common';
import { childbirthActions } from '../../store/actions';
import { connect } from 'react-redux';

class NoParticipation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      qty: '',
      type: '',
      type1: false,
      type2: false,
      id: '',
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const { birthDay, birthMonth, birthYear, qty, type, id } = this.state;

    if (
      type === '' ||
      birthDay === '' ||
      birthMonth === '' ||
      birthYear === '' ||
      id === '' ||
      qty === ''
    ) {
      this.setState({ mess: 'Các trường là bắt buộc không được để trống' });
      return;
    }
    this.setState({ loading: true, mess: '' });
    const params = {
      birthDate: {
        day: birthDay,
        month: birthMonth,
        year: birthYear
      },
      qty: qty,
      type: type,
      id: id
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
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Người tra cứu là Vợ của nam giới được hưởng quyền lợi BHXH vợ sinh con. Người vợ tra cứu quyền lợi cho chồng ngay trên App điện thoại của mình'
        )}
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
            <p>{t('Ngày bạn sinh')}</p>
            <ButtonDate
              pickDay={e => this.setState({ birthDay: moment(e.target.value).format('D') })}
              pickMonth={e => this.setState({ birthMonth: moment(e.target.value).format('M') })}
              pickYear={e => this.setState({ birthYear: moment(e.target.value).format('YYYY') })}
            />
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
            <div className="numberChildren">
              <p>{t('Số con sinh')}</p>
              <ButtonNumber changeNumber={e => this.setState({ qty: parseInt(e.target.value) })} />
            </div>
            <p>{t('Số chứng minh thư hoặc thẻ căn cước của bạn')}</p>
            <div className="input">
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
            'Số ngày bạn được nghỉ tiếp sau sinh là: ' +
            '<span class="momney">' +
            this.props.data.songayduocnghi +
            ' ngày' +
            '</span>' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
NoParticipation.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.childbirth.menSearchNoParticipation
  };
};

const mapDispatchToProps = {
  check: childbirthActions.menSearchNoParticipation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(NoParticipation));
