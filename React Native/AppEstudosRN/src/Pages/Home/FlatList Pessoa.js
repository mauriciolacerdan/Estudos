//======================= FLATLIST =======================
//sendo exportado no Home
import {View, Text, StyleSheet} from 'react-native'

function Pessoa(props){
    return(
        <View style={styles.areaPessoa}>
            <Text style={styles.textopessoa}>{props.data.nome}</Text>
            <Text style={styles.textopessoa}>{props.data.idade} anos</Text>
            <Text style={styles.textopessoa}>{props.data.email}</Text>
        </View>
    );
  };

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#121212',
    marginBottom: 10,
    justifyContent: 'center',
  },
  textopessoa: {
    fontSize: 15,
    color: '#fff',
  },
})

export default Pessoa;