import React, { Component } from 'react';
import moment from "moment";
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Yolanda Portfolio</h1>
        <div>
        {moment().format('YYYY [escaped] YYYY')}; 
        </div>
      </div>
    );
  }
}
