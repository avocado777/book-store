import { Search } from 'lucide-react'
import styles from './Title.module.scss'

export function Title() {
	return (
		<>
			<div className={styles.section}>
				<section>New & Trending</section>
				<p>Explorer new worlds from authors</p>
				<div>
					<Search />
					<input
						type='text'
						name=''
						id=''
						placeholder='Titles, authors, or topics'
					/>
				</div>
			</div>
		</>
	)
}
