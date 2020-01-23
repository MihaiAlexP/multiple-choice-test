const json = '{"questions":[{"id":0,"text":"Question #1","variants":[{"id":0,"text":"Q1 Variant #1"},{"id":1,"text":"Q1 Variant #2"},{"id":2,"text":"Q1 Variant #3"},{"id":3,"text":"Q1 Variant #4"}]},{"id":1,"text":"Question #2","variants":[{"id":0,"text":"Q2 Variant #1"},{"id":1,"text":"Q2 Variant #2"},{"id":2,"text":"Q2 Variant #3"},{"id":3,"text":"Q2 Variant #4"}]}]}';

const formatJSON = (jsonStr, key) => {
  const arr = JSON.parse(jsonStr)[key];
  
  if (Array.isArray(arr)) {
    return arr.map((item) => {
      item.status = -1;
      item.selectedVariants = [];
      return item;
    });
  }

  return [];
}

const questions = (state = formatJSON(json, 'questions'), action) => {
  switch (action.type) {
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
