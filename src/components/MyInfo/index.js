import React from 'react'

import {
  DetailHolder,
  Name,
  Profession,
  Employer,
  EmployerLink,
  Email,
  Phone,
  OtherLinks,
  Link,
  LinkIcon
} from './styles'

const details = {
  name: 'Jake Steeves',
  profession: 'Chief Technical Officer for DEV Cloud',
  employer: 'HSA DEV',
  location: 'Cambridge, MA',
  email: 'jsteeves@college.harvard.edu',
  phone: '(508) 446-7586',
  employerUrl: 'https://www.dev.hsa.net',
  linkedinUrl: 'https://www.linkedin.com/in/jake-steeves-636bb611b/',
  githubUrl: 'https://github.com/jake-steeves'
}

const OtherPages = props => {
  const { employerUrl, linkedinUrl, githubUrl } = props.urls
  return (
    <OtherLinks>
      <Link href={employerUrl}>
        <LinkIcon icon="building" />
      </Link>
      <Link href={linkedinUrl}>
        <LinkIcon icon={['fab', 'linkedin']} />
      </Link>
      <Link href={githubUrl}>
        <LinkIcon icon={['fab', 'github']} />
      </Link>
    </OtherLinks>
  )
}

const MyInfo = () => {
  const {
    name,
    profession,
    location,
    employer,
    email,
    phone,
    employerUrl,
    linkedinUrl,
    githubUrl
  } = details
  return (
    <DetailHolder>
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
      <Employer>
        at <EmployerLink href={employerUrl}>{employer}</EmployerLink> in{' '}
        {location}
      </Employer>
      <Email>{email}</Email>
      <Phone>{phone}</Phone>
      <OtherPages urls={{ employerUrl, linkedinUrl, githubUrl }} />
    </DetailHolder>
  )
}

export default MyInfo
