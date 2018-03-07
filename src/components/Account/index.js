import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import UserGreeting from '../../sidebar/sidebarBtn'

import withAuthorization from '../Session/withAuthorization';

const AccountPage = ({ authUser }) =>
  <div>
    <h4>Hello: {authUser.email}</h4>
   <UserGreeting />
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);