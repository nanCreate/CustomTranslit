import {useState} from 'react'
import {Alert, Link, NavPageContainer, NavPageContainerInner} from 'react-windows-ui'

const AboutPage = () => {
	const [notification, setNotification] = useState(false)

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainerInner>
				<h1>О программе</h1>
				<p>
					Custom Translit <br /> Версия: рефакторная призрачная 3:
				</p>
				{/*<Link to={'#'}>Лицензии</Link>*/}
				<p>💖 от nanCreate</p>
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default AboutPage
