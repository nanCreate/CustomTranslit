const transliter = (text, model) => {
	let result = ''
	const converter = model

	for (let i = 0; i < text.length; ++i) {
		if (converter[text[i]] === undefined) {
			result += text[i]
		} else {
			result += converter[text[i]]
		}
	}

	return result
}

export default transliter
