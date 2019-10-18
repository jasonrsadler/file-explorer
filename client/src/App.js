import React, { Component } from 'react';
import FileGrid from './components/Filegrid'

class App extends Component {
  constructor() {
    super();
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {
      files: []
    }
    this.getServerFiles()
  }

  getServerFiles = () => {
    fetch('http://localhost:8000/api/documents', {
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
      event.preventDefault();
      const fileInput = document.querySelector('#fileupload') ;
      const formData = new FormData();
      //console.log(fileInput.files[0])
      formData.append('file', fileInput.files[0]);
      for (let key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
      console.log(formData.entries())
      fetch('http://localhost:8000/api/documents', {
        method: 'POST',
        body: formData
      })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(data => {
          console.log(JSON.parse(data))
      })

  }

  deleteFile = (filename) => {
    console.log(filename)
    fetch('http://localhost:8000/api/documents', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        file: filename
      }
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  render () {
    const { files } = this.state
    return (
      <div className="App">
        <form method="POST" id="upload-file" onSubmit={this.handleSubmit} encType="multipart/form-data">
          <input id="fileupload" type="file" name="image" required />
          <button type="submit" id="btnUploadFile">Upload File</button>
        </form>
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