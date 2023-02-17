import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputPeso from './components/input'


export default function App() {
  return (
    <View style={styles.container}>
			<Text style={styles.title}>Calcule seu IMC</Text>
			<Text style={styles.subtitle}>O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</Text>
			<View style={styles.body}>
				<InputPeso/>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
	title: {
		color:'white',
		fontSize: 30,
		fontWeight: 'bold',
		width: '100%',
		justifyContent: 'center',
		textAlign: 'center',
		marginBottom: 20
	},
	subtitle: {
		color: 'white',
		fontSize: 18,
		width: '80%',
		textAlign: 'center',
		marginBottom: 20		
	},
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center',
		display: 'flex',
  },
	button:{
		borderRadius: 4,
		fontSize: 20,
		width: '60%',
		margin: 20
	},
	body:{
		backgroundColor: '#393939',
		width: '90%',
		borderRadius:4,
		padding: 10,
		textAlign: 'center',
		marginTop: 40
	}

});
