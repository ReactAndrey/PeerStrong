/**
 * Alexandru
 */

'use strict';

import type {Action} from '../actions/types';

type State = Array<Object>;

const initialState: State = [

];

function history(state: State = initialState, action: Action): State {

  if (action.type === 'LOADED_QUESTIONS') {
    return action.data;
  }

  if (action.type === 'ANSWER_QUESTION') {
    let currentHistory = [...state];
    currentHistory.push(action.data);
    return currentHistory;
  }



  // if (action.type === 'LATEST_RECORD') {
  //   return state[state.length - 1];
  // }
  // if (action.type === 'TOP_TEN_RECORD') {
  //   let rData = [];
  //   let count = state.length > 10 ? 10 : state.length;
  //   for (let i = 0; i < count; i++) {
  //     rData.push(state[i]);
  //   }
  //   return rData;
  // }
  return state;
}

module.exports = history;