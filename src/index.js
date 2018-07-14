import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

// antd stylesheet
import 'antd/dist/antd.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker();
