import styles from './Home.module.scss'
import Layout from '/src/components/Layout/Layout'
import Header from '/src/components/layout/header/Header'
import Main from '/src/components/layout/main/Main'

const Home = () => {
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<Header />
			</header>
			<main className={styles.main}>
				<Main />
			</main>
			<Layout />
		</div>
	)
}

export default Home
