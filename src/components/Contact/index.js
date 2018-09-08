import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { SectionTitle } from '../styles'
import { ContactHolder } from './styles'

class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id="contact">
        <ContactHolder>
          <SectionTitle>Contact</SectionTitle>
          <Email>jsteeves@college.harvard.edu</Email>
          <Phone>(508) 446-7586</Phone>
        </ContactHolder>
      </ScrollableAnchor>
    )
  }
}

export default Contact
