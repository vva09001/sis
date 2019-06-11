import React from 'react';
import PropTypes from 'prop-types';
import { FormatTime, FormatDate } from 'utils/moment';
import { except } from 'utils/string';
import {
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
  IonIcon,
  IonCardContent,
  IonBadge
} from '@ionic/react';
const Card = ({ item }) => {
  const substring =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  return (
    <IonCard>
      <IonImg src={item.img} />
      <IonCardContent class="card">
        <IonGrid>
          <IonRow>
            <IonCol size="10">
              <IonCardTitle>{item.showname}</IonCardTitle>
              <IonCardSubtitle>{except(substring)}</IonCardSubtitle>
            </IonCol>
            <IonCol class="remove ion-text-right" size="2">
              <IonButton shape="round">
                <IonIcon slot="icon-only" name="trash" />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="sub-card">
            <IonCol>
              <IonIcon color="tertiary" slots="start" name="alarm" />
              <IonBadge color="light">{FormatTime(item.date)}</IonBadge>
              <IonIcon color="tertiary" name="calendar" />
              <IonBadge color="light">{FormatDate(item.date)}</IonBadge>
            </IonCol>
          </IonRow>
          <IonRow class="bottom-card">
            <IonCol size="9">
              <IonButton fill="clear" color="secondary">
                <IonIcon slot="icon-only" name="star" />
              </IonButton>
              <IonButton fill="clear" color="tertiary">
                <IonIcon slots="start" name="heart" />
                2k
              </IonButton>
              <IonButton fill="clear" color="medium">
                <IonIcon slots="start" name="share" />
                69
              </IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton expand="block">Go</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};
Card.propTypes = {
  item: PropTypes.object
};
export default Card;
