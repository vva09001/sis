//Bảng chi tiết qt đóng
import React from 'react';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { currency } from 'utils/currency';
import _ from 'lodash';

const TablePayInsuranceDetail = props => {
  const { t } = props;
  return (
    <React.Fragment>
      {props.show && (
        <>
          <div className="table table-respon">
            <table>
              <tbody>
                <tr>
                  <th>{t('STT')}</th>
                  <th>{t('Từ tháng/năm')}</th>
                  <th>{t('Đến tháng/năm')}</th>
                  <th>{t('Chức vụ')}</th>
                  <th>{t('Đơn vị')}</th>
                  <th>{t('Mức lương đóng/Hệ số lương')}</th>
                  <th>{t('Số tiền đóng được BHXH Việt Nam ghi nhận')}</th>
                </tr>

                {_.map(props.data, (item, index) => {
                  return (
                    <tr key={index}>
                      <td> {item[0]}</td>
                      <td> {item[1]}</td>
                      <td> {item[2]}</td>
                      <td> {item[14]}</td>
                      <td> {item[4]}</td>
                      <td> {item[6]}</td>
                      <td> {currency(item[5])}</td>
                    </tr>
                  );
                })}
                <tr>
                  <th colSpan="6">{t('Cộng')}</th>
                  <th>{props.monney}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="btn-table">
            <IonButton onClick={props.close}>{t('Thu gọn')}</IonButton>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

TablePayInsuranceDetail.propTypes = {
  t: PropTypes.func,
  data: PropTypes.array,
  show: PropTypes.bool,
  close: PropTypes.func,
  monney: PropTypes.string
};

export default withTranslation()(TablePayInsuranceDetail);
