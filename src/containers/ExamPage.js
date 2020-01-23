import { connect } from 'react-redux';
import { fetchQuestions, submitData, toggleVariant, updateResults } from '../actions';

import QuestionList from '../components/QuestionList';
import '../styles/ExamPage.scss';

const mapStateToProps = state => ({
  questions: state.questions,
  status: state.status,
  results: state.results
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: (triggerError) => dispatch(fetchQuestions(triggerError)),
  submitData: (triggerError) => dispatch(submitData(triggerError)),
  toggleVariant: (id, variant) => dispatch(toggleVariant(id, variant)),
  updateResults: (totalCount, correctCount) => dispatch(updateResults(totalCount, correctCount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);
