import loginCSS from './styles/login.module.css';
import { Link,useHistory } from 'react-router-dom'
import {useState} from 'react';

function Login(){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const history = useHistory();

	async function login(event){
		event.preventDefault();

		try{

			const response = await fetch('http://localhost:4000/login', {
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify({
					email,
					password
				})
			});
			const { validation, objectId } = await response.json();
			console.log(validation, objectId);
			
			if(objectId !== undefined){
				localStorage.setItem('userUniqueId', objectId);
			}

			if(localStorage.userUniqueId === objectId && localStorage.userUniqueId !== undefined){
				console.log(localStorage.userUniqueId === undefined)
				history.push('/home');
			}
			else{
				history.push('/login')
				alert('user not found!')
				history.push('/register')
			}
			// return data;

			}
		catch(error){
			console.log(error)
		}
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
					value='login'/>
			</form>
			<div className={loginCSS.footerForm}>
				<p>not a user?</p>
				<Link className={loginCSS.link} to='/register'>register</Link>
			</div>
		</div>
	);
}

export default Login;