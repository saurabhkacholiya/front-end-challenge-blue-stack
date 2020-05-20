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
import { makeSelectSelectedTab } from "./selectors";
import { changeCurrentTab } from "./actions";

import Header from '../../components/Header';
import Title from '../../components/Title'
import Tabs from '../../components/Tabs'

const key = 'home';

function HomePage({
  currentTab,
  changeCurrentTab,
}) {

  useInjectReducer({ key, reducer });

  const onTabClick = (data) => {
    changeCurrentTab(data)
  }

  return (
    <>
      <Header />
      <Title />
      <Tabs  
        onTabClick={onTabClick} 
        currentTab={currentTab}
      />
    </>
  );
}


const mapStateToProps = createStructuredSelector({
  currentTab : makeSelectSelectedTab()
});

export function mapDispatchToProps(dispatch) {
  return {
    changeCurrentTab : (data) => dispatch(changeCurrentTab(data)),
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