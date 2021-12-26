import{
Container,
ProfilePicture
}from './UserPictureStyles'


const UserPicture = props => (
<Container>
    <ProfilePicture src={props?.url} alt={props?.alternativeText} />
</Container>


);


export default UserPicture;
