import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const SectionTitle = styled.div`
  color: ${themeGet('colors.secondary')};

  font-family: ${themeGet('fonts.serif')};
  font-size: ${themeGet('sizes.sectionTitle')};
  font-weight: bold;

  margin-bottom: 10px;
`
