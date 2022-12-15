import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import translitModelsReducer from './translitModels-reducer'
import configReducer from './config-reducer'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

const reducers = combineReducers({
	translitModels: translitModelsReducer,
	config: configReducer,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['config'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
})

export default store

// export default persistStore(store)
