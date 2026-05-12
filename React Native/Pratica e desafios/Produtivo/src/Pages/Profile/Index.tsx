import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import {
  Container,
  Name,
  Email,
  Sair,
  SairText,
  Perfil,
  Avatar,
  Info,
} from './styles';

export default function Profile() {
  const { signOut, user } = useContext(AuthContext);
  return (
    <Container>
      <Perfil>
        <Avatar source={require('../../Assets/avatar.png')}></Avatar>

        <Name>{user.nome}</Name>
        <Email>{user.email}</Email>
      </Perfil>

      <Sair onPress={signOut} activeOpacity={0.7}>
        <SairText>Sair da Conta</SairText>
      </Sair>
    </Container>
  );
}
