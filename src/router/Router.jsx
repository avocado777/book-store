import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Audio from '../screens/audio/Audio'
import Auth from '../screens/auth/Auth'
import Home from '../screens/home/Home'
import Register from '../screens/register/Register'
import Shop from '../screens/shop/Shop'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/audio' element={<Audio />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/register' element={<Register />} />
				<Route path='/shopping' element={<Shop />} />
				<Route path='/login' />
				<Route path='/more' />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
