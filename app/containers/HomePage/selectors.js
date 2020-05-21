/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { diffBetweenCurrentDateAndGivenDate } from "../../utils/commonFunction";

const selectHome = state => state.home || initialState;

const makeSelectSelectedTab = () =>
  createSelector(
    selectHome,
    homeState => homeState.selectedTab,
  );

const makeSelectModalStatus = () =>
  createSelector(
    selectHome,
    homeState => homeState.modalStatus,
  );
  
const makeSelectListData = () =>
  createSelector(
    selectHome,
    homeState =>{ 
      return homeState.listData.filter(item => {
         const { tab } = diffBetweenCurrentDateAndGivenDate(item.createdOn)
         return tab === homeState.selectedTab
      })
    },
  );

const makeSelectCurrentSelectedRow = () =>
  createSelector(
    selectHome,
    homeState => homeState.currentSelectedRow,
  );

const makeSelectScheduleCalendarStatus = () =>
  createSelector(
    selectHome,
    homeState => homeState.scheduleCalendarStatus,
  );
  
const makeSelectSelectedDate = () =>
  createSelector(
    selectHome,
    homeState => homeState.selectedDate,
  );
export { 
  selectHome, 
  makeSelectSelectedTab,
  makeSelectModalStatus,
  makeSelectListData,
  makeSelectCurrentSelectedRow,
  makeSelectScheduleCalendarStatus,
  makeSelectSelectedDate,
};
