/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';
import { 
  CHANGE_CURRENT_TAB,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "./actions";

export const initialState = {
  selectedTab: 'LiveCampaigns',
  modalStatus: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_CURRENT_TAB:
        draft.selectedTab = action.selectedTab;
        break;
      case OPEN_MODAL: 
        draft.modalStatus = true
        break;
      case CLOSE_MODAL:
        draft.modalStatus = false
        break;
    }
  });

export default homePageReducer;
