import Q from 'q';
import initStorage from '../initStorage';
import createInitState from './createInitState';

export default function getState() {
  const result = Q.defer();
  if (window.chrome && chrome.runtime && chrome.runtime.id) {
    chrome.runtime.sendMessage(
      {
        action: 'getState'
      },
      res => {
        if (res) {
          result.resolve(res);
        } else {
          result.reject(new Error('Cannot reach Background Page'));
        }
      }
    );
  } else {
    //MOCK
    const deferred = Q.defer();
    deferred.resolve(createInitState(initStorage));
    return deferred.promise;
  }
  return result.promise;
}
