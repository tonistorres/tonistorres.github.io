import{
    Container,
    Name,
    Username,
    ContainerNameLogin
    } from './UserDetailStyles';
    
    const UserDetails = props => (
        <Container>
            <ContainerNameLogin>
            <Name> <span>Usuários:  </span>{props?.name}</Name>
            <Username><span>Login:  </span>{props?.login}</Username>
            </ContainerNameLogin>
        </Container>
    );
    
    export default UserDetails;