//kiểm tra quyền lợi phục hồi sức khoe sau sinh

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonDate } from 'components/common';
import { PopupSuccess } from 'components/common';
import moment from 'moment';
import PropTypes from 'prop-types';
import { sickActions } from '../../../store/actions';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
class Recuperate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDay: '',
      startMonth: '',
      startYear: '',
      backDay: '',
      backYear: '',
      backMonth: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      type: '',
      check1: false,
      check2: false,
      check3: false,
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
      endDay,
      endMonth,
      endYear,
      type,
      backDay,
      backMonth,
      backYear
    } = this.state;

    if (
      startDay === '' ||
      startMonth === '' ||
      startYear === '' ||
      endDay === '' ||
      endMonth === '' ||
      endYear === '' ||
      type === '' ||
      backDay === '' ||
      backMonth === '' ||
      backYear === ''
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
      backDate: {
        day: backDay,
        month: backMonth,
        year: backYear
      },
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
    if (e.target.value === '1' && e.target.checked) {
      this.setState({
        check2: false,
        check3: false,
        check1: !this.state.check1,
        type: 1
      });
    }
    if (e.target.value === '2' && e.target.checked) {
      this.setState({
        check1: false,
        check3: false,
        check2: !this.state.check2,
        type: 2
      });
    }
    if (e.target.value === '3' && e.target.checked) {
      this.setState({
        check1: false,
        check2: false,
        check3: !this.state.check3,
        type: 3
      });
    }
  };
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Kiểm tra quyền lợi hưởng BHXH Phục hồi sức khỏe sau ốm')}
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
              <p>{t('Bạn ốm trong trường hợp nào ?')}</p>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={1}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check1}
                />
                <p>Ốm thông thường</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={2}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check2}
                />
                <p>Ốm phải phẫu thuật</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  value={3}
                  onChange={e => this.checkBox(e)}
                  checked={this.state.check3}
                />
                <p>Ốm dài ngày theo danh mục bệnh của Bộ y tế</p>
              </div>
            </div>
            <div>
              <p>{t('Ngày đầu tiên đi làm lại sau thời gian nghỉ ốm')}</p>
              <ButtonDate
                pickDay={e => this.setState({ backDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ backMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ backYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Ngày đầu tiền nghỉ việc hưởng chế độ phục hồi sức khỏe sau ốm đau')}</p>
              <ButtonDate
                pickDay={e => this.setState({ startDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ startMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ startYear: moment(e.target.value).format('YYYY') })}
              />
            </div>
            <div>
              <p>{t('Ngày cuối cùng nghỉ việc hưởng chế độ phục hồi sức khỏe sau ốm đau')}</p>
              <ButtonDate
                pickDay={e => this.setState({ endDay: moment(e.target.value).format('D') })}
                pickMonth={e => this.setState({ endMonth: moment(e.target.value).format('M') })}
                pickYear={e => this.setState({ endYear: moment(e.target.value).format('YYYY') })}
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
            parseInt(this.props.data.tiennhanduoc) +
            ' vnđ' +
            '</span>' +
            '</div>' +
            '<div>' +
            'Lần nghỉ ốm ngắn hạn của bạn đợt này là ' +
            '<span class="momney">' +
            parseInt(this.props.data.songaynghi) +
            ' ngày' +
            '</span>' +
            '.Bạn nhớ theo dõi cộng số ngày đã nhận quyền lợi,ngày chưa nhận quyền lợi để khi cần sử dụng đến.' +
            'nên theo quy định, tổng thời gian các lần nghỉ ốm ngắn hạn trong năm hiện tại mà BHXH có trách nghiệm giải quyết quyền lợi cho bạn (nếu sảy ra sự việc), được giới hạn là ' +
            '</div>' +
            '<div>' +
            'Thời gia được nghỉ và tính quyền lợi BHXH là ' +
            '<span class="momney">' +
            parseInt(this.props.data.thoigiannghithucte) +
            ' ngày.' +
            '</span>' +
            '</div>'
          }
        />
      </Layout>
    );
  }
}
Recuperate.propTypes = {
  t: PropTypes.func,
  check: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => {
  return {
    data: state.sick.recuperate
  };
};

const mapDispatchToProps = {
  check: sickActions.recuperate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Recuperate));
