import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{

  state = {
    advice : null
  }
 componentDidMount(){
   axios.get('https://api.adviceslip.com/advice')
    .then(response => console.log(response.data.slip) )

  }
  render(){
    return(
      <h1> Hello world </h1>
    )
  }
}


export default App