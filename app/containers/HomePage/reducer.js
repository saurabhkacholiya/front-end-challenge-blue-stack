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
  dummyData,
  SCHEDULE_CALENDAR,
  SET_TIME,
} from "./actions";

export const initialState = {
  selectedTab: 'LiveCampaigns',
  modalStatus: false,
  scheduleCalendarStatus: false,
  currentSelectedRow: null,
  listData : [...dummyData],
  selectedDate: new Date(),
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
      case SCHEDULE_CALENDAR: 
          draft.currentSelectedRow = action.obj
          draft.scheduleCalendarStatus= true
        break;
      case SET_TIME:
          draft.listData[state.currentSelectedRow.index]['createdOn'] = action.time
          draft.selectedDate = new Date(action.time)
          draft.scheduleCalendarStatus= false
        break;
    }
  });

export default homePageReducer;
