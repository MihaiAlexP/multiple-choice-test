import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import ExamPage from './containers/ExamPage';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => <ExamPage />;

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
