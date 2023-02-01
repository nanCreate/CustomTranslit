import {Button, ButtonIcon, CommandBar, ListItem, NavPageContainer} from 'react-windows-ui'
import transliter from '../lib/transliter'
import {setLanguageModel} from '../redux/reducers/config-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {removeTranslitModel} from '../redux/reducers/translitModels-reducer'
import s from './Select.module.css'

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
			// <Card
			// 	key={d.name}
			// 	padding={10}
			// 	focused={true}
			// 	maxWidth={'none'}
			// 	display="flow-root"
			// 	margin={20}
			// >
			<>
				<div onClick={() => dispatch(setLanguageModel(d.name))}>
					<ListItem
						title={d.title}
						subtitle={transliterText}
						borderBottom={false}
						ItemEndComponent={
							<div className={s.buttons_container}>
								<div className={s.buttons_container__box}>
									<ButtonIcon
										onClick={() => {
											dispatch(removeTranslitModel(d.name))
										}}
										tooltip="Удалить"
										icon={<i className="icons10-cross"></i>}
									/>
								</div>
								<div className={s.buttons_container__box}>
									<ButtonIcon
										onClick={() => {
											navigate('/editor/' + d.name)
										}}
										tooltip="Редактировать"
										icon={<i className="icons10-pencil"></i>}
									/>
								</div>
								<div className={s.buttons_container__box}>
									<div style={{float: 'right'}}>
										{isActivated ? (
											<Button value="Установлено" disabled={true} />
										) : (
											<Button
												onClick={() => dispatch(setLanguageModel(d.name))}
												value="Установить"
											/>
										)}
									</div>
								</div>
							</div>
						}
					/>
				</div>
			</>
		)
	})

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainer.Inner>
				<h2>Языковая модель</h2>

				<CommandBar style={{marginBottom: '5px'}}>
					<CommandBar.Button
						onClick={() => navigate('/editor/new')}
						value="Создать свою модель"
						icon={<i className="icons10-plus color-primary"></i>}
					/>
				</CommandBar>

				{/*<Card>{listItemLanguageModels}</Card>*/}
				{listItemLanguageModels}
			</NavPageContainer.Inner>
		</NavPageContainer>
	)
}

export default Select
