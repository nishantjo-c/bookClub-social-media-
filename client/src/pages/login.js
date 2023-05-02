import loginCSS from './styles/login.module.css';
import {useState} from 'react';

function Login(){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function login(event){
		event.preventDefault();
		const response = await fetch('http://localhost:8000/login', {
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				email,
				password
			})
		});
		const data = await response.json();
		console.log(data);
	}

	return (
		<div className={loginCSS.container}>
		<h2>Login</h2>
			<form onSubmit={login} className={loginCSS.form}>
				<input
					type="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type='submit'
					value='register'/>
			</form>
		</div>
	);
}

export default Login;