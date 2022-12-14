import './App.css'
import {NavBar, NavBarLink} from 'react-windows-ui'
import {Route, Routes} from 'react-router-dom'
import Main from './Pages/Main'
import AboutPage from './Pages/About'
import SettingsPage from './Pages/Settings'

function App() {
	return (
		<div>
			<NavBar
				title="Custom Translit"
				shadowOnScroll={true}
				titleBarMobile={
					<div>
						<span className="app-navbar-name">Custom Translit</span>
					</div>
				}
			>
				<NavBarLink
					to="/"
					exact={true}
					text="Транслит"
					icon={<i className="icons10-keyboard"></i>}
				/>

				<NavBarLink
					to="/settings"
					exact={true}
					text="Настройки"
					icon={<i className="icons10-settings"></i>}
				/>
				<NavBarLink
					to="/about"
					exact={true}
					text="О программе"
					icon={<i className="icons10-info"></i>}
				/>
			</NavBar>

			<Routes>
				<Route path={'/'} element={<Main />} />
				<Route path={'/settings'} element={<SettingsPage />} />
				<Route path={'/about'} element={<AboutPage />} />} />
			</Routes>
		</div>
	)
}

export default App
