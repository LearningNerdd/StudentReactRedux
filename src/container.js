import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { fetchStudentData } from "./actions"

const mapStateToProps = (state) => {
  const {
    fetched,
    fetching,
    error,
    data,
  } = state.student
  return {
    fetched,
    fetching,
    error,
    data,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchStudentData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)
