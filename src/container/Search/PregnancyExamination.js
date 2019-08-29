// kiểm tra quyền lợi khám thai
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { ButButtonDay } from 'components/common';
import { IonInput } from '@ionic/react';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { maternityActions } from '../../store/actions';
import { connect } from 'react-redux';

class PregnancyExamination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDay1: '',
      fromMonth1: '',
      toDay1: '',
      toMonth1: '',
      fromDay2: '',
      fromMonth2: '',
      toDay2: '',
      toMonth2: '',
      loading: false,
      mess: '',
      show: false
    };
  }
  send = () => {
    const {
      fromDay1,
      fromMonth1,
      toDay1,
      toMonth1,
      fromDay2,
      fromMonth2,
      toDay2,
      toMonth2
    } = this.state;
    if (
      fromDay1 === '' ||
      fromMonth1 === '' ||
      fromDay2 === '' ||
      fromMonth2 === '' ||
      toDay1 === '' ||
      toDay2 === '' ||
      toMonth1 === '' ||
      toMonth2 === ''
    ) {
      this.setState({ mess: 'Từ ngày đến ngày là bắt buộc không được để chống' });
      return;
    }
    this.setState({ loading: true, mess: '' });
    const value = {
      date1: {
        from: {
          day: this.state.fromDay1,
          month: this.state.fromMonth1
        },
        to: {
          day: this.state.toDay1,
          month: this.state.toMonth1
        }
      },
      date2: {
        from: {
          day: this.state.fromDay2,
          month: this.state.fromMonth2
        },
        to: {
          day: this.state.toDay2,
          month: this.state.toMonth2
        }
      }
    };
    this.props.check(value, this.success, this.fail);
  };
  success = () => {
    this.setState(
      {
        loading: false,
        show: true
      },
      () => {
        // history.push('/homepage');
      }
    );
  };
  fail = mess => {
    this.setState(
      {
        loading: false,
        mess: mess
      },
      () => {
        //console.log('fail');
      }
    );
  };
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Kiểm tra quyền lợi')}
        content={t('bạn hãy cũng cấp')}
        btnColor="primary"
        _onClick={this.send}
        loading={this.state.loading}
        btnName={t('finish')}
      >
        <div className="cardInfo">
          <p className="text-primary">{t('thời gian nào')}</p>
          <div className="form">
            <div className="text-input">
              <IonInput inputmode="text" />
            </div>
            <p>{t('Lần nghỉ 1 ngày đi khám')}</p>
            <div className="day-wapper">
              <span>{t('Từ ngày')}</span>
              <ButButtonDay
                pickDay={e => this.setState({ fromDay1: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ fromMonth1: moment(e.target.value).format('M') })}
              />
              <span className="margin-left">{t('Đến ngày')}</span>
              <ButButtonDay
                pickDay={e => this.setState({ toDay1: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ toMonth1: moment(e.target.value).format('M') })}
              />
            </div>
            <p>{t('Lần nghỉ 2 ngày đi khám')}</p>
            <div className="day-wapper">
              <span>{t('Từ ngày')}</span>
              <ButButtonDay
                pickDay={e => this.setState({ fromDay2: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ fromMonth2: moment(e.target.value).format('M') })}
              />
              <span className="margin-left">{t('Đến ngày')}</span>
              <ButButtonDay
                pickDay={e => this.setState({ toDay2: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ toMonth2: moment(e.target.value).format('M') })}
              />
            </div>
            <p>{t('Tình trạng khám thai')}</p>
            <div className="text-input">
              <IonInput inputmode="text" />
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
            '<p class="text-bule">Kết quả quyền lợi BHXH - Khám thai </br> được hưởng của bạn là<p>' +
            '<p class="momney">' +
            parseFloat(this.props.data.value1) +
            ' VNĐ' +
            '</p>' +
            '<p class="note">(lưu ý: các ngày nghỉ làm việc đi khám của bạn vẫn được DN(đợn vị) trả đủ lương 100% theo luật lao động)</p>'
          }
        />
      </Layout>
    );
  }
}

PregnancyExamination.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.maternity.checkBenefits
  };
};

const mapDispatchToProps = {
  check: maternityActions.antenatalexamination
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PregnancyExamination));
