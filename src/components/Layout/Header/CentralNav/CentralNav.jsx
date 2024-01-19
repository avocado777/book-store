import { Headphones, Library } from 'lucide-react'
import styles from './CentralNav.module.scss'

export function CentralNav() {
	return (
		<div className={styles.nav_header}>
			<a className={styles.books} href='/books'>
				<Library />
				Books
			</a>
			<a className={styles.audiobooks} href='/audio books'>
				<Headphones />
				AudioBooks
			</a>
		</div>
	)
}
