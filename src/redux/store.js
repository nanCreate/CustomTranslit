import {configureStore} from '@reduxjs/toolkit'
import translitModelsReducer from './translitModels-reducer'

export default configureStore({
	reducer: {
		translitModels: translitModelsReducer,
	},
})
