import {createSlice} from '@reduxjs/toolkit'

const configApp = createSlice({
	name: 'translitModels',
	initialState: {
		title: 'Default Title',
	},
	reducers: {
		updateTitleApp: (state, action) => {
			console.log('TestReducer')
			console.log(action.payload)
			return {...state, title: action.payload}
		},
	},
})

export const {updateTitleApp} = configApp.actions

export default configApp.reducer
