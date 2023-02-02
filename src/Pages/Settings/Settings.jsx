import {Button, ListItem, LoaderBusy, NavPageContainer, Select, Switch} from 'react-windows-ui'
import {useDispatch, useSelector} from 'react-redux'
import {
	setCurrentExampleText,
	setCurrentFont,
	setTheme,
	toggleAutoCopy,
} from '../../redux/reducers/config-reducer'
import {useState} from 'react'
import s from './Settings.module.css'

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

	const setExampleText = (index) => {
		dispatch(setCurrentExampleText(index))
	}

	const previewItemList = configApp.exampleText.content.map((d, index) => {
		return (
			<div onClick={() => setExampleText(index)} key={index}>
				<ListItem
					title={d}
					ItemEndComponent={
						configApp.exampleText.current === index ? (
							<div className={s.PrevStatusContainer}>
								<div className={s.PrevStatusBlock}>Установлено</div>
							</div>
						) : undefined
					}
				/>
			</div>
		)
	})

	const fontList = configApp.fonts.list.map((e) => ({label: e, value: e}))
	const setNewCurrentFont = (name) => {
		dispatch(setCurrentFont(name))
	}

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<LoaderBusy
				setTheme="light"
				isLoading={isLoading}
				display="overlay"
				backgroundColor="#007fed"
				title="Выполняется сброс..."
			/>

			<NavPageContainer.Inner>
				<h1>Настройки</h1>

				<h2>Поведение</h2>
				{/*<Card display="block">*/}
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
				{/*</Card>*/}

				<h2>Оформление</h2>
				{/*<Card>*/}
				<Select
					defaultValue={configApp.theme}
					onChange={(theme) => {
						dispatch(setTheme(theme))
					}}
					data={[
						{label: 'Светлая', value: 'light'},
						{label: 'Тёмная', value: 'dark'},
					]}
				/>
				{/*</Card>*/}

				<h2>Шрифт</h2>
				{/*<Card>*/}
				<Select
					defaultValue={configApp.fonts.current}
					onChange={(name) => {
						setNewCurrentFont(name)
					}}
					data={fontList}
				/>
				{/*</Card>*/}

				<h2>Языковая модель</h2>
				<h3>Текст для предпросмотра</h3>
				{/*<Card>{previewItemList}</Card>*/}
				{previewItemList}

				<h2>Общее</h2>
				{/*<Card display="block">*/}
				<Button value={'Сбросить все настройки'} onClick={resetSettings} />
				{/*</Card>*/}
			</NavPageContainer.Inner>
		</NavPageContainer>
	)
}

export default SettingsPage
