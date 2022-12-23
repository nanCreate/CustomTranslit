import {
	Button,
	Card,
	CommandBar,
	CommandBarButton,
	ListItem,
	NavPageContainer,
	NavPageContainerInner,
} from 'react-windows-ui'
import transliter from '../lib/transliter'
import {setLanguageModel} from '../redux/reducers/config-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {removeTranslitModel} from '../redux/reducers/translitModels-reducer'

const Select = () => {
	const translitModels = useSelector((state) => state.translitModels)
	const configApp = useSelector((state) => state.config)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const listItemLanguageModels = translitModels.map((d) => {
		const exampleText = configApp.exampleText.content[configApp.exampleText.current]

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
					<CommandBarButton
						onClick={() => navigate('/editor/new')}
						value="Создать свою модель"
						icon={<i className="icons10-plus color-primary"></i>}
					/>
				</CommandBar>

				<Card>{listItemLanguageModels}</Card>
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default Select
