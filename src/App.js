import React, { Component } from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import ReactBreakpoints from 'react-breakpoints'
import { ThemeProvider } from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBuilding,
  faUser,
  faFolderOpen
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import breakpoints from './breakPoints'
import theme from './theme'

import Navbar from './components/Navbar'
import MyInfo from './components/MyInfo'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import { AppWrapper, Header, MyPicture } from './styles'
import myPic from './images/jakeSteeves.png'

library.add(fab, faBuilding, faUser, faFolderOpen)
configureAnchors({ offset: -60 })

class App extends Component {
  render() {
    return (
      <ReactBreakpoints breakpoints={breakpoints}>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <Header>
              <Navbar />
              <MyPicture src={myPic} className="myPic" alt="Jake Steeves" />
              <MyInfo />
            </Header>
            <AboutMe />
            <Portfolio />
          </AppWrapper>
        </ThemeProvider>
      </ReactBreakpoints>
    )
  }
}

export default App
