import { combineReducers } from 'redux';
import counterReducer from './reducers/counter_reducer';
import { StateType } from 'typesafe-actions';
import authReducer from './reducers/auth_reducer';
import timerReducer from './reducers/timer_reducer';

export const rootReducer = combineReducers({
    timer: timerReducer,
    counter: counterReducer,
    auth: authReducer,
});

export type ApplicationState = StateType<typeof rootReducer>
