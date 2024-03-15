import { Link } from 'react-router-dom'
import CentralNav from './CentralNav/CentralNav'
import styles from './Header.module.scss'
import UserNav from './UserNav/UserNav'

const Header = () => {
	return (
		<>
			<Link className={styles.logo} to='/'>
				BOOKS
			</Link>
			<CentralNav />
			<UserNav />
		</>
	)
}

export default Header
