const SET_TAB = "SET_TAB";
const SET_LANG = "SET_LANG";

const initialState = {
  lang: "en",
  tab: 1,
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB:
      return { ...state, tab: action.payload.tab };
    case SET_LANG:
      return { ...state, lang: action.payload.lang };
    default:
      return state;
  }
};

export const setTabAction = (tab) => ({ type: SET_TAB, payload: { tab } });

export const setLangAction = (lang) => ({ type: SET_LANG, payload: { lang } });
