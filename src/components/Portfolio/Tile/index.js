import React, { Component } from 'react'
import Modal from 'react-modal'
import {
  ModalWrapper,
  ProjectPreview,
  PreviewTitle,
  ProjectCloseIcon,
  ExpandedTitle,
  ExpandedDetails,
  DetailsHolder,
  LinksHolder,
  ProjectLink,
  TechnologiesHolder,
  Technology,
  Description
} from './styles'
import './modalStyles.css'

const TechnologyIcon = props => {
  const { technology } = props
  return <Technology>{technology}</Technology>
}

const TechnologyDetails = props => {
  const { technologies } = props
  return (
    <TechnologiesHolder>
      {technologies.map(technology => (
        <TechnologyIcon key={technology} technology={technology} />
      ))}
    </TechnologiesHolder>
  )
}

const ProjectLinks = props => {
  const { codeLink, demoLink } = props
  return (
    <LinksHolder>
      {codeLink && (
        <ProjectLink href={codeLink} target="_blank">
          {codeLink}
        </ProjectLink>
      )}
      {demoLink && (
        <ProjectLink href={demoLink} target="_blank">
          {demoLink}
        </ProjectLink>
      )}
    </LinksHolder>
  )
}

const TileExpanded = props => {
  const { title, description } = props
  return (
    <ExpandedDetails>
      <ExpandedTitle>{title}</ExpandedTitle>
      <DetailsHolder>
        <ProjectLinks {...props} />
        <TechnologyDetails {...props} />
      </DetailsHolder>
      <Description>{description}</Description>
    </ExpandedDetails>
  )
}

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  componentWillMount() {
    Modal.setAppElement('body')
  }

  handleOpenModal = () => this.setState({ showModal: true })

  handleCloseModal = () => this.setState({ showModal: false })

  render() {
    const {
      handleOpenModal,
      handleCloseModal,
      props,
      state: { showModal }
    } = this
    const { image, title } = props
    return (
      <ModalWrapper>
        <ProjectPreview onClick={handleOpenModal} background={image}>
          <PreviewTitle>{title}</PreviewTitle>
        </ProjectPreview>
        <Modal
          isOpen={showModal}
          contentLabel="fullProjectInfo"
          onRequestClose={handleCloseModal}
          className="modalExpanded"
          overlayClassName="modalOverlay"
        >
          <ProjectCloseIcon onClick={handleCloseModal} />
          <TileExpanded {...props} />
        </Modal>
      </ModalWrapper>
    )
  }
}

export default Tile
