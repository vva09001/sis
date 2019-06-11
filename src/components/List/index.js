import React from 'react';
import { except } from 'utils/string';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonIcon,
  IonBadge,
  IonItem,
  IonThumbnail,
  IonLabel
} from '@ionic/react';
import PropTypes from 'prop-types';

const List = ({ item }) => {
  const substring =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  return (
    <IonItem onClick={() => {}}>
      <IonThumbnail slot="start">
        <img alt="list" src="https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png" />
      </IonThumbnail>
      <IonLabel>
        <IonButton class="remove-button" fill="clear" color="tertiary" slots="icon-only">
          <IonIcon name="trash" />
        </IonButton>
        <IonGrid>
          <IonRow>
            <IonCol size="10">
              <IonCardTitle>{item.showname}</IonCardTitle>
            </IonCol>
            <IonCol size="2" />
          </IonRow>
          <IonRow class="sub-list">
            <IonCol size="9">
              <IonCardSubtitle>{except(substring, 50)}</IonCardSubtitle>
              <div className="sub-card">
                <IonIcon color="tertiary" slots="start" name="alarm" />
                <IonBadge color="light">10:12pm</IonBadge>
                <IonIcon color="tertiary" name="calendar" />
                <IonBadge color="light">11/02/2019</IonBadge>
              </div>
            </IonCol>
            <IonCol size="3">
              <IonButton expand="block">Go</IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="bottom-card">
            <IonCol>
              <IonButton fill="clear" color="secondary">
                <IonIcon slot="icon-only" name="star" />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton fill="clear" color="tertiary">
                <IonIcon slots="start" name="heart" />
                2k
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton fill="clear" color="medium">
                <IonIcon slots="start" name="share" />
                69
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonLabel>
    </IonItem>
  );
};
List.propTypes = {
  item: PropTypes.object
};
export default List;
