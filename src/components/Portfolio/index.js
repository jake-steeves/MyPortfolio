import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import Tile from './Tile'
import projects from './projects'

import { SectionTitle } from '../styles'
import { PortfolioHolder, TileWrapper } from './styles'

class Portfolio extends Component {
  render() {
    return (
      <ScrollableAnchor id="projects">
        <PortfolioHolder>
          <SectionTitle>Projects</SectionTitle>
          <TileWrapper>
            {projects.map(project => (
              <Tile {...project} />
            ))}
          </TileWrapper>
        </PortfolioHolder>
      </ScrollableAnchor>
    )
  }
}

export default Portfolio
