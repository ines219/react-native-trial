import { TimerActions } from "../store/actions/action_types";
import { take, delay, put, actionChannel, race } from 'redux-saga/effects';
import { timerTick } from "../store/actions";

const timerDelay = 5000;

function* runTimer() {
    const start_channel = yield actionChannel(TimerActions.TIMER_START)
    while (yield take(start_channel)) {
        while (true) {
            const response = yield race({
                tick: delay(timerDelay),
                stop: take(TimerActions.TIMER_STOP)
            })
            if (!response.stop) {
                yield put(timerTick());
            } else {
                break;
            }
        }
    }
}

export default runTimer;