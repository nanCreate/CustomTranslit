import {NavPageContainer} from 'react-windows-ui'
import TextAreaAutosize from 'react-textarea-autosize'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentText, setTranslitedText} from '../redux/mainPage-reducer'
import transliter from '../hooks/transliter'

const Main = () => {
	const mainPageState = useSelector((state) => state.mainPage)
	const dispatch = useDispatch()

	const configApp = useSelector((state) => state.config)
	const translitModels = useSelector((state) => state.translitModels)

	const currentModel = translitModels.find((e) => e.name === configApp.languageModel)

	const toTanslit = (text, model) => {
		let textTranslited = transliter(text, model.alphabet)

		dispatch(setTranslitedText(textTranslited))

		if (configApp.autoCopy) {
			navigator.clipboard.writeText(textTranslited)
		}
	}

	const moveCaretAtEnd = (e) => {
		const temp_value = e.target.value
		e.target.value = ''
		e.target.value = temp_value
		toTanslit(e.target.value, currentModel)
	}

	return (
		<NavPageContainer hasPadding={true} animateTransition={true}>
			<div className="App">
				<header>
					{/*<Button*/}
					{/*	isLoading={false}*/}
					{/*	onClick={() => {}}*/}
					{/*	value="Копировать"*/}
					{/*	icon={<i className="icons10-copy"></i>}*/}
					{/*	type={'success-outline'}*/}
					{/*/>*/}
				</header>

				<div className="TranslateOriginal">
					<TextAreaAutosize
						onChange={(e) => {
							dispatch(setCurrentText(e.target.value))
							toTanslit(e.target.value, currentModel)
						}}
						value={mainPageState.currentText}
						autoFocus={true}
						onFocus={moveCaretAtEnd}
						placeholder={'Начинайте вводить текст'}
						className={'Textarea' + ' ' + configApp.theme}
					/>
				</div>
				<div className="TranslateNew">{<pre>{mainPageState.translitedText}</pre>}</div>
			</div>
		</NavPageContainer>
	)
}

export default Main
