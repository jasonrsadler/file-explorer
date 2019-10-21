import * as actions from '../index'
const url = 'http://localhost:8000/api/documents'

const urlFetchers = {
  uploadDocument: (formData) => {
    fetch(url, {
      method: 'POST',
      headers: {
        apiToken: process.env.REACT_APP_API_KEY
      },
      body: formData
    })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(data => {
      if (data === 'Unauthorized') {
        actions.apiUnset()
      } else {
        actions.onDocumentUpload(data)
      }
    })    
  },
  deleteDocument: (fetchBody) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        apiToken: process.env.REACT_APP_API_KEY
      },
      body: JSON.stringify(fetchBody)
    })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(data => {
      if (data === 'Unauthorized') {
        actions.apiUnset()
      } else {
        actions.onDocumentDelete(data)
      }
    })
  },
  getDocuments: () => {
    fetch(url, {
      method: 'GET',
      headers: {
        apiToken: process.env.REACT_APP_API_KEY
      }
    })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(data => {
      if (data === 'Unauthorized') {
        actions.apiUnset()
      } else {
        actions.onGetDocuments(data)
      }
    })
  }
}

export default urlFetchers
