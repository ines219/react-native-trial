import { CounterActions } from "./action_types";

export const counterAdd = () => {
    return {
        type: CounterActions.COUNTER_ADD
    };
}

export const counterSubtract = () => {
    return {
        type: CounterActions.COUNTER_SUBTRACT
    };
}