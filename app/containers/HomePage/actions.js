/*
 *
 * LanguageProvider actions
 *
 */

export const dummyData = [
  {
    "key" : "1",
    "name": "Test Whatsapp",
    "region": "US",
    "createdOn": 1559807714999,
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"https://statics.sportskeeda.com/editor/2019/02/abc53-15496903982996-800.jpg" 
  },
  {
    "key" : "2",
    "name": "Test Whatsapp",
    "region": "US",
    "createdOn": 1559807714999,
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"https://statics.sportskeeda.com/editor/2019/02/abc53-15496903982996-800.jpg" 
  },
  {
    "key" : "3",
    "name": "Test Whatsapp",
    "region": "US",
    "createdOn": 1559807714999,
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"https://statics.sportskeeda.com/editor/2019/02/abc53-15496903982996-800.jpg" 
  },
  {
    "key" : "4",
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
export function openScheduleCalendar(key) {
  return {
    type: SCHEDULE_CALENDAR,
    key,
  };
}

export const SET_TIME = 'app/HomePage/SET_TIME'
export function setTime(time) {
  return {
    type: SET_TIME,
    time,
  };
}
