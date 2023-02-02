const transliter = (text, model) => {
	let result = ''

	for (let i = 0; i < text.length; ++i) {
		if (model[text[i]] === undefined) {
			result += text[i]
		} else {
			result += model[text[i]]
		}
	}

	return result
}
export default transliter
