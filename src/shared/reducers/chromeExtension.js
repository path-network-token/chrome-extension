import { UPDATE_STATE, SET_OPTIONS } from '../actions/chromeExtension.js';

export default function chromeExtension(
  state = { persistent: { options: { initCount: 1 } } },
  action
) {
  switch (action.type) {
    case UPDATE_STATE:
      const newState = Object.assign({}, state, action.state);
      if (
        location.protocol == 'chrome-extension:' &&
        chrome.extension.getBackgroundPage() === window
      ) {
        localStorage.setItem('persistent', JSON.stringify(newState.persistent));
      }
      return newState;
    case SET_OPTIONS:
      return Object.assign({}, state, {
        persistent: { options: action.options }
      });
    default:
      return state;
  }
}
