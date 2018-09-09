import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DetailHolder = styled.div`
  color: #edf3f8;

  display: flex;

  flex-direction: column;
  justify-content: center;

  font-size: 24px;
  font-family: 'Roboto', 'sans-serif';
  text-align: center;

  overflow: hidden;

  width: 400px;
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

export const Email = styled.div`
  font-size: 16px;
  margin-bottom: 2px;
`

export const Phone = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
`

export const OtherLinks = styled.div`
  display: flex;

  justify-content: center;
`

export const LinkIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  font-size: 24px;

  margin: 0px 10px 10px;

  color: ${themeGet('colors.primary')};
`

export const Link = styled.a.attrs({ target: '_blank' })`
  text-decoration: none;
`
