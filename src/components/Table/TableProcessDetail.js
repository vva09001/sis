//bảng chi tiết qt tham gia
import React from 'react';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import _ from 'lodash';

const TableProcessDetail = props => {
  const { t } = props;
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
                  <th>{t('Điễn giải')}</th>
                  <th>{t('Đơn vị')}</th>
                  <th>{t('Mức lương đón/Hệ số lương')}</th>
                </tr>

                {_.map(props.data, (item, index) => {
                  return (
                    <tr key={index}>
                      <td> {item[0]}</td>
                      <td> {item[1]}</td>
                      <td> {item[2]}</td>
                      <td> {item[3]}</td>
                      <td> {item[4]}</td>
                      <td> {item[5]}</td>
                    </tr>
                  );
                })}
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

TableProcessDetail.propTypes = {
  t: PropTypes.func,
  data: PropTypes.array,
  show: PropTypes.bool,
  close: PropTypes.func
};

export default withTranslation()(TableProcessDetail);
