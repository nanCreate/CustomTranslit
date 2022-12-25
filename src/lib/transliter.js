const transliter = (text, model) => {
	return text
		.split('')
		.map((char) => model[char] || char)
		.join('')
}
export default transliter
