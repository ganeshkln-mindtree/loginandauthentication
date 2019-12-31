import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddelware from 'redux-thunk';
import rootReducers from './redux/reducers';
const Store = createStore(rootReducers, applyMiddleware(thunkMiddelware));

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  //const linkElement = getByText(/learn react/i);
  expect(getByText).toMatchSnapshot();
});
