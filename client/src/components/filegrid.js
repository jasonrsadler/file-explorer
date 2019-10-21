import React, { Component } from 'react'
import FileFilter from './fileFilter'

class FileGrid extends Component {
  constructor () {
    super()
    this.state = {
      fileFilter: '',
      typeFilter: ''
    }
  }

  fileFilterInputChanged = (e) => {
    this.setState({
      fileFilter: e.target.value
    })
  }

  typeFilterInputChanged = (e) => {
    this.setState({
      typeFilter: e.target.value
    })
  }

  getFileList = () => {
    const { files, onDelete } = this.props
    let filterFiles = files
    if (this.state.fileFilter !== '') {
      filterFiles = files.filter(file => {
        
        return (
          file.filename.toLowerCase().startsWith(this.state.fileFilter.toLowerCase())
        )
      })
    }
    if (this.state.typeFilter !== '') {
      filterFiles = filterFiles.filter(file => {
        return (
          file.filetype.toLowerCase().startsWith(this.state.typeFilter.toLowerCase())
        )
      })
    }
    return filterFiles.map((file, ix) => {
      return (
        <div key={ix} className={`fileitem-row ` + (ix % 2 === 0 ? `fileitem-row-even` : `fileitem-row-odd`)}>
          <div className='fileitem-cell'>{file.filename}</div>
          <div className='fileitem-cell'>{file.filetype}</div>
          <div className='fileitem-cell'><button className="deleteButton" onClick={() => {onDelete(file.filename)}}>Delete</button></div>
        </div>
      )
    })
  }
  
  render () {
    return (
      <div className="filegrid">
        
        <div>
          <FileFilter
            fileFieldChanged={this.fileFilterInputChanged}
            typeFieldChanged={this.typeFilterInputChanged}
          />
          <div className='filegrid-header'>
            <div className='filegrid-header-column'>File Name</div>
            <div className='filegrid-header-column'>File Type</div>
            <div className='filegrid-header-column'>Action</div>
          </div>
        </div>
        {
          this.getFileList()
        }
      </div>
    )
  }
}

export default FileGrid
