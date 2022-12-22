import {createSlice} from '@reduxjs/toolkit'
const initialState = {
	isNewElement: true,
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
}

const draftNewModel = createSlice({
	name: 'MainPage',
	initialState: initialState,
	reducers: {
		setNewModelTitle: (state, action) => {
			return {...state, title: action.payload}
		},
		setDraftNewModelAlphabet: (state, action) => {
			let alphabet = {...state.alphabet}
			alphabet[action.payload.originalSymbol] = action.payload.newSymbol
			return {...state, alphabet: alphabet}
		},
		setDraftNewModelFull: (state, action) => {
			return {...state, ...action.payload}
		},
		setIsNewElement: (state, action) => {
			return {...state, isNewElement: action.payload}
		},
		clearDraftModel: (state, action) => {
			return {...initialState, isNewElement: state.isNewElement, name: state.name}
		},
	},
})

export const {
	setNewModelTitle,
	setDraftNewModelAlphabet,
	setDraftNewModelFull,
	clearDraftModel,
	setIsNewElement,
} = draftNewModel.actions

export default draftNewModel.reducer
