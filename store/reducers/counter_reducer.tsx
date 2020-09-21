import { CounterActions } from '../actions/action_types';

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action: {type: CounterActions}) => {
    switch (action.type) {
        case CounterActions.COUNTER_ADD:
            return {
                ...state,
                count: state.count + 1
            };

        case CounterActions.COUNTER_SUBTRACT:
            return {
                ...state,
                count: state.count - 1
            };

        default:
            return state;
    }
}

export default counterReducer;