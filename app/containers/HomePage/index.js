/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React , { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer'

import Header from '../../components/Header';
import Title from '../../components/Title'

const key = 'home';

function HomePage() {

  useInjectReducer({ key, reducer });

  return (
    <main>
      <Header />
      <Title />
    </main>
  );
}


const mapStateToProps = createStructuredSelector({
 
});

export function mapDispatchToProps(dispatch) {
  return {
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);