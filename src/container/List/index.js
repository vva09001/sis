import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Layout from 'container/Layout/Layout';
import { List, Loading } from 'components';
import Menu from 'container/Common/Menu';
import { IonList } from '@ionic/react';
import { dataActions } from 'store/actions';
import PropTypes from 'prop-types';
import { IonRefresher } from '@ionic/react';
import _ from 'lodash';

class ListContainer extends Component {
  componentDidMount() {
    this.props.getBrands();
  }
  onRefresh = e => {
    this.props.getBrands();
    e.target.complete();
  };
  render() {
    return (
      <Layout>
        <Menu />
        <IonList class="list" inset={true} lines="none">
          {!this.props.loading ? (
            _.map(this.props.items, item => {
              return <List item={item} />;
            })
          ) : (
            <Loading />
          )}
        </IonList>
        <IonRefresher
          onIonRefresh={e => this.onRefresh(e)}
          pullFactor={0.5}
          pullMin={100}
          pullMax={200}
        />
      </Layout>
    );
  }
}

ListContainer.propTypes = {
  getBrands: PropTypes.func,
  items: PropTypes.array,
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    items: state.Data.packages,
    loading: state.Data.loading
  };
};

const mapDispatchToProps = {
  getBrands: dataActions.getBrands
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ListContainer));
