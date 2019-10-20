import types from '../constants/actionTypes'
import urlFetchers from '../utils/fetchers'

export const defaultState = {
  files: [],
  inputFile: '',
  submitEnabled: false,
  serverError: false,
  apiUnset: false
}

function documentReducer(state=defaultState, action) {
  const payload = action.payload
  switch(action.type) {    
    case types.GET_DOCUMENTS:
      urlFetchers.getDocuments()
      break
    case types.ON_GET_DOCUMENTS:
      state = { ...state }
      state.files = payload.response
      break
    case types.DELETE_DOCUMENT:
      urlFetchers.deleteDocument(payload.fetchBody)
      break
    case types.ON_DOCUMENT_DELETE:
      state = { ...state }
      if (!payload.response.status) {
        state.serverError = true
      } else {
        urlFetchers.getDocuments()
      }
      break
    case types.UPLOAD_DOCUMENT:
      urlFetchers.uploadDocument(payload.formData)
      break  
    case types.ON_DOCUMENT_UPLOAD:
      state = { ...state }
      if (payload.response.status !== 'success') {
        console.log('serverError')
        state.serverError = true
      } else {
        state.inputFile = ''
        state.submitEnabled = false
        state.serverError = false
      }
      
      urlFetchers.getDocuments()
      break
    case types.ON_FILE_SUBMIT_CHANGED:
      state = { ...state }
      state.inputFile = payload.filename + ' ready for upload'
      state.submitEnabled = true
      break
    case types.API_UNSET:
      state = { ...state }
      state.apiUnset = true
      break
    default:
  }
  return state
}

export default documentReducer;
