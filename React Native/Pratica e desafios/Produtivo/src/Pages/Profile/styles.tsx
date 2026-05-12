import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #1c1c1c;
`;

export const Perfil = styled.View`

  padding: 10px;
  margin: 30px;

  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 36px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 23px;
  margin-bottom: 7px;
`;

export const Email = styled.Text`
  font-size: 14px;
  color: #a1a1a1;
  margin-top: 4px;
`;

export const Sair = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #2a2a2a;

  border-radius: 14px;
  border-width: 0px;

  padding: 14px 120px;
`;

export const SairText = styled.Text`
  color: #f52c2c;
  font-size: 18px;
  font-weight: 600;
  margin-left: 8px;
  border
`;
