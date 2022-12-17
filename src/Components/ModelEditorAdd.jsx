import {Button, Card, InputText} from 'react-windows-ui'
import {useDispatch, useSelector} from 'react-redux'
import {setDraftNewModelAlphabet} from '../redux/draftNewModel-reducer'
import {addTranslitModel} from '../redux/translitModels-reducer'
import {Link} from 'react-router-dom'

const ModelEditorAdd = (props) => {
	const dispatch = useDispatch()
	const val = useSelector((state) => state.draftNewModel)

	const placeholder = ''
	const width = 100

	const lowerCaseAlphabet = [
		'а',
		'б',
		'в',
		'г',
		'д',
		'е',
		'ё',
		'ж',
		'з',
		'и',
		'й',
		'к',
		'л',
		'м',
		'н',
		'о',
		'п',
		'р',
		'с',
		'т',
		'у',
		'ф',
		'х',
		'ц',
		'ч',
		'ш',
		'щ',
		'ъ',
		'ы',
		'ь',
		'э',
		'ю',
		'я',
	]
	const lowerCaseAlphabetItem = lowerCaseAlphabet.map((e) => (
		<Card padding={10} key={e} display={'inline-block'} maxWidth={300}>
			<InputText
				onChange={(f) => dispatch(setDraftNewModelAlphabet({original: e, new: f.target.value}))}
				value={val.alphabet[e]}
				width={width}
				label={e}
				placeholder={placeholder}
			/>
		</Card>
	))

	const upperCaseAlphabet = [
		'А',
		'Б',
		'В',
		'Г',
		'Д',
		'Е',
		'Ё',
		'Ж',
		'З',
		'И',
		'Й',
		'К',
		'Л',
		'М',
		'Н',
		'О',
		'П',
		'Р',
		'С',
		'Т',
		'У',
		'Ф',
		'Х',
		'Ц',
		'Ч',
		'Ш',
		'Щ',
		'Ъ',
		'Ы',
		'Ь',
		'Э',
		'Ю',
		'Я',
	]
	const upperCaseAlphabetItem = upperCaseAlphabet.map((e) => (
		<Card padding={10} key={e} display={'inline-block'} maxWidth={300}>
			<InputText
				onChange={(f) => dispatch(setDraftNewModelAlphabet({original: e, new: f.target.value}))}
				value={val.alphabet[e]}
				width={width}
				label={e}
				placeholder={placeholder}
			/>
		</Card>
	))

	const addModel = () => {
		dispatch(
			addTranslitModel({title: 'Text', editable: true, name: Date.now(), alphabet: val.alphabet})
		)
	}

	return (
		<Card>
			<h3>Название модели</h3>

			<h3>Нижний регистр</h3>
			{lowerCaseAlphabetItem}

			<h3>Верхний регистр</h3>
			{upperCaseAlphabetItem}

			<Card>
				<Link to={'/editor'}>
					<Button value="Добавить новую модель" onClick={addModel} />
				</Link>
			</Card>
		</Card>
	)
}

export default ModelEditorAdd
