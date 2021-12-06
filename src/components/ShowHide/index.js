// Write your code here
import {render} from '@testing-library/react'
import {Component} from 'react'
import './index.css'

class showHide extends Component {
  state = {show: true, shows: true}

  showFunction = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  showsFunction = () => {
    this.setState(prevState => ({shows: !prevState.shows}))
  }

  render() {
    const {show, shows} = this.state
    const firstNames = show ? <button className="firstName">Joe</button> : null
    const lastNames = shows ? (
      <button className="firstName">Jonas</button>
    ) : null

    return (
      <div className="bgContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="namesContainer">
          <div className="namesDiv">
            <button className="button" onClick={this.showFunction}>
              Show/Hide Firstname
            </button>
            <div>{firstNames}</div>
          </div>
          <div className="namesDiv">
            <button className="button" onClick={this.showsFunction}>
              Show/Hide Lastname
            </button>
            <div>{lastNames}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default showHide
