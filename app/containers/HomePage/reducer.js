/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';
import { 
  CHANGE_CURRENT_TAB,
} from "./actions";

export const initialState = {
  selectedTab: 'LiveCampaigns'
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_CURRENT_TAB:
        draft.selectedTab = action.selectedTab;
        break;
    }
  });

export default homePageReducer;
