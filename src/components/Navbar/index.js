import React from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { goToAnchor } from 'react-scrollable-anchor'

import {
  NavbarContainer,
  NavbarOptions,
  MobileNav,
  DesktopNav,
  NavSectionTitle,
  NavIcon
} from './styles'

const sections = ['Home', 'About Me', 'Projects']
const sectionAnchors = {
  Home: 'home',
  'About Me': 'about',
  Projects: 'projects'
}

const sectionIcons = {
  Home: 'home',
  'About Me': 'user',
  Projects: 'folder-open'
}

const NavSection = props => {
  const {
    section,
    breakpointInfo: { breakpoints, currentBreakpoint }
  } = props
  const anchor = sectionAnchors[section]

  return breakpoints[currentBreakpoint] <= breakpoints.mobile ? (
    <MobileNav key={section} onClick={() => goToAnchor(anchor)}>
      <NavIcon icon={sectionIcons[section]} />
    </MobileNav>
  ) : (
    <DesktopNav key={section} onClick={() => goToAnchor(anchor)}>
      <NavIcon icon={sectionIcons[section]} />
      <NavSectionTitle>{section}</NavSectionTitle>
    </DesktopNav>
  )
}

const Navbar = props => (
  <NavbarContainer>
    <NavbarOptions>
      {sections.map(section => (
        <NavSection
          key={section}
          section={section}
          breakpointInfo={{ ...props }}
        />
      ))}
    </NavbarOptions>
  </NavbarContainer>
)

export default withBreakpoints(Navbar)
