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
import { 
  makeSelectSelectedTab,
  makeSelectModalStatus,
} from "./selectors";
import { 
  changeCurrentTab,
  openModal,
  closeModal,
} from "./actions";

import Header from '../../components/Header';
import Title from '../../components/Title'
import Tabs from '../../components/Tabs'
import EventDetails from "../../components/EventDetails";
import Modal from "../../components/Modal";

import styled from "styled-components";


const key = 'home';

function HomePage({
  currentTab,
  changeCurrentTab,
  openModal,
  closeModal,
  modalStatus,
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
      <EventDetails 
        openModal={openModal}
      />
      <Modal 
        closeModal={closeModal}
        modalStatus={modalStatus}
      />
    </>
  );
}


const mapStateToProps = createStructuredSelector({
  currentTab : makeSelectSelectedTab(),
  modalStatus: makeSelectModalStatus(),
});

export function mapDispatchToProps(dispatch) {
  return {
    changeCurrentTab : (data) => dispatch(changeCurrentTab(data)),
    closeModal : () => dispatch(closeModal()),
    openModal : () => dispatch(openModal()),
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