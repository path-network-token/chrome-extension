// @flow
import axios from 'axios';

export const UPDATE_STATE = 'UPDATE_STATE';
export const SET_OPTIONS = 'SET_OPTIONS';
export const HTTP_CHECK = 'HTTP_CHECK';
export const GET_UUID = 'GET_UUID';
export const SUBMIT_DNS = 'SUBMIT_DNS';
export const GET_JOB = 'GET_JOB';

export const WALLET_ADDRESS = '0x32Be343B94f860124dC4fEe278FDCBD38C102D88';
export const GET_JOB_URI = 'https://api.path.network/miner/jobs';
export const GET_UUID_URI = 'https://api.path.network/miner/uuid';
export const POST_DNS_URI = 'https://api.path.network/miner/dns';
export const POST_RESULT_URI = 'https://api.path.network/';

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

function httpCheckSubmit(result) {
  return dispatch => {
    axios
      .post(POST_RESULT_URI, {
        wallet_address: WALLET_ADDRESS,
        result
      })
      .then(res =>
        dispatch({
          type: HTTP_CHECK,
          accepted: true
        })
      )
      .catch(err =>
        dispatch({
          type: HTTP_CHECK,
          accepted: false
        })
      );
  };
}

export function httpCheck() {
  return dispatch => {
    axios
      .get(GET_JOB_URI)
      .then(({ data }) => {
        // GET_JOB is for listing all jobs, used later for telemetry
        dispatch({ type: GET_JOB, data });

        axios
          .get(data)
          .then(({ status }) => dispatch(httpCheckSubmit(status)))
          .catch(error => dispatch(httpCheckSubmit(error)));
      })
      .catch(error => dispatch({ type: GET_JOB, error }));
  };
}

export function getUUID() {
  return {
    type: GET_UUID
  };
}

function submitDNS(dns) {
  return dispatch => {
    axios
      .post(POST_DNS_URI, dns)
      .then(({ data }) =>
        dispatch({
          type: SUBMIT_DNS,
          data
        })
      )
      .catch(error =>
        dispatch({
          type: SUBMIT_DNS,
          error
        })
      );
  };
}

export function postDNS() {
  return (dispatch, getState) => {
    const { dns } = getState();

    dispatch(submitDNS(dns));
  };
}
