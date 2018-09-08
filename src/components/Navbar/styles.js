import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  &:hover > svg {
    filter: drop-shadow(0 0 1px ${themeGet('colors.primary')});
  }
`

export const DesktopNav = NavbarOption.extend`
  width: 200px;

  &:hover {
    font-weight: bold;
  }
`

export const NavIcon = styled(FontAwesomeIcon)`
  color: ${themeGet('colors.primary')};
  font-size: 18px;
  padding: 4px;
`
