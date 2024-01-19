import { Header } from './Header/Header'
import styles from './Layout.module.scss'
import { Main } from './Main/Main'
import { Shelf } from './Shelf/Shelf'

export function Layout() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Header />
			</header>
			<main className={styles.main}>
				<Main />
			</main>
			<Shelf />
		</div>
	)
}
