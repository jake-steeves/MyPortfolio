import React, { Component } from 'react'
import Tile from './Tile'
import projects from './projects'

import { SectionTitle } from '../styles'
import { PortfolioHolder, TileWrapper } from './styles'

class Portfolio extends Component {
  render() {
    return (
      <PortfolioHolder>
        <SectionTitle>Projects</SectionTitle>
        <TileWrapper>
          {projects.map(project => (
            <Tile {...project} />
          ))}
        </TileWrapper>
      </PortfolioHolder>
    )
  }
}

export default Portfolio
