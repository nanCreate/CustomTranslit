import './App.css'
import {useState} from 'react'
import TextAreaAutosize from 'react-textarea-autosize'
import {setTest, test} from './redux/translitModels-reducer'
import {useSelector, useDispatch} from 'react-redux'

function App() {
	const [text, setText] = useState('')
	const [textTranslit, setTextTranslit] = useState('')
	const [previewStatus, setPreviewStatus] = useState(true)

	const toCopy = (text) => {
		setTextTranslit(text)
		navigator.clipboard.writeText(text)
	}

	const translitModel = useSelector((state) => state.translitModels.gostB)
	const appTitle = useSelector((state) => state.translitModels.title)
	const dispatch = useDispatch()
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

	const togglePreview = () => {
		if (previewStatus) {
			console.log('true')
			setPreviewStatus(false)
		} else {
			console.log('false')
			setPreviewStatus(true)
		}
	}

	return (
		<div className="App">
			<header>Custom Translit: {appTitle}</header>

			<aside>
				<button onClick={togglePreview}>👁️</button>
				<button onClick={() => dispatch(test('Hello world'))}>🔬</button>
			</aside>

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

			<div className="TranslateNew">{previewStatus ? <pre>{textTranslit}</pre> : undefined}</div>
		</div>
	)
}

export default App