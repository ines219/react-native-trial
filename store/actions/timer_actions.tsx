import { TimerActions } from "./action_types";

export const timerStart = () => {
    return {
        type: TimerActions.TIMER_START
    };
}

export const timerStop = () => {
    return {
        type: TimerActions.TIMER_STOP
    };
}

export const timerTick = () => {
    return {
        type: TimerActions.TIMER_TICK
    };
}