import React, { Component } from 'react'
import { withBreakpoints } from 'react-breakpoints'

import { NavbarContainer, MobileNav, DesktopNav } from './styles'

const sections = ['About Me', 'Projects']

class Navbar extends Component {
  render() {
    const { breakpoints, currentBreakpoint } = this.props
    return (
      <NavbarContainer>
        {sections.map(
          section =>
            breakpoints[currentBreakpoint] <= breakpoints.mobile ? (
              <MobileNav key={section}>{section[0]}</MobileNav>
            ) : (
              <DesktopNav key={section}>{section}</DesktopNav>
            )
        )}
      </NavbarContainer>
    )
  }
}

export default withBreakpoints(Navbar)
