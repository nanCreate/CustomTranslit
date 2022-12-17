import {createSlice} from '@reduxjs/toolkit'

const draftNewModel = createSlice({
	name: 'MainPage',
	initialState: {
		name: '',
		title: '',
		editable: true,
		alphabet: {
			а: '',
			б: '',
			в: '',
			г: '',
			д: '',
			е: '',
			ё: '',
			ж: '',
			з: '',
			и: '',
			й: '',
			к: '',
			л: '',
			м: '',
			н: '',
			о: '',
			п: '',
			р: '',
			с: '',
			т: '',
			у: '',
			ф: '',
			х: '',
			ц: '',
			ч: '',
			ш: '',
			щ: '',
			ь: '',
			ы: '',
			ъ: '',
			э: '',
			ю: '',
			я: '',

			А: '',
			Б: '',
			В: '',
			Г: '',
			Д: '',
			Е: '',
			Ё: '',
			Ж: '',
			З: '',
			И: '',
			Й: '',
			К: '',
			Л: '',
			М: '',
			Н: '',
			О: '',
			П: '',
			Р: '',
			С: '',
			Т: '',
			У: '',
			Ф: '',
			Х: '',
			Ц: '',
			Ч: '',
			Ш: '',
			Щ: '',
			Ь: '',
			Ы: '',
			Ъ: '',
			Э: '',
			Ю: '',
			Я: '',
		},
	},
	reducers: {
		setNewModelTitle: (state, action) => {
			return {...state, title: action.payload}
		},
		setDraftNewModelAlphabet: (state, action) => {
			let alphabet = {...state.alphabet}
			alphabet[action.payload.original] = action.payload.new

			return {...state, alphabet: alphabet}
		},
		setDraftNewModelFull: (state, action) => {
			return {...state, ...action.payload}
		},
	},
})

export const {setNewModelTitle, setDraftNewModelAlphabet} = draftNewModel.actions

export default draftNewModel.reducer
