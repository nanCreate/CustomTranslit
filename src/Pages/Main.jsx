import {useState} from 'react'
import {NavPageContainer} from 'react-windows-ui'
import TextAreaAutosize from 'react-textarea-autosize'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentText, setTranslitedText} from '../redux/mainPage-reducer'

const Main = () => {
	const mainPageState = useSelector((state) => state.mainPage)
	const dispatch = useDispatch()

	const configApp = useSelector((state) => state.config)
	const translitModel = useSelector((state) => state.translitModels)

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

		dispatch(setTranslitedText(answer))

		if (configApp.autoCopy) {
			navigator.clipboard.writeText(answer)
		}
	}

	const moveCaretAtEnd = (e) => {
		const temp_value = e.target.value
		e.target.value = ''
		e.target.value = temp_value
		translit(e.target.value, translitModel[configApp.languageModel])
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
							translit(e.target.value, translitModel[configApp.languageModel])
						}}
						value={mainPageState.currentText}
						autoFocus={true}
						onFocus={moveCaretAtEnd}
						placeholder={'Начинайте вводить текст'}
						className={'Textarea'}
					/>
				</div>
				<div className="TranslateNew">{<pre>{mainPageState.translitedText}</pre>}</div>
			</div>
		</NavPageContainer>
	)
}

export default Main
