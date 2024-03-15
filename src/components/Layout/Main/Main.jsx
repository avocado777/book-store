import styles from './Main.module.scss'
import Title from './Title/Title'

const Main = () => {
	return (
		<>
			<Title />
			<div className={styles.container}>
				<div className={styles.mainBook}>
					<img src='/public/harry-and-rock.webp' alt='' />
				</div>
				<div className={styles.author}>
					<h2>Author of the Week</h2>
					<div className={styles.author__container}></div>
				</div>
				<div className={styles.listen}>
					<h2>Last listened</h2>
					<div className={styles.listen__container}></div>
				</div>
			</div>
		</>
	)
}

export default Main
