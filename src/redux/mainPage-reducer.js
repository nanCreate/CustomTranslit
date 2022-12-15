import {createSlice} from '@reduxjs/toolkit'

const MainPage = createSlice({
	name: 'MainPage',
	initialState: {
		currentText: '',
		translitedText: '',
	},
	reducers: {
		setCurrentText: (state, action) => {
			return {...state, currentText: action.payload}
		},
		setTranslitedText: (state, action) => {
			return {...state, translitedText: action.payload}
		},
	},
})

export const {setCurrentText, setTranslitedText} = MainPage.actions

export default MainPage.reducer
