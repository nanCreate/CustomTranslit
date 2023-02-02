import {Accordion, NavPageContainer} from 'react-windows-ui'
import {Link} from 'react-router-dom'

const AboutPage = () => {
	return (
		<NavPageContainer hasPadding={false} animateTransition={true}>
			<NavPageContainer.Inner>
				<h1>О программе</h1>
				<p>
					Custom Translit <br /> Версия: 11 интерфейсный :3
				</p>

				<Accordion headerTitle="Лицензии" style={{width: '280px'}}>
					<Accordion.Panel>
						<div>
							<p>
								Custom Translit{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/nanCreate/CustomTranslit/master/LICENSE"
								>
									GNU 3.0
								</Link>
							</p>
							<p>
								@reduxjs/toolkit{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/reduxjs/redux-toolkit/master/LICENSE"
								>
									MIT
								</Link>
							</p>
							<p>
								@testing-library/jest-dom{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/testing-library/jest-dom/main/LICENSE"
								>
									MIT
								</Link>
							</p>
							<p>
								@reduxjs/react{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/reduxjs/react-redux/master/LICENSE.md"
								>
									MIT
								</Link>
							</p>
							<p>
								@testing-library/user-event{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/testing-library/user-event/main/LICENSE"
								>
									MIT
								</Link>
							</p>
							<p>
								react{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/facebook/react/main/LICENSE"
								>
									MIT
								</Link>
							</p>
							<p>
								react-redux{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/reduxjs/react-redux/master/LICENSE.md"
								>
									MIT
								</Link>
							</p>
							<p>
								react-router-dom{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/remix-run/react-router/main/LICENSE.md"
								>
									MIT
								</Link>
							</p>
							<p>
								react-windows-ui{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/virtualvivek/react-windows-ui/main/LICENSE"
								>
									MIT
								</Link>
							</p>
							<p>
								redux{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/reduxjs/redux/master/LICENSE.md"
								>
									MIT
								</Link>
							</p>
							<p>
								redux-persist{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/rt2zz/redux-persist/master/LICENSE"
								>
									MIT
								</Link>
							</p>
							<p>
								redux-thunk{' '}
								<Link
									target={'_blank'}
									to="https://raw.githubusercontent.com/reduxjs/redux-thunk/master/LICENSE.md"
								>
									MIT
								</Link>
							</p>
						</div>
					</Accordion.Panel>
				</Accordion>

				<p>💖 от nanCreate</p>
			</NavPageContainer.Inner>
		</NavPageContainer>
	)
}

export default AboutPage
