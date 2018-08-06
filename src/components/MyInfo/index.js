import React from 'react'
import moment from 'moment'

import { DetailHolder } from './styles'

const details = {
  name: 'Jake Steeves',
  university: 'Harvard College',
  concentration: 'Computer Science',
  birthday: moment()
    .date(5)
    .month(5)
    .year(1997) // June 5th, 1997
}

const MyInfo = () => {
  const { name, university, concentration, birthday } = details
  const age = moment().diff(birthday, 'years')
  return (
    <DetailHolder>
      <div>{name}</div>
      <div>{university}</div>
      <div>{concentration}</div>
      <div>{age}</div>
    </DetailHolder>
  )
}

export default MyInfo
