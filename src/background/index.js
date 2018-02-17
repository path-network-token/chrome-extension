// @flow
import configureStore from '../shared/store/configureStore';
import initStorage from '../shared/initStorage';
import createInitState from '../shared/helpers/createInitState';

const storage = JSON.parse(localStorage.getItem('persistent')) || initStorage;
const initialState = createInitState(storage);

const store = configureStore(initialState);

// eslint-disable-next-line
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === 'updateState') {
    store.dispatch({
      type: 'UPDATE_STATE',
      state: req.state
    });
  }

  if (req.action === 'getState') {
    sendResponse(store.getState());
  }
});
