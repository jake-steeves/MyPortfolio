import React from 'react'
import moment from 'moment'

import {
  DetailHolder,
  Name,
  Profession,
  Employer,
  EmployerLink
} from './styles'

const details = {
  name: 'Jake Steeves',
  profession: 'Chief Technical Officer for DEV Cloud',
  employer: 'HSA DEV',
  employerLink: 'https://www.dev.hsa.net',
  location: 'Cambridge, MA',
  university: 'Harvard College',
  concentration: 'Computer Science',
  birthday: moment()
    .date(5)
    .month(5)
    .year(1997) // June 5th, 1997
}

const MyInfo = () => {
  const { name, profession, location, employer, employerLink } = details
  return (
    <DetailHolder>
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
      <Employer>
        at <EmployerLink href={employerLink}>{employer}</EmployerLink> in{' '}
        {location}
      </Employer>
    </DetailHolder>
  )
}

export default MyInfo
