import React, { Component } from 'react'
import Modal from 'react-modal'
import {
  ModalWrapper,
  ProjectPreview,
  PreviewTitle,
  ExpandedDetails,
  ExpandedTitle,
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
      showModal: false,
      image: ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  componentWillMount() {
    const image = require(`./images/${this.props.image}`)
    Modal.setAppElement('body')
    this.setState({ image })
  }

  handleOpenModal = () => this.setState({ showModal: true })

  handleCloseModal = () => this.setState({ showModal: false })

  render() {
    const {
      handleOpenModal,
      handleCloseModal,
      props,
      state: { image, showModal }
    } = this
    return (
      <ModalWrapper>
        <ProjectPreview onClick={handleOpenModal} background={image}>
          <PreviewTitle>{props.title}</PreviewTitle>
        </ProjectPreview>
        <Modal
          isOpen={showModal}
          contentLabel="fullProjectInfo"
          onRequestClose={handleCloseModal}
          className="modalExpanded"
          overlayClassName="modalOverlay"
        >
          <button type="button" onClick={handleCloseModal}>
            X
          </button>
          <TileExpanded {...props} />
        </Modal>
      </ModalWrapper>
    )
  }
}

export default Tile
