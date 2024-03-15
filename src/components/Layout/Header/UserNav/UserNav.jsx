import { CircleUserRound, MoreVertical, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './UserNav.module.scss'

const UserNav = () => {
	return (
		<div className={styles.user_nav}>
			{/* <a href='/b'>
				<Bookmark />
			</a> */}
			<Link to='/shopping'>
				<ShoppingCart />
			</Link>
			<Link to='/login'>
				<CircleUserRound />
			</Link>
			<Link to='/more'>
				<MoreVertical />
			</Link>
		</div>
	)
}

export default UserNav
