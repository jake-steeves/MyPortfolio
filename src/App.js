import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import MyInfo from './components/MyInfo'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import { AppWrapper, Header, MyPicture } from './styles'
import myPic from './images/jakeSteeves.png'

library.add(fab)

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header>
            <MyPicture src={myPic} className="myPic" alt="Jake Steeves" />
            <MyInfo />
          </Header>
          <AboutMe />
          <Portfolio />
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default App
