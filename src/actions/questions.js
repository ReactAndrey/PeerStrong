'use strict';

import type { Action } from './types';


function answerQuestion(date: Date, values: Array<number>): Action {
  return {
    type: 'ANSWER_QUESTION',
    data: { date: date, scores: values }
  }
}

module.exports = {
  answerQuestion
};