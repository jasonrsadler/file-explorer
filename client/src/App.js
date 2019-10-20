import React, { Component } from 'react';
import FileGrid from './components/filegrid'
import FileInput from './components/fileInput'
import './App.css'
import { connect } from 'react-redux'
import * as actions from './actions/documentActions'

class App extends Component {  
  constructor(props) {
    super(props);
    this.props.getDocuments()
  }

  get actions () {
    return this.props.actions
  }

  uploadDocument = (e) =>{
    e.preventDefault();
    const fileInput = document.querySelector('#fileupload');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    this.props.uploadDocument(formData)
  }

  deleteFile = (filename) => {
    const fetchBody = {
      file: filename
    }
    this.props.deleteDocument(fetchBody)
  }

  inputChanged = (e) => {
    const filename = e.target.value.substring(e.target.value.lastIndexOf('\\') + 1)
    this.props.inputChanged(filename)
  }

  render () {
    const { files, inputFile, submitEnabled, serverError } = this.props
    return (
      <div className="App">
        <div className="title">
          Kraken File Explorer Assessment
        </div>
        <FileInput 
          inputFile={inputFile}
          inputChanged={this.inputChanged}
          uploadDocument={this.uploadDocument}
          submitEnabled={submitEnabled}
        />
        {
          serverError ?
            <div className='server-error'>
              An error occurred performing the operation
            </div>
          : null
        }
        {
          files.length ? 
            <FileGrid 
              files={files} 
              onDelete={this.deleteFile}/>
            : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    inputFile: state.inputFile,
    submitEnabled: state.submitEnabled,
    files: state.files,
    serverError: state.serverError
  })
}

export const mapDispatchToProps = (dispatch) => {
  return ({
    uploadDocument: (formData) => {
      dispatch(actions.uploadDocument(formData))
    },
    inputChanged: (filename) => {
      dispatch(actions.onFileSubmitChanged(filename))
    },
    getDocuments: () => {
      dispatch(actions.getDocuments())
    },
    deleteDocument: (fetchBody) => {
      dispatch(actions.deleteDocument(fetchBody))
    }
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)
