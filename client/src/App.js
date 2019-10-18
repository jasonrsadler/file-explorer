import React, { Component } from 'react';
import FileGrid from './components/filegrid'
import FileInput from './components/fileInput'
import './App.css'
import { connect } from 'react-redux'
import * as actions from './actions/documentActions'
import { bindActionCreators } from '../../../../../Users/Jason/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

class App extends Component {  
  get actions () {
    return this.props.actions
  }

  componentDidMount () {
    actions.getDocuments()
  }

  getServerFiles = () => {
    actions.getDocuments()
  }

  handleSubmit(event){
    event.preventDefault();
    const fileInput = document.querySelector('#fileupload');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
  }

  deleteFile = (filename) => {
    
  }

  inputChanged = (e) => {
    const filename = e.target.value.substring(e.target.value.lastIndexOf('\\') + 1)
    this.setState({
      inputFile: filename + ' ready for upload',
      submitEnabled: true
    })
  }

  render () {
    const { files, inputFile, submitEnabled } = this.props
    return (
      <div className="App">
        <div className="title">
          Kraken File Explorer Assessment
        </div>
        <FileInput 
          inputFile={inputFile}
          inputChanged={this.inputChanged}
          handleSubmit={this.handleSubmit}
          submitEnabled={submitEnabled}
        />
        {
          files.length ? 
            <FileGrid 
              files={files} 
              onDelete={this.deleteFile}/>
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { files: state.files }
}

export const mapDispatchToProps = (dispatch) => {
  const {
    getDocuments,
    uploadDocument,
    deleteDocument
  } = actions
  return bindActionCreators({
    getDocuments,
    uploadDocument,
    deleteDocument
  }, dispatch)
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)
