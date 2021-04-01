import React from 'react'
import Input from '../input/input'
import './form.css'

class Form extends React.Component {

  render() {
    return (
      <div>
        <form className = 'form'>
          <h1>Form</h1>
        <Input text = 'Email'/>
        <Input text = 'Pass'/>
        <Input text = 'Name'/>
        </form>
      </div>
    )

  }

}

export default Form
