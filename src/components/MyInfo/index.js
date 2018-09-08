import React from 'react'

import {
  DetailHolder,
  Name,
  Profession,
  Employer,
  EmployerLink,
  Email,
  Phone
} from './styles'

const details = {
  name: 'Jake Steeves',
  profession: 'Chief Technical Officer for DEV Cloud',
  employer: 'HSA DEV',
  employerLink: 'https://www.dev.hsa.net',
  location: 'Cambridge, MA',
  email: 'jsteeves@college.harvard.edu',
  phone: '(508) 446-7586'
}

const MyInfo = () => {
  const {
    name,
    profession,
    location,
    employer,
    employerLink,
    email,
    phone
  } = details
  return (
    <DetailHolder>
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
      <Employer>
        at <EmployerLink href={employerLink}>{employer}</EmployerLink> in{' '}
        {location}
      </Employer>
      <Email>{email}</Email>
      <Phone>{phone}</Phone>
    </DetailHolder>
  )
}

export default MyInfo
