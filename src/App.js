import './App.css'
import {useState} from 'react'

function App() {
	const toCopy = (text) => {
		navigator.clipboard.writeText(text)
	}

	const [text, setText] = useState('')

	return (
		<div className="App">
			<h1>Custom Translit</h1>

			<textarea
				onChange={(e) => {
					setText(e.target.value)
					toCopy(e.target.value)
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
