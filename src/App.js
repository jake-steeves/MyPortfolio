import React, { Component } from 'react'
import MyInfo from './components/MyInfo'
import Portfolio from './components/Portfolio'
import { AppWrapper, Header, MyPicture, Navbar } from './styles'
import myPic from './images/myPicture.jpg'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <Navbar />
          <MyInfo />
        </Header>
        <MyPicture src={myPic} className="myPic" alt="Jake Steeves" />
        <Portfolio />
      </AppWrapper>
    )
  }
}

export default App
