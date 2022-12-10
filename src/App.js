import './App.css'
import {useState} from 'react'

function App() {
	const toCopy = (text) => {
		navigator.clipboard.writeText(text)
	}

	const [text, setText] = useState('')

	const translit = (word) => {
		let answer = ''
		let converter = {
			а: 'a',
			б: 'b',
			в: 'v',
			г: 'g',
			д: 'd',
			е: 'e',
			ё: 'e',
			ж: 'zh',
			з: 'z',
			и: 'i',
			й: 'y',
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
			х: 'h',
			ц: 'c',
			ч: 'ch',
			ш: 'sh',
			щ: 'sch',
			ь: '',
			ы: 'y',
			ъ: '',
			э: 'e',
			ю: 'yu',
			я: 'ya',

			А: 'A',
			Б: 'B',
			В: 'V',
			Г: 'G',
			Д: 'D',
			Е: 'E',
			Ё: 'E',
			Ж: 'Zh',
			З: 'Z',
			И: 'I',
			Й: 'Y',
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
			Х: 'H',
			Ц: 'C',
			Ч: 'Ch',
			Ш: 'Sh',
			Щ: 'Sch',
			Ь: '',
			Ы: 'Y',
			Ъ: '',
			Э: 'E',
			Ю: 'Yu',
			Я: 'Ya',
		}

		for (let i = 0; i < word.length; ++i) {
			if (converter[word[i]] == undefined) {
				answer += word[i]
			} else {
				answer += converter[word[i]]
			}
		}

		return answer
	}

	return (
		<div className="App">
			<h1>Custom Translit</h1>
			<textarea
				onChange={(e) => {
					setText(e.target.value)
					toCopy(translit(e.target.value))
				}}
				value={text}
				cols="80"
				rows="20"
				autoFocus={true}
				placeholder={'Начинайте вводить текст'}
			/>
		</div>
	)
}

export default App
