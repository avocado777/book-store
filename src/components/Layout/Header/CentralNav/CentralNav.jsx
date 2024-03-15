import { Headphones, Library } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './CentralNav.module.scss'

const CentralNav = () => {
	return (
		<div className={styles.nav_header}>
			<Link className={styles.books} to='/'>
				<Library />
				Books
			</Link>
			<Link className={styles.audio} to='/audio'>
				<Headphones />
				AudioBooks
			</Link>
		</div>
	)
}

export default CentralNav
