import actionTypes from '../constants/actionTypes'

export const uploadDocument = (filename) => {
    return {
        type: actionTypes.UPLOAD_DOCUMENT,
        payload: filename
    }
}

export const getDocuments = () => {
  console.log('action documents')
  return {
    actionType: actionTypes.GET_DOCUMENTS
  }
}

export const deleteDocument = (filename) => {
  return {
    type: actionTypes.DELETE_DOCUMENT,
    payload: filename
  }
}