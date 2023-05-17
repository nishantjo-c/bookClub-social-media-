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
				
				<h1>Nishant Joshi</h1>
				<p>Joined in</p>
				<h3>Birth day:</h3>
				<p>January 4, 2001</p>
			</div>
		</div>
	);
}

export default Profile;