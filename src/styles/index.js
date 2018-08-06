import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const AppWrapper = styled.div`
  background: #edf2f5;
  min-height: 100vh;
  width: 100%;
`

export const MyPicture = styled.img`
  background: #353131;
  border-radius: 50%;
  box-shadow: 0px 1px 2px 3px #353131;

  margin: -7.5% 0 0 10%;

  height: auto;
  width: 15%;
`

export const Header = styled.div`
  background-color: ${themeGet('colors.secondary')};
  box-shadow: 0px 2px 1px 2px #0d0c0c;

  display: flex;
  flex-direction: column;

  height: 35vh;
  width: 100%;
`

export const Navbar = styled.div`
  display: block;
  flex: 0 0 20%;

  width: 100%;
`
