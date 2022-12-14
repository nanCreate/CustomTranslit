import {createSlice} from '@reduxjs/toolkit'

const configApp = createSlice({
	name: 'configApp',
	initialState: {
		autoCopy: true,
		languageModel: 'gostB',
	},
	reducers: {
		toggleAutoCopy: (state, action) => {
			if (state.autoCopy) {
				return {...state, autoCopy: false}
			}
			return {...state, autoCopy: true}
		},
		setLanguageModel: (state, action) => {
			return {...state, languageModel: action.payload}
		},
	},
})

export const {toggleAutoCopy, setLanguageModel} = configApp.actions

export default configApp.reducer
