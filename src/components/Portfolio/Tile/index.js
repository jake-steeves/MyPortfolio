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
  Technology
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
      <div>{description}</div>
    </ExpandedDetails>
  )
}

export default class Tile extends Component {
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
    const { image, showModal } = this.state
    return (
      <ModalWrapper>
        <ProjectPreview onClick={this.handleOpenModal} background={image}>
          <PreviewTitle>{this.props.blurb}</PreviewTitle>
        </ProjectPreview>
        <Modal
          isOpen={showModal}
          contentLabel="fullProjectInfo"
          onRequestClose={this.handleCloseModal}
          className="modalExpanded"
          overlayClassName="modalOverlay"
        >
          <button type="button" onClick={this.handleCloseModal}>
            X
          </button>
          <TileExpanded {...this.props} />
        </Modal>
      </ModalWrapper>
    )
  }
}
