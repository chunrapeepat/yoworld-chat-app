import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './ducks'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

// antd stylesheet
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
registerServiceWorker();
