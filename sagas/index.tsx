import runTimer from "./timer_saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        runTimer()
    ]);
}