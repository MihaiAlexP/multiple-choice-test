const results = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_RESULTS':
      return { totalCount: action.totalCount, correctCount: action.correctCount };
    default:
      return state;
  }
};

export default results;
