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

const Navbar = (props) => (
  // TODO: add a navbar
  <div class="navbar"></div>
);

const Header = (props) => (
  <div class="header">
    <Navbar />
    <div class="detailHolder">
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
      <div class="wrapper">
        <Header details={myDetails} age={App.getAge()} /> 
        <img src={myPic} class="myPic"/>
      </div>
    );
  }
}

export default App;
