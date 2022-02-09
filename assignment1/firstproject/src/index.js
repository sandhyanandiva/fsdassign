import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/lizardimage.jpg'
import Component from './Component.js';
import './styles.css'

ReactDOM.render(

  <div>
    <center>
      <img className='imag' src={logo}/>
      <Component />
    </center>
  </div>,
  document.getElementById("root"),
)