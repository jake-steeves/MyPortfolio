import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const PortfolioHolder = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

export const PortfolioTitle = styled.div`
  color: ${themeGet('colors.secondary')};

  font-size: ${themeGet('sizes.sectionTitle')};
  font-weight: bold;

  margin: 20px 0 10px;
`

export const TileWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  justify-content: center;

  width: 100%;
`
