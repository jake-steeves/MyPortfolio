import React, { Component } from 'react'
import { withBreakpoints } from 'react-breakpoints'

import { NavbarContainer } from './styles'

const sections = ['About Me', 'Projects']

class Navbar extends Component {
  render() {
    const { breakpoints, currentBreakpoint } = this.props
    return (
      <NavbarContainer>
        {sections.map(
          section =>
            breakpoints[currentBreakpoint] <= breakpoints.mobile ? (
              <div key={section}>{section[0]}</div>
            ) : (
              <div key={section}>{section}</div>
            )
        )}
      </NavbarContainer>
    )
  }
}

export default withBreakpoints(Navbar)
