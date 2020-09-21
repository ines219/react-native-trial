import * as React from 'react';
import { Provider } from 'react-redux';
import { rootReducer } from './store/root_reducer';
import NavStack from './navigation/NavStack';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

export default function App() {
  return (
    <Provider store={ store }>
      <NavStack/>
    </Provider>
  );
}

sagaMiddleWare.run(rootSaga)
