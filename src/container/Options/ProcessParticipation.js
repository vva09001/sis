//kiểm tra quá trình tham gia

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { IonButton } from '@ionic/react';
import {
  TableProcess,
  TableProcessDetail,
  TablePayInsurance,
  TablePayInsuranceDetail
} from 'components/Table';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { connect } from 'react-redux';

class ProcessParticipation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: false,
      showTableProcessDetail: false,
      showTablePayInsurance: false,
      showTablePayInsuranceDetail: false
    };
  }
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <TableProcess
          data={this.props.data}
          show={this.state.showTable}
          close={() => this.setState({ showTable: false })}
        />
        <TableProcessDetail
          data={this.props.data}
          show={this.state.showTableProcessDetail}
          close={() => this.setState({ showTableProcessDetail: false })}
        />
        <TablePayInsurance
          data={this.props.data}
          show={this.state.showTablePayInsurance}
          close={() => this.setState({ showTablePayInsurance: false })}
        />
        <TablePayInsuranceDetail
          data={this.props.data}
          show={this.state.showTablePayInsuranceDetail}
          close={() => this.setState({ showTablePayInsuranceDetail: false })}
        />
        <Layout
          title={t('Kiểm tra quá trình tham gia BHXH của bạn')}
          btnName={t('ignore')}
          _onClick={() => history.goBack()}
          btnColor="light"
        >
          <div className="content-options">
            <Buttons number={1}>{t('Quá trình tham gia BHXH (thời gian)')}</Buttons>
            <div className="wapper-flex">
              <IonButton onClick={() => this.setState({ showTable: true })}>
                {t('Phiên bản rút gọn')}
              </IonButton>
              <IonButton onClick={() => this.setState({ showTableProcessDetail: true })}>
                {t('Phiên bản chi tiết')}
              </IonButton>
            </div>
            <Buttons number={2}>{t('Quá trình đóng BHXH (việc nộp tiền)')}</Buttons>
            <div className="wapper-flex">
              <IonButton onClick={() => this.setState({ showTablePayInsurance: true })}>
                {t('Phiên bản rút gọn')}
              </IonButton>
              <IonButton onClick={() => this.setState({ showTablePayInsuranceDetail: true })}>
                {t('Phiên bản chi tiết')}
              </IonButton>
            </div>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

ProcessParticipation.propTypes = {
  t: PropTypes.func,
  data: PropTypes.array
};

const mapSateToProps = state => {
  return {
    data: state.user.profile.history
  };
};

export default connect(
  mapSateToProps,
  null
)(withTranslation()(ProcessParticipation));
