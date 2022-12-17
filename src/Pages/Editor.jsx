import {NavPageContainer, NavPageContainerInner} from 'react-windows-ui'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import ModelEditorAdd from '../Components/ModelEditorAdd'
import {setDraftNewModelFull} from '../redux/draftNewModel-reducer'

const Editor = () => {
	const translitModels = useSelector((state) => state.translitModels)
	const dispatch = useDispatch()

	const actionRoute = useParams()
	console.log(actionRoute)

	if (actionRoute.action !== 'new') {
		const forEditTranslitModel = translitModels.find((e) => e.name === actionRoute.action)
		dispatch(setDraftNewModelFull(forEditTranslitModel))
	}

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainerInner>
				<h2>Редактирование модели</h2>
				{actionRoute.action === 'new' ? (
					<ModelEditorAdd />
				) : (
					<ModelEditorAdd nameModel={actionRoute.action} />
				)}
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default Editor
