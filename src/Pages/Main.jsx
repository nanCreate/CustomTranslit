import {useState} from 'react'
import {NavPageContainer} from 'react-windows-ui'
import TextAreaAutosize from 'react-textarea-autosize'
import {useSelector} from 'react-redux'

const Main = () => {
	const [text, setText] = useState('')
	const [textTranslit, setTextTranslit] = useState('')
	const translitModel = useSelector((state) => state.translitModels.soviet)

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
							setText(e.target.value)
							toCopy(translit(e.target.value, translitModel))
						}}
						value={text}
						autoFocus={true}
						placeholder={'Начинайте вводить текст'}
						className={'Textarea'}
					/>
				</div>
				<div className="TranslateNew">{<pre>{textTranslit}</pre>}</div>
			</div>
		</NavPageContainer>
	)
}

export default Main
