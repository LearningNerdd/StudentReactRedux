import { put, takeEvery, select, call } from "redux-saga/effects"
import { FETCH_STUDENTS_DATA } from "./consts"
import { fetchStudentSuccess, fetchStudentError } from "./actions"

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response
        .json()
        .then((json) => Promise.resolve(json))
        
      } else {
        Promise.reject({
          status: response.status,
          statusText: response.statusText,
        })
      }
    })
    .catch((e) => Promise.reject({ status: 500 })) 
}

function* fetchStudentDetails() {
  try {
    const url = ""
    const studentResponse = yield call(fetchData, url)
    yield put(fetchStudentSuccess(studentResponse))
  } catch (error) {
    yield put(fetchStudentError(error))
  }
}

export default function* main() {
  yield takeEvery(FETCH_STUDENTS_DATA, fetchStudentDetails)
}
