import registerCSS from './styles/register.module.css';
import { Link, useHistory } from 'react-router-dom'
import {useState} from 'react';

function Register(){

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	async function register(event){
		event.preventDefault();
		const response = await fetch('http://localhost:4000/register', {
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
		const {status, message} = await response.json();
		if(status === 'ok'){
			history.push('/login');
			console.log(message);
		}
	}

	return (
		<div className={registerCSS.body}>
			<div className={registerCSS.container}>
			<h2 className={registerCSS.h2}>Register</h2>
				<form onSubmit={register} className={registerCSS.form}>
					<input
						className={registerCSS.credContainer}
						type="text"
						placeholder="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<br/>
					<input
						className={registerCSS.credContainer}
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<br/>
					<input
						className={registerCSS.credContainer}
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						id={registerCSS.button}
						type='submit'
						value='register'/>
				</form>
				<div className={registerCSS.footerForm}>
					<p>already a user?</p>
					<Link className={registerCSS.link} to='/login'>signup</Link>
				</div>
			</div>
		</div>
	);
}

export default Register;