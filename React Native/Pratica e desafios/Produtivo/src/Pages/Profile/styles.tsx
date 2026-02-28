import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
`;

export const Perfil = styled.View`
  background-color: #ffffff;

  border-width: 1px;
  border-color: #e5e7eb;
  border-radius: 16px;

  padding: 10px;
  margin: 30px;

  align-items: center;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;

`;

export const Info = styled.View`
  margin-left: 15px;
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  //text-align: center;
`;

export const Email = styled.Text`
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
  //text-align: center;
`;

export const Sair = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;

  border-radius: 14px;
  border-width: 1;
  border-color: #ec5757;

  padding: 14px 120px;
`;

export const SairText = styled.Text`
  color: #f52c2c;
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
`;
2;
