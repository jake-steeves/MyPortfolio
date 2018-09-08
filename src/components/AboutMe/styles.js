import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const AboutMeHolder = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin: 40px auto 20px;
  padding: 0 20px;
  max-width: 1000px;
`

export const PersonalBio = styled.div`
  color: ${themeGet('colors.dark')};
`

export const History = styled.div`
  margin-bottom: 15px;
`

export const LookingForwards = styled.div`
  margin-top: 15px;
`
