// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  Increment = () => {
    const randomNum = Math.floor(Math.random() * 99) + 1
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="Container">
        <div className="sub-Container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">{isEven}</p>
          <button type="button" className="btn" onClick={this.Increment}>
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
