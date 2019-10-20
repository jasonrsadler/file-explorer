import React, { PureComponent } from 'react'

class FileFilter extends PureComponent {
  render () {
    const { fileFieldChanged, typeFieldChanged } = this.props
    return (
      <div className='filegrid-header filegrid-filter'>
        <div className='filegrid-header-column'>
          <div>Search by file name: </div>
          <input type='text' onChange={fileFieldChanged} />
        </div>
        <div className='filegrid-header-column'>
          <div>Search by file type: </div>
          <input type='text' onChange={typeFieldChanged} />
        </div>
      </div>
    )
  }
}

export default FileFilter
