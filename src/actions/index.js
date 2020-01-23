import { QUESTIONS_JSON, SUBMIT_RESULT_JSON } from '../utils/constants';
import { fakeRequest } from '../utils';

export const toggleStatus = (id, status) => ({
  type: 'TOGGLE_STATUS',
  id,
  status
});

export const toggleVariant = (id, variant) => ({
  type: 'TOGGLE_VARIANT',
  id,
  variant
});

export const updateResults = (totalCount, correctCount) => ({
  type: 'UPDATE_RESULTS',
  totalCount,
  correctCount
});

export const setQuestionsData = (data) => ({
  type: 'SET_QUESTIONS_DATA',
  data
});

export const questionsRequested = () => ({
  type: 'QUESTIONS_REQUESTED'
});

export const questionsReceived = () => ({
  type: 'QUESTIONS_RECEIVED'
});

export const questionsFailed = () => ({
  type: 'QUESTIONS_FAILED'
});

export const submitRequested = () => ({
  type: 'SUBMIT_REQUESTED'
});

export const submitReceived = () => ({
  type: 'SUBMIT_RECEIVED'
});

export const submitFailed = () => ({
  type: 'SUBMIT_FAILED'
});

export const fetchQuestions = (triggerError) => {
  // set mock data
  const json = triggerError ? '' : QUESTIONS_JSON;

  return (dispatch) => {
    dispatch(questionsRequested());
    fakeRequest(2000, json)
      .then(response => JSON.parse(response))
      .then(obj => {
        dispatch(setQuestionsData(obj));
        dispatch(questionsReceived());
      })
      .catch(() => dispatch(questionsFailed()));
  }
}

export const submitData = (triggerError) => {
  // set mock data
  const json = triggerError ? '' : SUBMIT_RESULT_JSON;

  return (dispatch) => {
    dispatch(submitRequested());
    fakeRequest(2000, json)
      .then(response => JSON.parse(response))
      .then(obj => {
        let totalCount = 0;
        let correctCount = 0;
        
        if (obj.questions) {
          obj.questions.forEach(item => {
            totalCount += 1;
            if (item.status === 1) {
              correctCount += 1;
              dispatch(toggleStatus(item.id, 1));
            } else {
              dispatch(toggleStatus(item.id, 0));
            }
          });
        }

        dispatch(updateResults(totalCount, correctCount));
        dispatch(submitReceived());
      })
      .catch(() => dispatch(submitFailed()));
  }
}
  