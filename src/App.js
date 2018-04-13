import React, { Component } from 'react';
import myPic from './croppedpic.jpg';
import background from './dark_bg.png';
import './App.css';

const myDetails = {
  myName: "Jake Steeves",
  myUni: "Harvard College",
  myConc: "Computer Science",
  myBirthDay: new Date(1997, 6, 5)
};


const Info = (props) => (
  <div id="infoHolder">
    <div id="detailHolder">
      <div>{props.details.myName}</div>
      <div>{props.details.myUni}</div>
      <div>{props.details.myConc}</div>
      <div>Age {props.age}</div>
    </div>
  </div>
);

class App extends Component {
  static getAge() {
    let msDiff = Date.now() - myDetails.myBirthDay;
    let ageDate = new Date(msDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <div id="wrapper">
        <Info details={myDetails} age={App.getAge()} /> 
        <img src={myPic} id="myPic"/>
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
