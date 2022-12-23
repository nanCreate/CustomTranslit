import {NavPageContainer, NavPageContainerInner} from 'react-windows-ui'

const AboutPage = () => {
	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainerInner>
				<h1>О программе</h1>
				<p>
					Custom Translit <br /> Версия: дополняемая :3
				</p>
				<p>💖 от nanCreate</p>
			</NavPageContainerInner>
		</NavPageContainer>
	)
}

export default AboutPage
