import{
// Container,
ProfilePicture
}from './UserPictureStyles'


const UserPicture = props => (
<>
    <ProfilePicture src={props?.url} alt={props?.alternativeText} />
</>

);


export default UserPicture;
