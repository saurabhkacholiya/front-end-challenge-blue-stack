/*
 *
 * LanguageProvider actions
 *
 */


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
