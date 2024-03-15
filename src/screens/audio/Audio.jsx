import styles from './Audio.module.scss'
import Layout from '/src/components/layout/Layout'
import Header from '/src/components/layout/header/Header'

const Audio = () => {
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<Header />
			</header>
			<p>Audio Books:</p>

			<Layout />
		</div>
	)
}

export default Audio
