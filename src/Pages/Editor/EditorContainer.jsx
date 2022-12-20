import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {
	clearDraftModel,
	setDraftNewModelAlphabet,
	setDraftNewModelFull,
	setIsNewElement,
	setNewModelTitle,
} from '../../redux/reducers/draftNewModel-reducer'
import Editor from './Editor'
import {useEffect} from 'react'
import {addTranslitModel, replaceTranslitModel} from '../../redux/reducers/translitModels-reducer'

const EditorContainer = () => {
	const navigate = useNavigate()
	const translitModels = useSelector((state) => state.translitModels)
	const dispatch = useDispatch()

	const actionRoute = useParams()

	const draftState = useSelector((state) => state.draftNewModel)

	useEffect((e) => {
		if (actionRoute.action !== 'new') {
			const currentTranslitModel = translitModels.find((e) => e.name === actionRoute.action)
			dispatch(setDraftNewModelFull(currentTranslitModel))
			dispatch(setIsNewElement(false))
		} else {
			dispatch(setIsNewElement(true))
		}
	}, [])

	const setDraftAlphabet = (props) => {
		dispatch(setDraftNewModelAlphabet(props))
	}
	const setDraftTitle = (props) => {
		dispatch(setNewModelTitle(props))
	}

	const handleSubmit = () => {
		let preparingAlphabetModel = {
			title: draftState.title,
			editable: true,
			name: Date.now(),
			alphabet: draftState.alphabet,
		}

		if (!draftState.isNewElement) {
			preparingAlphabetModel.name = draftState.name
			const oldTranslitModel = translitModels.filter((e) => e.name !== draftState.name)
			dispatch(replaceTranslitModel(oldTranslitModel))
		}

		dispatch(addTranslitModel(preparingAlphabetModel))
		dispatch(clearDraftModel())
		navigate('/select')
	}

	const handleReset = () => {
		dispatch(clearDraftModel())
		console.log('clear')
	}

	return (
		<Editor
			draftState={draftState}
			setDraftAlphabet={setDraftAlphabet}
			setDraftTitle={setDraftTitle}
			handleSubmit={handleSubmit}
			handleReset={handleReset}
		/>
	)
}

export default EditorContainer
