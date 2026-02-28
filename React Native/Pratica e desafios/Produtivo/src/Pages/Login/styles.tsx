import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Titulo = styled.Text`
  font-style: italic;
  color: #4169e1;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Texte = styled.Text`
  font-size: 18px;
  align-items: flex-start;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  width: 80%;
  border-color: #f2f2f2;
  border: 1px;
  border-radius: 8px;
  margin-top: 5px;
  font-size: 17px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: #4169e1;
  border-radius: 8px;
  margin-top: 30px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const SignUpText = styled.Text`
  font-size: 15px;
`;
