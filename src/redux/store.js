import {configureStore} from '@reduxjs/toolkit'
import translitModelsReducer from './translitModels-reducer'
import configReducer from './config-reducer'

export default configureStore({
	reducer: {
		translitModels: translitModelsReducer,
		config: configReducer,
	},
})
