import React, { Component } from 'react';
import FileGrid from './components/Filegrid'
import FileInput from './components/FileInput'
import './App.css'
const url = 'http://localhost:8000/api/documents'

class App extends Component {  
  constructor() {
    super();
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {
      files: [],
      inputFile: '',
      submitEnabled: false
    }
    this.getServerFiles()
  }

  getServerFiles = () => {
    fetch(url, {
      method: 'GET'
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(data => {
      this.setState({
        files: data
      }) 
    })
  }

  handleSubmit(event){
    this.setState({
      inputFile: '',
      submitEnabled: false
    })
    event.preventDefault();
    const fileInput = document.querySelector('#fileupload');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.getServerFiles()
    })
  }

  deleteFile = (filename) => {
    const fetchBody = {
      file: filename
    }
    console.log(filename)
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fetchBody)
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.getServerFiles()
    })
  }

  inputChanged = (e) => {
    const filename = e.target.value.substring(e.target.value.lastIndexOf('\\') + 1)
    this.setState({
      inputFile: filename + ' ready for upload',
      submitEnabled: true
    })
  }

  render () {
    const { files } = this.state
    return (
      <div className="App">
        <div className="title">
          Kraken File Explorer Assessment
        </div>
        <FileInput 
          inputFile={this.state.inputFile}
          inputChanged={this.inputChanged}
          handleSubmit={this.handleSubmit}
          submitEnabled={this.state.submitEnabled}
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

export default App;
