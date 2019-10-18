import types from '../constants/actionTypes'

export const defaultState = {
  files: [],
  inputFile: '',
  submitEnabled: false
}
const url = 'http://localhost:8000/api/documents'

function documentReducer(state={files: []}, action) {
  const payload = action.payload
  console.log(JSON.stringify(action.actionType))
  switch(types) {
    
    case types.GET_DOCUMENTS:
      console.log('getting documents')
      fetch(url, {
        method: 'GET'
      })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(data => {
        state = { ...state }
        console.log(JSON.stringify(data))
        state.files = data
      })
      break
    case types.DELETE_DOCUMENT:
        const fetchBody = {
          file: payload.filename
        }
        console.log(payload.filename)
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
      break 
    case types.UPLOAD_DOCUMENT:
        this.setState({
          inputFile: '',
          submitEnabled: false
        })
        
        fetch(url, {
          method: 'POST',
          body: payload.formData
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.getServerFiles()
        })
      break
    default:
      return state
  }
}

export default documentReducer;
