import { TimerActions } from '../actions/action_types';

const initialState = {
    status: false,
    seconds: 0
};

const timerReducer = (state = initialState, action: {type: TimerActions}) => {
    switch (action.type) {
        case TimerActions.TIMER_START:
            return {
                ...state,
                status: true
            };

        case TimerActions.TIMER_STOP:
            return {
                ...state,
                status: false
            };

        case TimerActions.TIMER_TICK:
            return {
                ...state,
                seconds: state.seconds + 1
            };

        default:
            return state;
    }
}

export default timerReducer;