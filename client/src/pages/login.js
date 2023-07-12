import loginCSS from './styles/login.module.scss';
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
		<>

			
			<div className={loginCSS.container}>
				<div className={`${loginCSS.col_1_of_2} ${loginCSS.container__title}`}>bookClub</div>
				<div className={`${loginCSS.col_1_of_2} ${loginCSS.container__login}`}>
					
					<form onSubmit={login} className={loginCSS.container__form}>
						<h1 className={loginCSS.container__h1}>Login</h1>
						<input
							className={loginCSS.container__cred}
							type="email"
							placeholder="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<br/>
						<input
							className={loginCSS.container__cred}
							type="password"
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						
						<div className={loginCSS.footerForm}>
							<p className={loginCSS.container__text}>not a user?</p>
							<Link className={loginCSS.link} to='/register'>register</Link>

							<input
								className={loginCSS.container__button}
								type='submit'
								value='Login'
							/>
						</div>
					</form>
					
				</div>
			</div>
		</>
	);
}

export default Login;