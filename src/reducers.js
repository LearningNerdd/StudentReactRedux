import { combineReducers } from "redux"
import student from "./studentReducer"

const appReducer =  combineReducers({
  student,
})

export default appReducer
