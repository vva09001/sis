import React, { Component } from 'react';
import Header from 'container/Common/Header';
import { IonContent } from '@ionic/react';
class Time extends Component {
  render() {
    return (
      <div className="time">
        <IonContent>
          <Header title="Đồng hồ đếm ngược thời gian đến thời điểm bắt đầu được nhận lương hưu" />
          <div className="timeWapper">
            <div className="timeLeft">
              <div className="timeDisplay">
                <p>0</p>
              </div>
              <div className="timeDisplay">
                <p>5</p>
              </div>
              <p>Năm</p>
            </div>
            <div className="timeRight">
              <div className="timeDisplay">
                <p>1</p>
              </div>
              <div className="timeDisplay">
                <p>1</p>
              </div>
              <p>Tháng</p>
            </div>
          </div>
        </IonContent>
      </div>
    );
  }
}

export default Time;
