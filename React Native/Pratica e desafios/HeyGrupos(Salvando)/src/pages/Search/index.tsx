import { StyleSheet, View, Text } from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Tela Search</Text>
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
