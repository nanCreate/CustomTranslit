import {render, screen} from '@testing-library/react'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'
import {HashRouter} from 'react-router-dom'
import React from 'react'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import SettingsPage from './Pages/Settings'
let persistor = persistStore(store)
test('renders learn react link', () => {
	render(
		<HashRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</HashRouter>
	)
	// const linkElement = screen.getAllByAltText(/Custom Translit/i)
	// expect(linkElement).toBeInTheDocument()

	// expect(screen.getAllByText('О программе')).toBeInTheDocument()
	expect(screen.getByPlaceholderText(/Начинайте/i)).toBeInTheDocument()
})
