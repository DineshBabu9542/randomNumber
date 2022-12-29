// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onGenerateNum = () => {
    const randomNum = this.getRandomNum()
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="btn-container">
            <button className="btn" type="button" onClick={this.onGenerateNum}>
              Generate
            </button>
          </div>
          <p className="gen-num">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
