import { useState } from "react";
import { TextInput, View, StyleSheet,Text,Button, Alert } from "react-native";

export default function InputPeso(){

	const [altura, setAltura] = useState('0');
	const [peso, setPeso] = useState('0');
	const [resultado, setResultado] = useState('');

	function calculateIMC(){
		setResultado('');
		if(peso <= 0 || altura <= 0){
			Alert.alert('Erro', 'Não é possivel criar a analise com numeros negativos ou zerados')
			return;
		}
		const cont = peso / (altura * altura);
		let result;
		
		if(cont <= 0){
			Alert.alert('Erro', 'Erro ao criar analise!')
			return;
		}else if(cont < 18.5){
			result = 'Abaixo do peso normal!'
		}else if(cont >= 18.5 && cont < 25){
			result = 'Peso normal!'
		}else if(cont >= 25 && cont < 30){
			result = 'Excesso de peso!'
		}else if(cont >= 30 && cont < 35){
			result = 'Obesidade classe 1!'
		}else if(cont >= 35 && cont < 40){
			result = 'Obesidade classe 2!'
		}else{
			result = 'Obesidade classe 3!'
		}

		setResultado(result);
	}

	return(
		<View style={styles.container}>
			<Text style={styles.subtitle}>Peso em quilos </Text>
			<TextInput 
			keyboardType={'numeric'}
			style={styles.input}
			value={peso}
			onChangeText={text => setPeso(text)}
			placeholder="Digite o peso"/>
			<Text style={styles.subtitle}>Altura em metros </Text>
			<TextInput 
			keyboardType={'numeric'}
			style={styles.input}
			value={altura}
			onChangeText={text => setAltura(text)}
			placeholder="Digite a altura"/>
			<Text></Text>
			<Text style={styles.result}>{resultado}</Text>
			<Text></Text>
			<Button
					style={styles.button}
					color="#06AD00"
					title='Calcular IMC'
					onPress={() => calculateIMC()}
					accessibilityLabel="Learn more about this purple button" />
		</View>
	)
}

const styles = StyleSheet.create({
	result:{
		color: 'white',
		fontSize: 25
	},
	container:{
		justifyContent: 'center',
		alignContent:'center',
		width: '100%',
		alignItems: 'center',
	},
	subtitle:{
		color: 'white',
		fontSize:18,
		fontWeight: 'bold',
		marginTop: 10
	},
	input: {
		color: 'white',

		backgroundColor: '#8B8B8B',
		borderRadius: 4,
		width: 250,
		height: 50,
		padding: 8,
		borderColor: '#6B6B6B',
		borderWidth: 2,
		fontWeight: 'bold',
	}
})
