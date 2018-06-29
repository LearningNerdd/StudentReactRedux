import { fork } from "redux-saga/effects"
import studentSaga from "./studentSaga"

export default function* main() {
  yield fork(studentSaga)
}
