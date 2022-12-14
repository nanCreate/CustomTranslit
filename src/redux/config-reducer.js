import {createSlice} from '@reduxjs/toolkit'

const configApp = createSlice({
	name: 'configApp',
	initialState: {
		autoCopy: true,
		languageModel: 'gostB',
	},
	reducers: {
		toggleAutoCopy: (state, action) => {
			console.log('toggleAutoCopy HERE')
			if (state.autoCopy) {
				return {...state, autoCopy: false}
			}
			return {...state, autoCopy: true}
		},
		setLanguageModel: (state, action) => {
			console.log('language model')
		},
	},
})

export const {toggleAutoCopy} = configApp.actions

export default configApp.reducer
