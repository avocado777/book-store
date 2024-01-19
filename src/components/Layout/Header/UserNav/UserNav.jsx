import {
	Bookmark,
	CircleUserRound,
	MoreVertical,
	ShoppingCart,
} from 'lucide-react'
import styles from './UserNav.module.scss'

export function UserNav() {
	return (
		<div className={styles.user_nav}>
			<a href=''>
				<Bookmark />
			</a>
			<a href=''>
				<ShoppingCart />
			</a>
			<a href=''>
				<CircleUserRound />
			</a>
			<a href=''>
				<MoreVertical />
			</a>
		</div>
	)
}
