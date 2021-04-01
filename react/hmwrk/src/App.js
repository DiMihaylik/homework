import React from 'react';
import './App.css';
// import Form from './homeWork1/Components/form/form';
// import Input from './hmwrk2/inputs'
import Test from './hmwrk2/test'

class App extends React.Component {
  constructor (props) {
    super (props) 
    this.state = {
      value: 1,
      trigger : 15
    }
  }
  
  handleClick = () => {
    this.setState({
     value:  this.state.value +1 
    })
   }
   
   

  render() {

  return (
    <div className="App">
      <Test trigger = { this.state.trigger } value = { this.state.value } 
      handleClick = { this.handleClick }/>
      {/* <Input/> */}
     {/* <Form/> */}
    </div>
    );
  }
}
export default App;
