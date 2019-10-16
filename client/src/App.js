import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event){
      event.preventDefault();
      const fileInput = document.querySelector('#fileupload') ;
      const formData = new FormData();
      formData.append('image', fileInput.files[0]);

      fetch('http://localhost:8001/api/store', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })

  }

  render() {
    return (
      <div className="App">
       <form method="POST" id="upload-image"  onSubmit={this.handleSubmit} encType="multipart/form-data">
          <input id="fileupload" type="file" name="image" required/>
          <button type="submit" id="btnUploadFile">Upload File</button>
       </form>
      </div>
    );
  }
}

export default App;