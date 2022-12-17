import {
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
import {Link, useParams} from 'react-router-dom'
import ModelEditorAdd from '../Components/ModelEditorAdd'

const ModelEditor = () => {
	const translitModels = useSelector((state) => state.translitModels)
	const configApp = useSelector((state) => state.config)
	const dispatch = useDispatch()

	const listItemLanguageModels = translitModels.map((d) => {
		const exampleText =
			'Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя'
		const transliterText = transliter(exampleText, d.alphabet)
		let isActivated = ''
		if (d.name === configApp.languageModel) {
			isActivated = ' (активно)'
		}

		return (
			<div onClick={() => dispatch(setLanguageModel(d.name))} key={d.name}>
				<ListItem title={d.title + isActivated} subtitle={transliterText} borderBottom={true} />
			</div>
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

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainerInner>
				<h2>Редактирование модели</h2>
				<p>{actionRoute.action}</p>
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default ModelEditor
