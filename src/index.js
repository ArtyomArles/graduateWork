import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
// import {PersistGate} from 'redux-persist/integration/react'
import App from './App'
import './index.css'
// import store, {persistor} from './store/store'

// const express = require('express')
// const app = express()
// const cors = require('cors')
// app.use(cors())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    {/* <PersistGate
      loading={null}
      persistor={persistor}
    > */}
    <App />
    {/* </PersistGate> */}
    {/* </Provider> */}
  </BrowserRouter>)
