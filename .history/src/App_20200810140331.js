import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{

  state = {
    advice : ''
  }
 componentDidMount(){
    this.getAdvice()
  }

  getAdvice = ()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response) =>{
      const { advice } =response.data.slip.advice;
    })

  }
  
  render(){
    return(
      <div>
        <h1> {this.state.advice}</h1>

        <button onClick = {this.getAdvice}>click me</button>
      </div>
    )
  }
}


export default App