import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavbarContainer = styled.div`
  position: fixed;
  background-color: ${themeGet('colors.secondary')};
  box-shadow: 0 0 2px 2px ${themeGet('colors.dark')};

  height: ${themeGet('sizes.navbarHeight')};
  width: 100%;
`

export const NavbarOptions = styled.div`
  display: flex;
  flex-direction: row

  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1100px;
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
    background-color: ${themeGet('colors.primary')};
    color: ${themeGet('colors.secondary')};
  }
`

export const NavIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  padding: 4px;
`

export const NavSectionTitle = styled.div`
  margin-left: 15px;
  font-size: 20px;

  letter-spacing: 0.25px;
`
