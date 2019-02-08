/**
 * @providesModule DUtils
 * @flow
 */
import moment from 'moment';
const LocalImageList = {
	firstLogo: require('assets/images/first_logo.png'),
	swipeStart: require('assets/images/swipe_start.png'),
	historyDefault: require('assets/images/history-default.png'),
	historyActive: require('assets/images/history-active.png'),
	infoDefault: require('assets/images/info-default.png'),
	infoActive: require('assets/images/info-active.png'),
	resultsDefault: require('assets/images/results-default.png'),
	resultsActive: require('assets/images/results-active.png'),
	theTestsDefault: require('assets/images/the-test-default.png'),
	theTestsActive: require('assets/images/the-test-active.png'),

	produced: require('assets/images/produced.png'),
	coded: require('assets/images/coded.png'),
	design: require('assets/images/design.png'),
	clipboardPen: require('assets/images/clipboard-pen.png'),
	clipboardInfo: require('assets/images/clipboard-info.png'),
	clipboardPhq9: require('assets/images/clipboard-phq9.png'),
	clipboardQuestion: require('assets/images/clipboard-question.png'),
}

const resultScoreTexts = [
	{
		title: '1-4 score indicates minimal depression.',
		desc: 'Based on your responses today, it\'s unlikely you\'re suffering from depression. Periodic monitoring is suggested if you have a history of previous bouts of depression or strong family history.'
	},
	{
		title: '5-9 score indicates mild depression',
		desc: 'Based on your responses today, it is very likely that you could be suffering from a mild form of depression. You should make an appointment to see you doctor.'
	},
	{
		title: '10-14 score indicates moderate depression',
		desc: 'Based on your responses today, it is very likely that you could be suffering from some form of depression. You should make an appointment to see your doctor as soon as possible.'
	},
	{
		title: '15-19 score indicates moderately severe depression',
		desc: 'Based on your responses today, it is very likely that you could be suffering from some form of depression. You should make an appointment to see your doctor as soon as possible.'
	},
	{
		title: '20-27 score indicates severe depression',
		desc: 'Based on your responses today, it is very likely that you could be suffering from some form of depression. You should make an appointment to see your doctor as soon as possible.'
	},
	{
		title: '',
		desc: 'No results to display. You have not taken the test yet.'
	}
];

export const getImageFromName = function(type) {
    return LocalImageList[type];
}

export const getResultTextFromScore = (score) => {
	let result = resultScoreTexts[0];
	if (score < 5) {
		result = resultScoreTexts[0];
	} else if (score < 10) {
		result = resultScoreTexts[1];
	} else if (score < 15) {
		result = resultScoreTexts[2];
	} else if (score < 20) {
		result = resultScoreTexts[3];
	} else {
		result = resultScoreTexts[4];
	}
	if (score === -1) {
		result = resultScoreTexts[5];
	}
	return result;
}

export const getLatestFromArray = (array) => {
	if (array) {
		return array[array.length - 1];
	}
	return undefined;
}

export const getTopTenFromArray = (array) => {
	if (array) {
		const count = array.length > 10 ? 10 : array.length;
		let results = [];
		let index = array.length - 1;
		for (let i = 0; i < count; i++) {
			results.push(array[index]);
			index = index - 1;
		}
		return results;
	}

}

export const calcScore = (dArray) => {
	if (dArray.length === 0){
		return -1;
	}
	if (dArray) {
		let sum = 0;
		dArray.map((data) => {sum = sum + data});
		return sum;
	}
	return 0;
}

export const getDateTimeString = (date) => {
    let dateWrapper = moment(date);
    let returnValues = {
      date: dateWrapper.format('MMM DD, YYYY'),
      time: dateWrapper.format('H:mm'),
      period: dateWrapper.format('A')
    };
    return returnValues;
  }


