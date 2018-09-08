import React, { Component } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { goToAnchor } from 'react-scrollable-anchor'

import { NavbarContainer, MobileNav, DesktopNav } from './styles'

const sections = ['About Me', 'Projects']
const sectionAnchors = {
  'About Me': 'about',
  Projects: 'project'
}

class Navbar extends Component {
  render() {
    const { breakpoints, currentBreakpoint } = this.props
    return (
      <NavbarContainer>
        {sections.map(section => {
          const anchor = sectionAnchors[section]
          return breakpoints[currentBreakpoint] <= breakpoints.mobile ? (
            <MobileNav key={section} onClick={() => goToAnchor(anchor)}>
              {section[0]}
            </MobileNav>
          ) : (
            <DesktopNav key={section} onClick={() => goToAnchor(anchor)}>
              {section}
            </DesktopNav>
          )
        })}
      </NavbarContainer>
    )
  }
}

export default withBreakpoints(Navbar)
