import {createSlice} from '@reduxjs/toolkit'
import {Appearance} from 'react-windows-ui'

const configApp = createSlice({
	name: 'configApp',
	initialState: {
		autoCopy: true,
		languageModel: 'gostB',
		theme: 'light',
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
	},
})

export const {toggleAutoCopy, setLanguageModel, setTheme} = configApp.actions

export default configApp.reducer
