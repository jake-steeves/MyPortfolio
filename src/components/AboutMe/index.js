import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { SectionTitle } from '../styles'
import { AboutMeHolder, PersonalBio, History, LookingForwards } from './styles'

class AboutMe extends Component {
  render() {
    return (
      <ScrollableAnchor id="about">
        <AboutMeHolder>
          <SectionTitle>About Me</SectionTitle>
          <PersonalBio>
            <History>
              Hi, I&apos;m Jake Steeves! I am a Senior at Harvard College
              studying computer science, but technology is a strong passion of
              mine outside of academics. I started working professionally with
              computers as a systems administration intern in May 2016. At
              Bullhorn, I learned about administering deploys to and upkeep for
              servers that spanned across data centers and the cloud. After
              using shell scripts, Python, and Flask to create automation tools,
              I became enamored with all forms of development, and I started
              using these technologies in personal projects such as the RH
              playlist and a server for GroupMe bots. Since then, I began
              working at HSA DEV, the development organization for Harvard
              Student Agencies. I learned professional software engineering
              skills for frontend and backend applications, and I also
              engineered the systems of production for distributing our large
              and expansive application stacks.
            </History>
            <LookingForwards>
              Looking forward, I am excited to explore technology at all levels
              in both my professional and personal life. Currently, I am
              creating personal projects to practice the skills I gained in
              coding and cloud distribution, and I am interested in
              opportunities that will challenge me to develop experience with
              new technologies.
            </LookingForwards>
          </PersonalBio>
        </AboutMeHolder>
      </ScrollableAnchor>
    )
  }
}

export default AboutMe
