/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

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

export { 
  selectHome, 
  makeSelectSelectedTab,
  makeSelectModalStatus,
};
