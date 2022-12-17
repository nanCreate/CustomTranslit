import {useState} from 'react'
import {Alert, Link, NavPageContainer, NavPageContainerInner} from 'react-windows-ui'

const AboutPage = () => {
	const [notification, setNotification] = useState(false)

	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<Alert
				title="Свинявый... плез..."
				isVisible={notification}
				message="Донат улетел оркам, наебали))"
				onBackdropPress={() => {}}
			>
				<button
					onClick={() => {
						setNotification(false)
					}}
				>
					OK
				</button>
			</Alert>

			<NavPageContainerInner>
				<h1>О программе</h1>
				<p>
					Custom Translit <br /> Версия: призрачная :3
				</p>
				<Link to={'#'}>Лицензии</Link>
				<p className={'light'}>💖 от nanCreate</p>
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default AboutPage
