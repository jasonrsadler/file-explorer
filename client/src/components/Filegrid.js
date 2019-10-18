import React, { Component } from 'react'

class FileGrid extends Component {
  getFileList = () => {
    const { files, onDelete } = this.props
    return files.map((file, ix) => {
      return (
        <div key={ix}>
          <div>file</div>
          <div>{file.filename}</div>
          <div>{file.filetype}</div>
          <div><button onClick={() => {onDelete(file.filename)}}>Delete</button></div>
        </div>
      )
    })
  }
  
  render () {
    return (
      <div>
        {
          this.getFileList()
        }
      </div>
    )
  }
}

export default FileGrid
