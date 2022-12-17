import {
	Button,
	Card,
	LoaderBusy,
	NavPageContainer,
	NavPageContainerInner,
	Switch,
} from 'react-windows-ui'
import {useDispatch, useSelector} from 'react-redux'
import {toggleAutoCopy} from '../redux/config-reducer'
import {useState} from 'react'

const SettingsPage = () => {
	const configApp = useSelector((state) => state.config)
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false)

	const resetSettings = () => {
		setIsLoading(true)
		localStorage.clear()
		setTimeout(() => {
			window.location.reload()
		}, 1000)
	}

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

				{/*<h2>Модель транслитирования</h2>*/}
				{/*<Card>{listItemLanguageModels}</Card>*/}

				<h2>Общее</h2>
				<Card display="block">
					<Button value={'Сбросить все настройки'} onClick={resetSettings} />
				</Card>
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default SettingsPage
