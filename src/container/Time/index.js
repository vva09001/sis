import React, { Component } from 'react';
import Header from 'container/Common/Header';
import { IonContent, IonButton, IonModal } from '@ionic/react';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  render() {
    return (
      <div className="time">
        <IonContent>
          <Header title="Đồng hồ đếm ngược thời gian đến thời điểm bắt đầu được nhận lương hưu" />
          <div className="timeWapper">
            <div className="timeLeft">
              <div className="timeDisplay">
                <span>0</span>
              </div>
              <div className="timeDisplay">
                <span>0</span>
              </div>
              <span className="text-year">Năm</span>
            </div>
            <div className="timeRight">
              <div className="timeDisplay">
                <span>0</span>
              </div>
              <div className="timeDisplay">
                <span>0</span>
              </div>
              <span className="text-month">Tháng</span>
            </div>
          </div>
          <div className="time-content" onClick={() => this.setState({ showModal: true })}>
            <p>
              Tham gia đóng bảo hiểm nữa thì bạn mới đủ điều kiện nhận lương tăng lương Tham gia,
              Tham gia đóng bảo hiểm nữa thì bạn mới đủ điều kiện nhận lương tăng
            </p>
            <p>
              nếu bạn chưa đủ điều kiện nhận lương thì s nếu bạn chưa đủ điều kiện nhận lương thì s
            </p>
          </div>
          <div className="btn-wrap">
            <IonButton color="light" className="time-btn__leave">
              Bỏ Qua
            </IonButton>
          </div>
          <IonModal
            isOpen={this.state.showModal}
            onDidDismiss={() => this.setState(() => ({ showModal: false }))}
          >
            <p>This is modal content</p>
            <IonButton onClick={() => this.setState(() => ({ showModal: false }))}>
              Close Modal
            </IonButton>
          </IonModal>
        </IonContent>
      </div>
    );
  }
}

export default Time;
