import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import {Provider} from 'react-redux'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import 'react-windows-ui/config/app-config.css'
import 'react-windows-ui/dist/react-windows-ui-11.min.css'
import 'react-windows-ui/icons/fonts/fonts.min.css'
import {HashRouter} from 'react-router-dom'

import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<HashRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</HashRouter>
)

serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
