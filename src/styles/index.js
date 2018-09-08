import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const AppWrapper = styled.div`
  background: #edf2f5;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 50px;
`

export const MyPicture = styled.img`
  background: #353131;
  border-radius: 50%;
  border: 2px solid ${themeGet('colors.primary')};

  margin-top: ${themeGet('sizes.photoOffset')};
  margin-bottom: 15px;

  height: auto;
  width: 200px;
`

export const Header = styled.div`
  background-color: ${themeGet('colors.secondary')};

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  padding-bottom: 10px;

  width: 100%;
`

export const Navbar = styled.div`
  display: block;
  flex: 0 0 20%;

  width: 100%;
`
