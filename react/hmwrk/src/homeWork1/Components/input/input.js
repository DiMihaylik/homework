import React from 'react' 
import './input.css'

class Input extends React.Component {
  
  render() {
    return (
      <div className = 'div'>
        <label>{ this.props.text }
        <input placeholder = { this.props.text }/>
        </label>
      </div>
    )
  }
}

export default Input