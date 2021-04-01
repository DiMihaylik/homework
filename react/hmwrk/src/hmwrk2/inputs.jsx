import React from 'react'
import './inputs.css'

class Input extends React.Component {
  constructor (props) {
    super (props) 
    this.state = { 
      inputValue: 0
    }
  }
  render() {
    const handleRange = (e) => {
      this.setState({
        inputValue: e.target.value
      })
    }
    const costulb = () => console.log('costulb') 
    return (
      <div className = 'div'>
        <input onChange = { handleRange } type = 'range' min = '1' max = '100'></input>
        <input onChange = { costulb } value = { this.state.inputValue }></input>
      </div>
    )
  }
}



export default Input