import registerCSS from './styles/register.module.css';
import { Link } from 'react-router-dom'
import {useState} from 'react';

function Register(){

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function register(event){
		event.preventDefault();
		const response = await fetch('http://localhost:5000/register', {
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				name,
				email,
				password
			})
		});
		const data = await response.json();
		console.log(data);
	}

	return (
		<div className={registerCSS.container}>
		<h2>Register</h2>
			<form onSubmit={register} className={registerCSS.form}>
				<input
					type="text"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br/>
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
			<div className={registerCSS.footerForm}>
				<p>already a user?</p>
				<Link className={registerCSS.link} to='/login'>signup</Link>
			</div>
		</div>
	);
}

export default Register;