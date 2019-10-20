import * as actions from '../index'
const url = 'http://localhost:8000/api/documents'

const urlFetchers = {
  uploadDocument: (formData) => {
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(data => {
      console.log('error')
      actions.onDocumentUpload(data)
    })    
  },
  deleteDocument: (fetchBody) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fetchBody)
    })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(data => {
      actions.onDocumentDelete(data)
    })
  },
  getDocuments: () => {
    fetch(url, {
      method: 'GET'
    })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(data => {
      actions.onGetDocuments(data)
    })
  }
}

export default urlFetchers
