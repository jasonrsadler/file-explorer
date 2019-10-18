import React, { PureComponent } from 'react'

class FileInput extends PureComponent {
  render () {
    const { inputFile, submitEnabled, inputChanged, handleSubmit } = this.props
    return (
      <div className="input-container">
        <div className="input">
          <form method="POST" id="upload-file" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="inputflex">
              <div>
                <input onChange={inputChanged} id="fileupload" type="file" name="file" className="inputfile" required />              
                <label htmlFor="fileupload" className="inputFile">Choose a File</label>
              </div>
              <div>
                <label id="fileNameLabel">
                  {
                    inputFile
                  }    
                </label>
              </div>
              <div>
                {
                  submitEnabled ?
                    <button type="submit" id="btnUploadFile" className='submitButton'>Upload File</button>
                    : <button type="submit" id="btnUploadFile" className='disabledButton' disabled>Upload File</button>
                }
              </div>
            </div>
          </form>
        </div>
      </div>    
    )
  }
}

export default FileInput
