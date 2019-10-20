import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import * as documentActions from './actions/documentActions'
import { bindActionCreators } from 'redux';
import { getActions as getUtilActions, setActions } from './utils'

ReactDOM.render(
  <Provider store={store}>    
    <App />
  </Provider>, document.getElementById('root'));

function getActions () {
  const actions = getUtilActions()
  if (actions) {
    return actions
  }
  const newActions = bindActionCreators(documentActions, store.dispatch.bind(store))
  setActions(newActions)
  return newActions
}

function onDocumentUpload (data) {
  getActions().onDocumentUpload(data)
}

function onGetDocuments (data) {
  getActions().onGetDocuments(data)
}

function onDocumentDelete (data) {
  getActions().onDocumentDelete(data)
}

export {
  onDocumentUpload,
  onGetDocuments,
  onDocumentDelete
}
