import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{

  state = {
    advice : null
  }
 componentDidMount(){


  }

  getAdvice = ()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      this.setState({advice : response.data})
    } )
  }
  render(){
    return(
      <h1> Hello world </h1>
    )
  }
}


export default App