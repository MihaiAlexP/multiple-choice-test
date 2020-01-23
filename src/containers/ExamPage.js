import { connect } from 'react-redux';
import { toggleVariant } from '../actions';

import QuestionList from '../components/QuestionList';
import '../styles/ExamPage.scss';

const mapStateToProps = state => ({
  questions: state
});

const mapDispatchToProps = dispatch => ({
  toggleVariant: (id, variant) => dispatch(toggleVariant(id, variant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);
