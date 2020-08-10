import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{

  state = {
    advice : null
  }
  async componentDidMount(){
    const response = await axios.get('https://api.adviceslip.com/advice')
    .then(response => re )

  }
  render(){
    return(
      <h1> Hello world </h1>
    )
  }
}


export default App