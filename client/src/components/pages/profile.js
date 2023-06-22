import {useEffect, useState} from 'react';

import profileCSS from './styles/profile.module.css'
import profileImg from './static/images/profile1.jpeg'

/*Mui component profile picture*/
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      
      <Avatar
        alt="N"
        // src={profileImg}
        sx={{ width: 200, height: 200 }}
      />
    </Stack>
  );
}
	


function Profile(){
	const [name, setName] = useState('name');
	const [joined, setJoined] = useState('yyyy-mm-dd');

		async function fetchData(){
			try{
				const id = localStorage.userUniqueId;
				const response = await fetch(`http://localhost:4000/${id}`);
				const data = await response.json();
				console.log(data)

				setName(data.name);
				setJoined(data.date.slice(0, data.date.indexOf('T')));

			}
			catch(error){
				console.log(error)
			}
		}

		useEffect(() => {
			fetchData();
		},[])

	return (
		<div className={profileCSS.main}>
			<ImageAvatars />
			<div className={profileCSS.innerMain}>
				
				<h1>{name}</h1>
				<p>Joined in: {joined}</p>
				<h3>Birth day:</h3>
				<p>month date, year</p>
			</div>
		</div>
	);
}

export default Profile;