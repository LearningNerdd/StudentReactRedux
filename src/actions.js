import {
	FETCH_STUDENTS_DATA,
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./consts"

export const fetchStudentData = () => ({
	type: FETCH_STUDENTS_DATA,
})

export const fetchStudentSuccess = data => ({
	type: FETCH_DATA_SUCCESS,
	data,
})

export const fetchStudentError = error => ({
	type: FETCH_DATA_ERROR,
	error,
})
