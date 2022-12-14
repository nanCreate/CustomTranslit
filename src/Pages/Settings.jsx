import {Card, NavPageContainer, NavPageContainerInner, Select, Switch} from 'react-windows-ui'
import {useDispatch, useSelector} from 'react-redux'
import {toggleAutoCopy, setLanguageModel} from '../redux/config-reducer'

const SettingsPage = () => {
	const configApp = useSelector((state) => state.config)
	const dispatch = useDispatch()

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainerInner>
				<h1>Настройки</h1>

				<p style={{fontWeight: '600'}}>Поведение</p>

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

				<p style={{fontWeight: '600'}}>Модель транслитирования</p>

				<Card display="block">
					<Select
						defaultValue={configApp.languageModel}
						onChange={(value) => dispatch(setLanguageModel(value))}
						data={[
							{label: 'ГОСТ 7.79-2000, система Б', value: 'gostB'},
							{label: 'Советская', value: 'soviet'},
						]}
					/>
				</Card>
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default SettingsPage
