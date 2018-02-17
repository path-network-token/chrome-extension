export const UPDATE_STATE = 'UPDATE_STATE';
export const SET_OPTIONS = 'SET_OPTIONS';

export function updateState() {
  return {
    type: UPDATE_STATE
  };
}

export function setOptions(options) {
  return {
    type: SET_OPTIONS,
    options
  };
}
