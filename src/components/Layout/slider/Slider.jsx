import styles from './Slider.module.scss'
import { forms } from './slider.data.ts'

const Slider = () => {
	return (
		<div className={styles.container}>
			<h2>Resent Bestsellers</h2>
			<div className={styles.slider}>
				{forms.map(form => (
					<div key={form.id} className={styles.form}>
						<img src={form.image} alt='' />
						<div>
							<h3>{form.name}</h3>
							<p>{form.descr}</p>
							<button>Buy Now</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Slider
