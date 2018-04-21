import React, { Component } from 'react';
import Tile from './Tile.js';
import projects from './projects.js';

// imports for styling
import myPic from './croppedpic.jpg';
import './App.css';
import './Tile.css';

const myDetails = {
  myName: "Jake Steeves",
  myUni: "Harvard College",
  myConc: "Computer Science",
  myBirthDay: new Date(1997, 6, 5)
};

const Navbar = (props) => (
  // TODO: add a navbar
  <div className="navbar"></div>
);

const Header = (props) => (
  <div className="header">
    <Navbar />
    <div className="detailHolder">
      <div>{props.details.myName}</div>
      <div>{props.details.myUni}</div>
      <div>{props.details.myConc}</div>
      <div>Age {props.age}</div>
    </div>
  </div>
);

export default class App extends Component {
  static getAge() {
    let msDiff = Date.now() - myDetails.myBirthDay;
    let ageDate = new Date(msDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <div className="wrapper">
        <Header details={myDetails} age={App.getAge()} /> 
        <img src={myPic} className="myPic"/>

        <div className="tileWrapper">
          {projects.map(project => (
            <Tile {...project} /> 
          ))}
        </div>
      </div>
    );
  }
}
