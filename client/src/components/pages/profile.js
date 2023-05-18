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
        src={profileImg}
        sx={{ width: 250, height: 250 }}
      />
    </Stack>
  );
}

function Profile(){
	return (
		<div className={profileCSS.main}>
			<ImageAvatars />
			<div className={profileCSS.innerMain}>
				
				<h1>firstname lastname</h1>
				<p>Joined in</p>
				<h3>Birth day:</h3>
				<p>month date, year</p>
			</div>
		</div>
	);
}

export default Profile;