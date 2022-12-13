import './App.css'
import {useState} from 'react'
import TextAreaAutosize from 'react-textarea-autosize'
import {setTest, test} from './redux/translitModels-reducer'
import {useSelector, useDispatch} from 'react-redux'
import {
	Button,
	InputText,
	NavBar,
	NavBarLink,
	NavBarSubMenu,
	NavPageContainer,
	RadioButton,
} from 'react-windows-ui'
import {Route, Routes} from 'react-router-dom'

function App() {
	const [previewStatus, setPreviewStatus] = useState(true)

	const translitModel = useSelector((state) => state.translitModels.gostB)
	const appTitle = useSelector((state) => state.translitModels.title)
	const dispatch = useDispatch()

	const togglePreview = () => {
		if (previewStatus) {
			console.log('true')
			setPreviewStatus(false)
		} else {
			console.log('false')
			setPreviewStatus(true)
		}
	}

	// TO own Main page Component
	const MainPage = () => {
		const [text, setText] = useState('')
		const [textTranslit, setTextTranslit] = useState('')

		const toCopy = (text) => {
			setTextTranslit(text)
			navigator.clipboard.writeText(text)
		}
		const translit = (word, model) => {
			let answer = ''
			const converter = model.alphabet

			for (let i = 0; i < word.length; ++i) {
				if (converter[word[i]] === undefined) {
					answer += word[i]
				} else {
					answer += converter[word[i]]
				}
			}

			return answer
		}

		return (
			<NavPageContainer hasPadding={true} animateTransition={true}>
				<div className="App">
					<header></header>

					<div className="TranslateOriginal">
						<TextAreaAutosize
							onChange={(e) => {
								setText(e.target.value)
								toCopy(translit(e.target.value, translitModel))
							}}
							value={text}
							autoFocus={true}
							placeholder={'Начинайте вводить текст'}
							className={'Textarea'}
						/>
					</div>
					<div className="TranslateNew">
						{previewStatus ? <pre>{textTranslit}</pre> : undefined}
					</div>
				</div>
			</NavPageContainer>
		)
	}

	// Clear page temp
	const TempClearPage = (props) => {
		return (
			<NavPageContainer hasPadding={true} animateTransition={true}>
				<div className="App">
					<header>{props.text}</header>
				</div>
			</NavPageContainer>
		)
	}

	return (
		<div>
			{/*<aside>*/}
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
			{/*<button onClick={togglePreview}>👁️</button>*/}
			{/*<button onClick={() => dispatch(test('Hello world'))}>🔬</button>*/}
			{/*</aside>*/}

			<Routes>
				<Route path={'/'} element={<MainPage />} />
				<Route path={'/settings'} element={<TempClearPage text={'page settings'} />} />
				<Route path={'/about'} element={<TempClearPage text={'page about'} />} />
			</Routes>
		</div>
	)
}

export default App
