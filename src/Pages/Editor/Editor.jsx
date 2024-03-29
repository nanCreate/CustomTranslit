import {Button, InputText, NavPageContainer} from 'react-windows-ui'
import s from './Editor.module.css'

const Editor = (props) => {
	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainer.Inner>
				<h2>Редактирование модели</h2>

				<h3>Название модели</h3>
				<InputText
					placeholder="Введите заголовок"
					value={props.draftState.title}
					onChange={(e) => props.setDraftTitle(e.target.value)}
				/>

				<h3>Таблица</h3>
				<div className={s.container}>
					{Object.entries(props.draftState.alphabet).map(([key, val], i) => (
						// <Card padding={10} key={i} display={'inline-block'} maxWidth={300}>
						<div className={s.symbol}>
							<InputText
								value={val}
								width={'50px'}
								label={key + ':'}
								placeholder={''}
								onChange={(e) =>
									props.setDraftAlphabet({originalSymbol: key, newSymbol: e.target.value})
								}
							/>
						</div>
						// </Card>
					))}
				</div>

				{/*<Card>*/}
				<Button value={'Применить'} onClick={props.handleSubmit} style={{marginRight: '10px'}} />
				<Button
					tooltip={'Очистить все поля'}
					value={''}
					icon={<i className="icons10-eraser"></i>}
					onClick={props.handleReset}
					style={{marginRight: '10px'}}
				/>
				<Button
					tooltip={'Добавить дополнительные кириллические символы'}
					value=""
					icon={<i className="icons10-indent"></i>}
					onClick={props.additionalElements}
				/>
				{/*</Card>*/}
			</NavPageContainer.Inner>
		</NavPageContainer>
	)
}

export default Editor
