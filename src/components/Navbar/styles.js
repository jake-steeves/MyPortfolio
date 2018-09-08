import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row

  background-color: ${themeGet('colors.secondary')};
  box-shadow: 0 0 2px 2px ${themeGet('colors.dark')};

  height: ${themeGet('sizes.navbarHeight')};
  width: 100%;
`

const NavbarOption = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  color: ${themeGet('colors.primary')};
  box-shadow: 0 0 2px 2px ${themeGet('colors.dark')};

  cursor: pointer;
`

export const MobileNav = NavbarOption.extend`
  width: 100px;
`

export const DesktopNav = NavbarOption.extend`
  width: 200px;

  &:hover {
    font-weight: bold;
  }
`
