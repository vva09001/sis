//bảng thu gọn qt đóng
import React from 'react';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import _ from 'lodash';

const TablePayInsurance = props => {
  const { t } = props;
  let total = 0;
  return (
    <React.Fragment>
      {props.show && (
        <>
          <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>{t('STT')}</th>
                  <th>{t('Từ tháng/năm')}</th>
                  <th>{t('Đến tháng/năm')}</th>
                  <th>{t('Đơn vị')}</th>
                  <th>{t('Số tiền đóng được BHXH Việt Nam ghi nhận')}</th>
                </tr>

                {_.map(props.data, (item, index) => {
                  const tem = item[5].replace(/,/g, '.');
                  total = parseInt(total) + parseInt(tem);
                  return (
                    <tr key={index}>
                      <td> {item[0]}</td>
                      <td> {item[1]}</td>
                      <td> {item[2]}</td>
                      <td> {item[4]}</td>
                      <td> {item[5]}</td>
                    </tr>
                  );
                })}
                <tr>
                  <th colSpan="4">{t('Cộng')}</th>
                  <th>{total}</th>
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

TablePayInsurance.propTypes = {
  t: PropTypes.func,
  data: PropTypes.array,
  show: PropTypes.bool,
  close: PropTypes.func
};

export default withTranslation()(TablePayInsurance);
