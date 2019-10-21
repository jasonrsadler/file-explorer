import actionTypes from '../constants/actionTypes'

export const uploadDocument = (formData) => {
  return {
    type: actionTypes.UPLOAD_DOCUMENT,
    payload: { formData }
  }
}

export const onDocumentUpload = (response) => {
  return {
    type: actionTypes.ON_DOCUMENT_UPLOAD,
    payload: { response }
  }
}

export const getDocuments = () => {
  return {
    type: actionTypes.GET_DOCUMENTS
  }
}

export const onGetDocuments = (response) => {
  return {
    type: actionTypes.ON_GET_DOCUMENTS,
    payload: { response }
  }
}

export const deleteDocument = (fetchBody) => {
  return {
    type: actionTypes.DELETE_DOCUMENT,
    payload: { fetchBody }
  }
}

export const onDocumentDelete = (response) => {
  return {
    type: actionTypes.ON_DOCUMENT_DELETE,
    payload: { response }
  }
}

export const onFileSubmitChanged = (filename) => {
  return ({
    type: actionTypes.ON_FILE_SUBMIT_CHANGED,
    payload: { filename }
  })
}

export const apiUnset = () => {
  return ({
    type: actionTypes.API_UNSET
  })
}

export const onServerError = () => {
  return ({
    type: actionTypes.ON_SERVER_ERROR
  })
}
