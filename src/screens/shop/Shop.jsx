import styles from './Shop.module.scss'
import Layout from '/src/components/layout/Layout'
import Header from '/src/components/layout/header/Header'

const Shop = () => {
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<Header />
			</header>
			<p>Your basket:</p>

			<Layout />
		</div>
	)
}

export default Shop
