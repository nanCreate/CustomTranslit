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
import {Link, useNavigate} from 'react-router-dom'
import {removeTranslitModel} from '../redux/translitModels-reducer'

const Select = () => {
	const translitModels = useSelector((state) => state.translitModels)
	const configApp = useSelector((state) => state.config)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const listItemLanguageModels = translitModels.map((d) => {
		const exampleText =
			'Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя'
		const transliterText = transliter(exampleText, d.alphabet)
		let isActivated = false
		if (d.name === configApp.languageModel) {
			isActivated = true
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
					<ListItem title={d.title} subtitle={transliterText} borderBottom={true} />
				</div>
				<div style={{float: 'right'}}>
					{isActivated ? (
						<Button value="Установлено" disabled={true} />
					) : (
						<Button onClick={() => dispatch(setLanguageModel(d.name))} value="Установить" />
					)}
				</div>

				<Button
					onClick={() => {
						dispatch(removeTranslitModel(d.name))
					}}
					tooltip="Удалить"
					icon={<i className="icons10-cross"></i>}
					value=""
					style={{marginRight: '10px'}}
				/>
				<Button
					onClick={() => {
						navigate('/editor/' + d.name)
					}}
					tooltip="Редактировать"
					icon={<i className="icons10-pencil"></i>}
					value=""
					style={{marginRight: '10px'}}
				/>
			</Card>
		)
	})

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainerInner>
				<h2>Языковая модель</h2>

				<CommandBar>
					<Link to={'/editor/new'}>
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

export default Select
