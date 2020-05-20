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

export { 
  selectHome, 
  makeSelectSelectedTab,
};
