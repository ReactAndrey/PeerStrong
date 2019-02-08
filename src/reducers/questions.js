/**
 * Alexandru
 */

'use strict';

import type {Action} from '../actions/types';

type State = Array<Object>;
const initialState: State = [
  {
    id: 101,
    question: 'Little interest or pleasure in doing things.',
  },
  {
    id: 102,
    question: 'Feeling down, depressed, or hopeless.',
  },
  {
    id: 103,
    question: 'Trouble falling or staying asleep, or sleeping too much.',
  },
  {
    id: 104,
    question: 'Feeling tired or having little energy.',
  },
  {
    id: 105,
    question: 'Poor appetite or overeating.',
  },
  {
    id: 106,
    question: 'Feeling bad about yourself or that you are a failure or have let yourself or your family down.',
  },
  {
    id: 107,
    question: 'Trouble concentrating on things, such as reading the newspaper or watching television.',
  },
  {
    id: 108,
    question: 'Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual.',
  },
  {
    id: 109,
    question: 'Thoughts that you would be better off dead, or of hurting yourself.',
  }

];

function questions(state: State = initialState, action: Action): State {
  if (action.type === 'LOAD_QUESTIONS') {
    return action.data;
  }
  return state;
}

module.exports = questions;