import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import translitModelsReducer from './reducers/translitModels-reducer'
import configReducer from './reducers/config-reducer'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import mainPageReducer from './reducers/mainPage-reducer'
import draftNewModelReducer from './reducers/draftNewModel-reducer'

const reducers = combineReducers({
	translitModels: translitModelsReducer,
	config: configReducer,
	mainPage: mainPageReducer,
	draftNewModel: draftNewModelReducer,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['config', 'translitModels', 'draftNewModel'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
})

export default store

// export default persistStore(store)
