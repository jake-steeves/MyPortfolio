import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const DetailHolder = styled.div`
  color: #edf3f8;

  display: flex;

  flex-direction: column;
  justify-content: center;

  font-size: 24px;
  font-family: 'Roboto', 'sans-serif';
  text-align: center;

  overflow: hidden;

  width: 80%;
`

export const Name = styled.div`
  font-size: 22px;
  margin-bottom: 4px;
`

export const Profession = styled.div`
  font-size: 18px;
  margin-bottom: 2px;
`

export const Employer = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`

export const EmployerLink = styled.a.attrs({ target: '_blank' })`
  color: ${themeGet('colors.primary')};
  text-decoration: none;
`
