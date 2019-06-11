import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Layout from 'container/Layout/Layout';
import { List } from 'components';
import Menu from 'container/Common/Menu';
import { IonList } from '@ionic/react';

class MyContainer extends Component {
  render() {
    return (
      <Layout>
        <Menu />
        <IonList class="list" inset={true} lines="none">
          <List />
          <List />
          <List />
        </IonList>
      </Layout>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(MyContainer));
