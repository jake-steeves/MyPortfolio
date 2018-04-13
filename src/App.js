import React, { Component } from 'react';
import logo from './logo.svg';
import myPic from './croppedpic.jpg';
import './App.css';

const myDetails = {
  myName: "Jake Steeves",
  myUni: "Harvard College",
  myConc: "Computer Science",
  myBirthDay: "06/05/1997"
};


const Info = (props) => (
  <div id="infoHolder">
    <img src={props.picture} id="myPic"/>

    <div id="detailHolder">
      <div>{props.details.myName}</div>
      <div>{props.details.myUni}</div>
      <div>{props.details.myConc}</div>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Info details={myDetails} picture={myPic} /> 
      </div>
/*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Testing</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
*/
    );
  }
}

export default App;
