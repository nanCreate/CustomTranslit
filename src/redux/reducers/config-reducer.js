import {createSlice} from '@reduxjs/toolkit'
import {Appearance} from 'react-windows-ui'

const configApp = createSlice({
	name: 'configApp',
	initialState: {
		autoCopy: true,
		languageModel: 'gostB',
		theme: 'light',
		fonts: {
			current: 'monospace',
			list: ['sans', 'sans-serif', 'monospace'],
		},

		exampleText: {
			current: 0,
			content: [
				'Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя',
				'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!',
				'Широкая электрификация южных губерний даст мощный толчок подъёму сельского хозяйства.',
				'Съешь же ещё этих мягких французских булок да выпей чаю.',
				'Официально заявляю читающим: даёшь подъем операции Ы! Хуже с ёлкой бог экспериментирует.',
				'Съел бы ёж лимонный пьезокварц, где электрическая юла яшму с туфом похищает.',
			],
		},
	},
	reducers: {
		toggleAutoCopy: (state, action) => {
			if (state.autoCopy) {
				return {...state, autoCopy: false}
			}
			return {...state, autoCopy: true}
		},
		setTheme: (state, action) => {
			if (action.payload === 'dark') {
				Appearance.setDarkScheme()
			} else {
				Appearance.setLightScheme()
			}
			return {...state, theme: action.payload}
		},
		setLanguageModel: (state, action) => {
			return {...state, languageModel: action.payload}
		},
		setCurrentExampleText: (state, action) => {
			// const exampleText = {...state.exampleText,}
			return {...state, exampleText: {...state.exampleText, current: action.payload}}
		},
		setCurrentFont: (state, action) => {
			return {...state, fonts: {...state.fonts, current: action.payload}}
		},
	},
})

export const {toggleAutoCopy, setLanguageModel, setTheme, setCurrentExampleText, setCurrentFont} =
	configApp.actions

export default configApp.reducer
