import {createSlice} from '@reduxjs/toolkit'

const translitModels = createSlice({
	name: 'translitModels',
	initialState: {
		soviet: {
			name: 'Soviet Custom Model',
			alphabet: {
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
			},
		},
		gostB: {
			name: 'GOST Model B',
			alphabet: {
				а: 'a',
				б: 'b',
				в: 'v',
				г: 'g',
				д: 'd',
				е: 'e',
				ё: 'yo',
				ж: 'zh',
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
				ц: 'cz',
				ч: 'ch',
				ш: 'sh',
				щ: 'shh',
				ь: '‵',
				ы: 'y‵',
				ъ: '‶',
				э: 'e‵',
				ю: 'yu',
				я: 'ya',

				А: 'A',
				Б: 'B',
				В: 'V',
				Г: 'G',
				Д: 'D',
				Е: 'E',
				Ё: 'Yo',
				Ж: 'Zh',
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
				Ц: 'Cz',
				Ч: 'Ch',
				Ш: 'Sh',
				Щ: 'Shh',
				Ь: '‵',
				Ы: 'Y‵',
				Ъ: '‶',
				Э: 'E‵',
				Ю: 'Yu',
				Я: 'Ya',
			},
		},
		title: 'Default Title',
	},
	reducers: {
		test: (state, action) => {
			console.log('TestReducer')
			console.log(action.payload)
			return {...state, title: action.payload}
		},
	},
})

export const {test} = translitModels.actions

export default translitModels.reducer
