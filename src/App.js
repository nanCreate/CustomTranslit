import './App.css'
import {NavBar, NavBarLink} from 'react-windows-ui'
import {Route, Routes} from 'react-router-dom'
import Main from './Pages/Main/Main'
import AboutPage from './Pages/About/About'
import SettingsPage from './Pages/Settings/Settings'
import EditorContainer from './Pages/Editor/EditorContainer'
import Select from './Pages/Select/Select'
import {useDispatch, useSelector} from 'react-redux'
import {setTheme, toggleMenu} from './redux/reducers/config-reducer'
import {useEffect} from 'react'

function App() {
	const dispatch = useDispatch()

	let isToggleMenu = useSelector((state) => state.config.toggleMenu)
	const currentTheme = useSelector((state) => state.config.theme)

	useEffect(() => {
		if (typeof isToggleMenu === 'undefined') {
			dispatch(toggleMenu(true))
		}
		dispatch(setTheme(currentTheme))
	})

	return (
		<div>
			<NavBar
				title="Custom Translit"
				shadowOnScroll={true}
				collapsed={isToggleMenu}
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
					to="/select"
					exact={true}
					text="Языковая модель"
					icon={<i className="icons10-alphabet-sorting"></i>}
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
				<Route path={'/select'} element={<Select />} />} />
				<Route path={'/editor'} element={<EditorContainer />}>
					<Route path=":action" element={<EditorContainer />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
