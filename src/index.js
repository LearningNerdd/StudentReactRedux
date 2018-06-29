import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from "./store"
import Container from "./container"
import Loader from "./Loader"

class HompePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: 'Medium'}
  }

  componentDidMount() {
    this.props.fetchStudentData()
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    const {
      fetched,
      fetching,
      error,
      data,
    } = this.props
    return (
      <div>
        {/*fetching && */<Loader />}
        {fetched && <div>hi</div>}
      </div>
    )
  }
}

const App = Container(HompePage)

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))