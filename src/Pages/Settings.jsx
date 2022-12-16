import {
	Button,
	Card,
	ListItem,
	LoaderBusy,
	NavPageContainer,
	NavPageContainerInner,
	Switch,
} from 'react-windows-ui'
import {useDispatch, useSelector} from 'react-redux'
import {toggleAutoCopy, setLanguageModel} from '../redux/config-reducer'
import {useState} from 'react'
import transliter from '../hooks/transliter'

const SettingsPage = () => {
	const configApp = useSelector((state) => state.config)
	const translitModels = useSelector((state) => state.translitModels)
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false)

	const resetSettings = () => {
		setIsLoading(true)
		localStorage.clear()
		setTimeout(() => {
			window.location.reload()
		}, 1000)
	}

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

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<LoaderBusy
				setTheme="light"
				isLoading={isLoading}
				display="fullscreen"
				backgroundColor="#007fed"
				title="Выполняется сброс..."
			/>

			<NavPageContainerInner>
				<h1>Настройки</h1>

				<h2>Поведение</h2>
				<Card display="block">
					<div className="app-link-compound">
						<div className="app-link-compound-container">
							<i className="icons10-copy"></i>
							<div className="app-link-compound-subcontainer">
								<span>Автокопирование</span>
								<p>Копировать в буфер обмена при вводе текста</p>
							</div>
							<Switch
								labelOn="Вкл"
								labelOff="Выкл"
								defaultChecked={configApp.autoCopy}
								onChange={() => {
									dispatch(toggleAutoCopy())
								}}
							/>
						</div>
					</div>
				</Card>

				<h2>Модель транслитирования</h2>
				<Card>{listItemLanguageModels}</Card>

				<h2>Общее</h2>
				<Card display="block">
					<Button value={'Сбросить все настройки'} onClick={resetSettings} />
				</Card>
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default SettingsPage
