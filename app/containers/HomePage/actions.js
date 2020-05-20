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
