import {NavPageContainer} from 'react-windows-ui'
import TextAreaAutosize from 'react-textarea-autosize'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentText, setTranslitedText} from '../redux/reducers/mainPage-reducer'
import transliter from '../hooks/transliter'
import {useEffect} from 'react'

const Main = () => {
	const mainPageState = useSelector((state) => state.mainPage)
	const dispatch = useDispatch()

	const configApp = useSelector((state) => state.config)
	const translitModels = useSelector((state) => state.translitModels)

	const currentModel = translitModels.find((e) => e.name === configApp.languageModel)

	const toTranslit = (text, model) => {
		let textTranslited = transliter(text, model.alphabet)

		dispatch(setTranslitedText(textTranslited))

		if (configApp.autoCopy) {
			navigator.clipboard.writeText(textTranslited)
		}
	}

	useEffect(() => {
		toTranslit(mainPageState.currentText, currentModel)
	}, [])
	const moveCaretAtEnd = (e) => {
		const temp_value = e.target.value
		e.target.value = ''
		e.target.value = temp_value
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
							toTranslit(e.target.value, currentModel)
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
