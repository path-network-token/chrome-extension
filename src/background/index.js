// @flow
import io from 'socket.io-client';

import configureStore from '../shared/store/configureStore';
import initStorage from '../shared/initStorage';
import createInitState from '../shared/helpers/createInitState';

const storage = JSON.parse(localStorage.getItem('persistent')) || initStorage;
const initialState = createInitState(storage);

const store = configureStore(initialState);

const socket = io('http://nodejs.nyc.path.network:3000/path');

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

socket.on('connect', () => {
  const index = socket.io.engine.upgrade ? 1 : 0;
  console.info(socket.io.engine.transports[index] + '.');
});

socket.on('message-all', data => {
  console.info(data);
});

socket.on('message-room', data => {
  console.info(data);
  httpCheck(data);
});
