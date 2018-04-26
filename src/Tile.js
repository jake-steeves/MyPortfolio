import React, { Component } from 'react';
import Modal from 'react-modal';

const TilePreview = (props) => (
  <div className="previewDetails"> 
    <div className="prevTitle">{props.title}</div>
    <div>{props.blurb}</div>
  </div>
);

const Language = (props) => (
  <div className="languageIcon">{props.title}</div>
);

// noticing a "bug" where clicking on the links works but also closes the tile.
// tiles are wrapped in an onclick div and that gets clicked with the link
const TechnicalDetails = (props) => (
  <div className="technicalDetails">
    <div className="linksHolder">
      {props.codeLink && (<a href={props.codeLink} target="_blank">{props.codeLink}</a>)}
      {props.demoLink && (<a href={props.demoLink} target="_blank">{props.demoLink}</a>)}
    </div>
    <div className="languagesHolder">
      {props.languages.map((language, i) => (<Language key={i} title={language} />))}
    </div>
  </div>
)

// TODO: add more styling, images. Custom colors and themes for tiles?
const TileExpanded = (props) => (
  <div className="expandedDetails"> 
    <div className="expTitle">{props.title}</div>
    <TechnicalDetails {...props} />
    <div className="description">{props.description}</div>
  </div>
);

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'showModal': false,
      'image': ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  changeTile() {
    this.setState(prevState => ({
      'showModal': !prevState.showModal
      //'tileClass': !prevState.isExpanded ? 'expanded' : 'preview'
    }));
  }

  componentWillMount() {
      Modal.setAppElement('body');
      this.setState({ 'image': require('./' + this.props.image)});
  }

  render() {
    return (
      <div className="modalWrapper">
        <div className="preview" onClick={this.handleOpenModal} 
            style={{backgroundImage: `url(${this.state.image})`}}>
          <TilePreview {...this.props} />
        </div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="fullProjectInfo"
          onRequestClose={this.handleCloseModal}
          className="expanded"
          overlayClassName="overlay">
          <button onClick={this.handleCloseModal}>X</button>
          <TileExpanded {...this.props} />
        </Modal>
      </div>
    )
  }
}

