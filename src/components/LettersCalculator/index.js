// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputEle: ''}

  inputElesave = event => {
    this.setState({inputEle: event.target.value})
  }

  render() {
    const {inputEle} = this.state
    const wordLength = inputEle.length
    return (
      <div className="bg-container">
        <div className="container1">
          <h1>Calculate the Letters You Enter</h1>
          <label htmlFor="input-ele">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.inputElesave}
            id="input-ele"
          />
          <p className="letter-count-container">No.of letters: {wordLength}</p>
        </div>
        <div className="container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
