import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{

  state = {
    advice : null
  }
 componentDidMount(){
    this.getAdvice()

  }

  getAdvice = ()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      this.setState({advice : response.data.slip.advice})
    } )
  }
  consoel.log()
  render(){
    return(
      <h1> Hello world </h1>

      <button onClick = {this.getAdvice}>click me</button>
    )
  }
}


export default App