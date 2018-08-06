import React, { Component } from 'react'
import Tile from './Tile'
import projects from './projects'

import { TileWrapper } from './styles'

class Portfolio extends Component {
  render() {
    return (
      <TileWrapper>
        {projects.map(project => (
          <Tile {...project} />
        ))}
      </TileWrapper>
    )
  }
}

export default Portfolio
