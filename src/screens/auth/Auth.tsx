import { SubmitHandler, useForm } from 'react-hook-form'
import * as styles from './Auth.module.scss'

const Auth = () => {
	interface IForm {
		email: string
		password: string
	}

	const { register, handleSubmit } = useForm<IForm>()

	const submit: SubmitHandler<IForm> = data => {
		console.log(data)
	}

	return (
		<div className={styles.auth}>
			<form onSubmit={handleSubmit(submit)}>
				<input type='text' placeholder='Email:' {...register('email')} />
				<input type='text' placeholder='Password:' {...register('password')} />
				<button>Send</button>
			</form>
		</div>
	)
}

export default Auth
