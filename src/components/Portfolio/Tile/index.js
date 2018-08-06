import React, { Component } from 'react'
import Modal from 'react-modal'
import {
  ModalWrapper,
  ProjectPreview,
  PreviewTitle,
  ExpandedDetails,
  ExpandedTitle,
  TechnicalDetails,
  LinksHolder,
  ProjectLink,
  LanguagesHolder,
  Language
} from './styles'
import './modalStyles.css'

const TilePreview = props => {
  const { title, blurb } = props
  return (
    <div>
      <PreviewTitle>{title}</PreviewTitle>
      <div>{blurb}</div>
    </div>
  )
}

const LanguageIcon = props => {
  const { language } = props
  return <Language>{language}</Language>
}

// noticing a "bug" where clicking on the links works but also closes the tile.
// tiles are wrapped in an onclick div and that gets clicked with the link
const TechnicalInfo = props => {
  const { codeLink, demoLink, languages } = props
  return (
    <TechnicalDetails>
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
      <LanguagesHolder>
        {languages.map(language => (
          <LanguageIcon key={language} language={language} />
        ))}
      </LanguagesHolder>
    </TechnicalDetails>
  )
}

// TODO: add more styling, images. Custom colors and themes for tiles?
const TileExpanded = props => {
  const { title, description } = props
  return (
    <ExpandedDetails>
      <ExpandedTitle>{title}</ExpandedTitle>
      <TechnicalInfo {...props} />
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
          <TilePreview {...this.props} />
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
