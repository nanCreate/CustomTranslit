import './App.css'
import {useState} from 'react'
import TextAreaAutosize from 'react-textarea-autosize'

function App() {
	const [text, setText] = useState('')
	const [textTranslit, setTextTranslit] = useState('')
	const [previewStatus, setPreviewStatus] = useState(true)

	const toCopy = (text) => {
		setTextTranslit(text)
		navigator.clipboard.writeText(text)
	}

	const translit = (word) => {
		let answer = ''
		let converter = {
			а: 'a',
			б: 'b',
			в: 'v',
			г: 'g',
			д: 'd',
			е: 'e',
			ё: 'ɵ',
			ж: 'ƶ',
			з: 'z',
			и: 'i',
			й: 'j',
			к: 'k',
			л: 'l',
			м: 'm',
			н: 'n',
			о: 'o',
			п: 'p',
			р: 'r',
			с: 's',
			т: 't',
			у: 'u',
			ф: 'f',
			х: 'x',
			ц: 'ç',
			ч: 'c',
			ш: 'ş',
			щ: 'sc',
			ь: 'j',
			ы: 'ь',
			ъ: '',
			э: 'e',
			ю: 'y',
			я: 'ə',

			А: 'A',
			Б: 'B',
			В: 'V',
			Г: 'G',
			Д: 'D',
			Е: 'E',
			Ё: 'Ɵ',
			Ж: 'Ƶ',
			З: 'Z',
			И: 'I',
			Й: 'J',
			К: 'K',
			Л: 'L',
			М: 'M',
			Н: 'N',
			О: 'O',
			П: 'P',
			Р: 'R',
			С: 'S',
			Т: 'T',
			У: 'U',
			Ф: 'F',
			Х: 'X',
			Ц: 'Ç',
			Ч: 'C',
			Ш: 'Ş',
			Щ: 'Sc',
			Ь: 'J',
			Ы: 'Ь',
			Ъ: '',
			Э: 'E',
			Ю: 'Y',
			Я: 'Ə',
		}

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
			<header>Custom Translit</header>

			<aside>
				<button onClick={togglePreview}>👁️</button>
			</aside>

			<div className="TranslateOriginal">
				<TextAreaAutosize
					onChange={(e) => {
						setText(e.target.value)
						toCopy(translit(e.target.value))
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
