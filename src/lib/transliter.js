const transliter = (text, model) => {
	return [...text].reduce((result, char) => {
		return result + (model[char] === '' ? '' : model[char] || char)
	}, '')
}

export default transliter
