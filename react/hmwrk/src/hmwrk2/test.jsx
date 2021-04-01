import React from 'react'
import './test.css'

class Test extends React.Component {
 
  costulb = () => console.log('Avoid Error!')  

  shouldComponentUpdate(props){
    if(props.value <= props.trigger){
      return true
    } 
    return false
  }

  

render() {

  return (
<div className = 'div'>
  <input onChange = { this.costulb } value = { this.props.value }></input>
  <button onClick = { this.props.handleClick }>Add +1</button>
</div>
    )
  }
}

export default Test