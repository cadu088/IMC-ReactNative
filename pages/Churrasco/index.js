import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react';

export default function Churrasco() {
	const navigation = useNavigation();
	const [qtdM, setQtdM] = useState(0);
	const [qtdF, setQtdF] = useState(0);
	const [qtdCrianca, setQtdCrianca] = useState(0);
	const [result, setResult] = useState('');

	function calculo(){
		const refM = 400 * qtdM; 
		const refF = 300 * qtdF; 
		const refCrianca = 200 * qtdCrianca; 

		const resultado = 'Quantidade total: ' + ((refM + refF + refCrianca) / 1000) + 'KG' 
		+ ' \nQuantidade Masculina: ' + (refM / 1000) + 'KG'
		+ ' \nQuantidade Feminina: ' + (refF / 1000) + 'KG'
		+ ' \nQuantidade Crianças: ' + (refCrianca / 1000) + 'KG'
		+ ' \nQuantidade de carvão: ' + (Math.ceil(((refM + refF + refCrianca) / 1000) / 6)) + ' Pacotes'

		setResult(resultado);

	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Churrascometro</Text>
			<View style={styles.inputs}>
				<Text style={styles.subtitle}>Quantidade Masculina</Text>
				<TextInput 
					keyboardType={'numeric'}
					style={styles.input}
					value={qtdM}
					onChangeText={qtd => setQtdM(qtd)}
					placeholder="Quantidade"/>
				<Text style={styles.subtitle}>Quantidade Feminina</Text>
				<TextInput 
					keyboardType={'numeric'}
					style={styles.input}
					value={qtdF}
					onChangeText={qtd => setQtdF(qtd)}
					placeholder="Quantidade"/>
				<Text style={styles.subtitle}>Quantidade de crianças até 11 anos</Text>
				<TextInput 
					keyboardType={'numeric'}
					style={styles.input}
					value={qtdCrianca}
					onChangeText={qtd => setQtdCrianca(qtd)}
					placeholder="Quantidade"/>
				<Text></Text>
				<Text style={styles.result}>{result}</Text>
				<Text></Text>
				<Button
					style={styles.button}
					color="#06AD00"
					title='Calcular IMC'
					onPress={() => calculo()}
					accessibilityLabel="Learn more about this purple button" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#282828',
		color: '#fff' ,
    alignItems: 'center',
    justifyContent: 'center',
		display: 'flex',
	},
	title: {
		color:'white',
		fontSize: 30,
		fontWeight: 'bold',
		width: '100%',
		justifyContent: 'center',
		textAlign: 'center',
		marginBottom: 20
	},
	inputs:{
	}
	,	subtitle:{
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
	}, result:{
		color:'white',
		fontSize: 20,
		fontWeight: 'bold',
		width: '100%',
		marginBottom: 20
	}
});
