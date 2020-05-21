/*
 *
 * LanguageProvider actions
 *
 */

export const dummyData = [
  {
    "name": "Test Whatsapp",
    "region": "US",
    "createdOn": 1559807714999,
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"https://statics.sportskeeda.com/editor/2019/02/abc53-15496903982996-800.jpg" 
  },
  {
    "name": "Test Whatsapp",
    "region": "US",
    "createdOn": 1559807714999,
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"https://statics.sportskeeda.com/editor/2019/02/abc53-15496903982996-800.jpg" 
  },
  {
    "name": "Test Whatsapp",
    "region": "US",
    "createdOn": 1559807714999,
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"https://statics.sportskeeda.com/editor/2019/02/abc53-15496903982996-800.jpg" 
  },{
    "name": "Test Whatsapp",
    "region": "US",
    "createdOn": 1559807714999,
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"https://statics.sportskeeda.com/editor/2019/02/abc53-15496903982996-800.jpg" 
  }
]


export const CHANGE_CURRENT_TAB = 'app/HomePage/CHANGE_CURRENT_TAB'
export function changeCurrentTab(selectedTab) {
  return {
    type: CHANGE_CURRENT_TAB,
    selectedTab,
  };
}

export const OPEN_MODAL = 'app/HomePage/OPEN_MODAL'
export function openModal() {
  return {
    type: OPEN_MODAL,
  };
}

export const CLOSE_MODAL = 'app/HomePage/CLOSE_MODAL'
export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export const SCHEDULE_CALENDAR = 'app/HomePage/SCHEDULE_CALENDAR'
export function openScheduleCalendar(obj) {
  return {
    type: SCHEDULE_CALENDAR,
    obj,
  };
}

export const SET_TIME = 'app/HomePage/SET_TIME'
export function setTime(time) {
  return {
    type: SET_TIME,
    time,
  };
}
