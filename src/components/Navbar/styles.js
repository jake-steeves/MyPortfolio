import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row

  color: ${themeGet('colors.primary')};
  background-color: ${themeGet('colors.secondary')};
  box-shadow: 0 0 2px 2px ${themeGet('colors.dark')};

  height: ${themeGet('sizes.navbarHeight')};
  width: 100%;
`
