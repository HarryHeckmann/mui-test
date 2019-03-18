import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MenuRounded from '@material-ui/icons/MenuRounded'
import AppBar from '@material-ui/core/AppBar'

import './Header.css'

const Header = () => (

<div>
<AppBar position='fixed' style={{backgroundColor: 'grey', boxShadow: 'none'}} id='appBar'>
    <Typography variant='h4'>up<span style={{color: "#EF4E4E"}}>date</span></Typography>
    <div id='loginSignup'>
        <Typography variant='h4' style={{borderRight: '2px solid white', paddingRight: '10px'}}>Login</Typography>
        <Typography variant='h4' style={{color: "#EF4E4E", fontFamily: 'Yellowtail', fontSize: '200%', fontWeight: 'bold', marginLeft: '10px'}}>Signup</Typography>
    </div>
</AppBar>

</div>
  
)

export default Header;
