import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Test from './Components/Test'
import Button from '@material-ui/core/Button'
import './App.css'

const App = () => (
<div className='App'>
  <Header/>
  <div id='main'>
    <Button variant='contained' color='primary' style={{fontFamily: 'Roboto', backgroundColor: 'blue'}}>Button 1</Button>
    {/* <Button variant='flat' color='secondary'>Button 2</Button> */}

  </div>
  <Test/>
</div>
  
)

export default App;
