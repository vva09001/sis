import React from 'react';
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
const Card = () => {
  return (
    <IonCard>
      <IonImg src="https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg" />
      <IonCardContent class="card">
        <IonGrid>
          <IonRow>
            <IonCol size="10">
              <IonCardTitle>Winter Sale Offer</IonCardTitle>
              <IonCardSubtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </IonCardSubtitle>
            </IonCol>
            <IonCol class="remove ion-text-right" size="2">
              <IonButton shape="round">
                <IonIcon slot="icon-only" name="trash" />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonBadge color="light">
                <IonIcon slots="start" name="alarm" /> 10:12pm
              </IonBadge>
              <IonBadge color="light">
                <IonIcon name="calendar" /> 11/02/2019
              </IonBadge>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="8">
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
            <IonCol size="4">
              <IonButton expand="block">Go</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};
export default Card;
