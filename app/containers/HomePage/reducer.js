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
  CLOSE_CALENDAR_MODAL,
} from "./actions";

export const initialState = {
  selectedTab: 'PastCampaigns',
  modalStatus: false,
  scheduleCalendarStatus: false,
  currentSelectedRowKey: null,
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
          draft.currentSelectedRowKey = action.key
          draft.scheduleCalendarStatus= true
        break;
      case SET_TIME:
          draft.listData = draft.listData.map(item => {
            if(item.key === state.currentSelectedRowKey){
              return {
                ...item,
                "createdOn": action.time,
              }
            }
              return item
          })
          // draft.selectedDate = new Date(action.time)
          draft.selectedDate = new Date() // set current date
          draft.scheduleCalendarStatus= false
        break;
      case CLOSE_CALENDAR_MODAL:
          draft.scheduleCalendarStatus = false
        break;
    }
  });

export default homePageReducer;
