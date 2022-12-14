import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import {Provider} from 'react-redux'

import 'react-windows-ui/config/app-config.css'
import 'react-windows-ui/dist/react-windows-ui-11.min.css'
import 'react-windows-ui/icons/fonts/fonts.min.css'
import {BrowserRouter, HashRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
)

window.store = store

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
