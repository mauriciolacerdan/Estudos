import { StyleSheet, View, Text } from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Tela Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
