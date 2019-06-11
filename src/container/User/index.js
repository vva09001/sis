import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from 'container/User/Login';
import Profile from 'container/User/Profile';
import PropTypes from 'prop-types';

class UserContainer extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <Profile />;
    }
    return <Login />;
  }
}

UserContainer.propTypes = {
  isLoggedIn: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.User.token === '' ? false : true
  };
};

export default connect(mapStateToProps)(UserContainer);
