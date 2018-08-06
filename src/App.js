import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import MyInfo from './components/MyInfo'
import Portfolio from './components/Portfolio'
import { AppWrapper, Header, MyPicture, Navbar } from './styles'
import myPic from './images/myPicture.jpg'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header>
            <Navbar />
            <MyInfo />
          </Header>
          <MyPicture src={myPic} className="myPic" alt="Jake Steeves" />
          <Portfolio />
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default App
