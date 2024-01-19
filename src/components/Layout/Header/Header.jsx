import { CentralNav } from './CentralNav/CentralNav'
import styles from './Header.module.scss'
import { UserNav } from './UserNav/UserNav'

export function Header() {
	return (
		<>
			<a className={styles.logo} href='/'>
				BOOKS
			</a>
			<CentralNav />
			<UserNav />
		</>
	)
}
