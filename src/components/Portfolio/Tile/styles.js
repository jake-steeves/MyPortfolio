import styled from 'styled-components'

export const ModalWrapper = styled.div`
  flex: 0 0 25%;
  margin: 2%;
`

export const ProjectPreview = styled.div`
  background-image: url(${props => props.background});
  box-shadow: 0 0 1px 3px #0d0c0c;
  border-radius: 5px;

  color: #edf3f8;
  text-shadow: 1px 1px #0d0c0c;
  cursor: pointer;

  background-position: 50% 50%;
  background-size: cover;

  display: flex;
  flex-direction: column;

  font-family: 'Roboto', 'sans-serif';

  height: 250px;

  margin: 5px;
  padding: 20px;

  &:hover {
    box-shadow: 0 0 2px 4px #0d0c0c;
  }
`

export const PreviewTitle = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
`

export const ExpandedDetails = styled.div`
  cursor: auto;
`

export const ExpandedTitle = styled.div`
  font-size: 36px;
  margin-bottom: 20px;

  text-align: center;
`

export const TechnicalDetails = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 20px;
`

export const LinksHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 0 60%;
  justify-content: center;
`

export const ProjectLink = styled.div`
  margin: 5px 10px;
`

export const LanguagesHolder = styled.div`
  display: flex;
  flex-flow: row wrap;

  flex: 0 35%;
  justify-content: center;
`

export const Language = styled.div`
  box-shadow: 0 0 1px 2px #423d3d;
  border-radius: 10px;

  height: 25px;
  font-size: 14px;

  flex: 0 30%;

  margin: 5px 5px;
  padding: 10px 0 0 0;
  text-align: center;
`
