import React, { Component } from 'react'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import ReactBreakpoints from 'react-breakpoints'
import { ThemeProvider } from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faFolderOpen,
  faBuilding,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import breakpoints from './breakPoints'
import theme from './theme'

import Navbar from './components/Navbar'
import MyInfo from './components/MyInfo'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import { AppWrapper, Header, MyPicture } from './styles'

library.add(fab, faHome, faUser, faFolderOpen, faBuilding, faTimesCircle)
configureAnchors({ offset: -60 })

class App extends Component {
  render() {
    return (
      <ReactBreakpoints breakpoints={breakpoints}>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <ScrollableAnchor id="home">
              <Header>
                <Navbar />
                <MyPicture
                  src="/jakeSteeves.png"
                  className="myPic"
                  alt="Jake Steeves"
                />
                <MyInfo />
              </Header>
            </ScrollableAnchor>
            <AboutMe />
            <Portfolio />
          </AppWrapper>
        </ThemeProvider>
      </ReactBreakpoints>
    )
  }
}

export default App
