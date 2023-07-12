import registerCSS from './styles/register.module.scss';
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
		<>
			<div className={registerCSS.container}>
			<div className={`${registerCSS.col_1_of_2} ${registerCSS.container__title}`}>bookClub</div>
			<div className={`${registerCSS.col_1_of_2} ${registerCSS.container__register}`}>

				<form onSubmit={register} className={registerCSS.container__form}>
					<h1 className={registerCSS.container__h1}>Register</h1>
					<input
						className={registerCSS.container__cred}
						type="text"
						placeholder="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<br/>
					<input
						className={registerCSS.container__cred}
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<br/>
					<input
						className={registerCSS.container__cred}
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className={registerCSS.footerForm}>
						<p className={registerCSS.container__text}>already a user?</p>
						<Link className={registerCSS.link} to='/login'>signin</Link>
						<input
							className={registerCSS.container__button}
							type='submit'
							value='Register'/>
					</div>
				</form>
				</div>
			</div>
		</>
	);
}

export default Register;