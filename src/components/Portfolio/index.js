import React, { Component } from 'react'
import Tile from './Tile'
import projects from './projects'

import { PortfolioHolder, PortfolioTitle, TileWrapper } from './styles'

class Portfolio extends Component {
  render() {
    return (
      <PortfolioHolder>
        <PortfolioTitle>Portfolio</PortfolioTitle>
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
