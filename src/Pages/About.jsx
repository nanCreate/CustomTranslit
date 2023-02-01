import {NavPageContainer} from 'react-windows-ui'

const AboutPage = () => {
	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainer.Inner>
				<h1>О программе</h1>
				<p>
					Custom Translit <br /> Версия: дополняемая и исправляемая :3
				</p>
				<p>💖 от nanCreate</p>
			</NavPageContainer.Inner>
		</NavPageContainer>
	)
}

export default AboutPage
