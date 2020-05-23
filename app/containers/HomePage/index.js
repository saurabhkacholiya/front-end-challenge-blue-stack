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
  makeSelectListData,
  makeSelectScheduleCalendarStatus,
  makeSelectSelectedDate,
} from "./selectors";
import { 
  changeCurrentTab,
  openModal,
  closeModal,
  openScheduleCalendar,
  setTime,
} from "./actions";
import { diffBetweenCurrentDateAndGivenDate } from "../../utils/commonFunction";

import Header from '../../components/Header';
import Title from '../../components/Title'
import Tabs from '../../components/Tabs'
import EventDetails from "../../components/EventDetails";
import Modal from "../../components/Modal";
import Calendar from "../../components/Calendar";

import LocaleToggle from "../LocaleToggle";

import styled from "styled-components";


const key = 'home';

function HomePage({
  currentTab,
  changeCurrentTab,
  openModal,
  closeModal,
  modalStatus,
  openScheduleCalendar,
  listData,
  calendarStatus,
  setTime,
  selectedDate,
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
        openScheduleCalendar={openScheduleCalendar}
        data={listData}
        diffBetweenCurrentDateAndGivenDate={diffBetweenCurrentDateAndGivenDate}
      />
      <Modal 
        closeModal={closeModal}
        modalStatus={modalStatus}
      />
      <Calendar 
        calendarStatus={calendarStatus}
        setTime={setTime}
        selectedDate={selectedDate}
      />
    </>
  );
}


const mapStateToProps = createStructuredSelector({
  currentTab : makeSelectSelectedTab(),
  modalStatus: makeSelectModalStatus(),
  listData : makeSelectListData(),
  calendarStatus: makeSelectScheduleCalendarStatus(),
  selectedDate : makeSelectSelectedDate(),
});

export function mapDispatchToProps(dispatch) {
  return {
    changeCurrentTab : (data) => dispatch(changeCurrentTab(data)),
    closeModal : () => dispatch(closeModal()),
    openModal : () => dispatch(openModal()),
    openScheduleCalendar: (data) => dispatch(openScheduleCalendar(data)),
    setTime: (data) => dispatch(setTime(data)),
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