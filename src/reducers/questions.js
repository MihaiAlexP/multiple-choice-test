import { formatJSON } from '../utils';

const questions = (state = [], action) => {
  switch (action.type) {
    case 'SET_QUESTIONS_DATA':
      return formatJSON(action.data, 'questions');
    case 'TOGGLE_STATUS':
      return state.map(question =>
        question.id === action.id ? { ...question, status: action.status } : question
      );
    case 'TOGGLE_VARIANT':
      return state.map(question =>
        question.id === action.id ?
          { ...question, selectedVariants:
            question.selectedVariants.includes(action.variant) ?
              question.selectedVariants.filter(item => item !== action.variant) :[...question.selectedVariants, action.variant]
          } :
          question
      );
    default:
      return state;
  }
}
export default questions
