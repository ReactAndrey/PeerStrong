/**
 */

'use strict';

type ParseObject = Object;

export type Action =
  {type: 'LOADED_QUESTIONS', list: Array<Object>}
  | {type: 'LOADED_ANSWERS', list: Array<Object>}

  | { type: 'ANSWER_QUESTION', data: Object }
  | { type: 'SWITCH_TAB', tab: 'conversation' }
  | { type: 'SWITCH_NAVIGATION', nav: string }
  ;

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
