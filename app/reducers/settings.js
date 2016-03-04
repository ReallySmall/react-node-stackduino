import {
  TYPING,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  GET_SETTINGS_REQUEST,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_FAILURE } from 'constants/index';


export default function settings(state = {
  settings: [],
  newSettings: ''
}, action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state,
        { newSettings: action.newSettings }
      );
    case GET_SETTINGS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_SETTINGS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        settings: action.req.data
      });
    case GET_SETTINGS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case INCREMENT_COUNT:
      return {
        settings: [
        ...state.settings.slice(0, action.index),
        Object.assign({}, state.settings[action.index], {
          count: state.settings[action.index].count + 1
        }),
        ...state.settings.slice(action.index + 1)
        ],
        newSettings: state.newSettings
      };
    case DECREMENT_COUNT:
      return {
        settings: [
        ...state.settings.slice(0, action.index),
        Object.assign({}, state.settings[action.index], {
          count: state.settings[action.index].count - 1
        }),
        ...state.settings.slice(action.index + 1)
        ],
        newSettings: state.newSettings
      };

    default:
      return state;
  }
}
