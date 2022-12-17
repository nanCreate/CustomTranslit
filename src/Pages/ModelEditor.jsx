import {
	Button,
	Card,
	CommandBar,
	CommandBarButton,
	ListItem,
	NavPageContainer,
	NavPageContainerInner,
} from 'react-windows-ui'
import transliter from '../hooks/transliter'
import {setLanguageModel} from '../redux/config-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useParams} from 'react-router-dom'
import ModelEditorAdd from '../Components/ModelEditorAdd'
import {setDraftNewModelFull} from '../redux/draftNewModel-reducer'

const ModelEditor = () => {
	const translitModels = useSelector((state) => state.translitModels)
	const configApp = useSelector((state) => state.config)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const listItemLanguageModels = translitModels.map((d) => {
		const exampleText =
			'Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя'
		const transliterText = transliter(exampleText, d.alphabet)
		let isActivated = ''
		if (d.name === configApp.languageModel) {
			isActivated = ' (активно)'
		}

		return (
			<Card
				key={d.name}
				padding={10}
				focused={true}
				maxWidth={'none'}
				display="flow-root"
				margin={20}
			>
				<div onClick={() => dispatch(setLanguageModel(d.name))}>
					<ListItem title={d.title + isActivated} subtitle={transliterText} borderBottom={true} />
				</div>
				<div style={{float: 'right'}}>
					{isActivated ? (
						<Button
							onClick={() => {}}
							value="Установлено"
							disabled={true}
							//icon={<i className="icons10-plus"></i>}
						/>
					) : (
						<Button
							onClick={() => dispatch(setLanguageModel(d.name))}
							value="Установить"
							//icon={<i className="icons10-plus"></i>}
						/>
					)}
				</div>

				<Button
					onClick={() => {
						navigate(d.name)
					}}
					tooltip="Редактировать"
					icon={<i className="icons10-pencil"></i>}
					value=""
					style={{marginRight: '10px'}}
				/>
			</Card>
		)
	})

	const actionRoute = useParams()
	console.log(actionRoute)

	if (!actionRoute.action) {
		return (
			<NavPageContainer hasPadding={false} animateTransition={true}>
				<NavPageContainerInner>
					<h2>Языковая модель</h2>

					<CommandBar>
						<Link to={'new'}>
							<CommandBarButton
								onClick={() => console.log('hello')}
								value="Создать свою модель"
								icon={<i className="icons10-plus color-primary"></i>}
							/>
						</Link>
					</CommandBar>

					<Card>{listItemLanguageModels}</Card>
				</NavPageContainerInner>
			</NavPageContainer>
		)
	}

	if (actionRoute.action == 'new') {
		return (
			<NavPageContainer hasPadding={false} animateTransition={true}>
				<NavPageContainerInner>
					<h2>Языковая модель</h2>
					<ModelEditorAdd />
				</NavPageContainerInner>
			</NavPageContainer>
		)
	}

	const forEditTranslitModel = translitModels.find((e) => e.name == actionRoute.action)
	dispatch(setDraftNewModelFull(forEditTranslitModel))

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainerInner>
				<h2>Редактирование модели</h2>
				<ModelEditorAdd nameModel={actionRoute.action} />
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default ModelEditor
