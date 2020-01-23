import { connect } from 'react-redux';
import { toggleStatus, toggleVariant, updateResults } from '../actions';

import QuestionList from '../components/QuestionList';
import '../styles/ExamPage.scss';

const mapStateToProps = state => ({
  questions: state.questions,
  results: state.results
});

const mapDispatchToProps = dispatch => ({
  toggleStatus: (id, status) => dispatch(toggleStatus(id, status)),
  toggleVariant: (id, variant) => dispatch(toggleVariant(id, variant)),
  updateResults: (totalCount, correctCount) => dispatch(updateResults(totalCount, correctCount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);
