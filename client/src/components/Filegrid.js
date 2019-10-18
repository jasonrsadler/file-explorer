import React, { PureComponent } from 'react'

class FileGrid extends PureComponent {
  getFileList = () => {
    const { files, onDelete } = this.props
    return files.map((file, ix) => {
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
        <div className='filegrid-header'>
          <div className='filegrid-header-column'>File Name</div>
          <div className='filegrid-header-column'>File Type</div>
          <div className='filegrid-header-column'>Action</div>
        </div>
        {
          this.getFileList()
        }
      </div>
    )
  }
}

export default FileGrid
