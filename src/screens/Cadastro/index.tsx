import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from './styles';
import { ImagemCadastro } from './../../assets/image/index';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};
const Cadastro: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={ImagemCadastro} />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    placeholderTextColor='#c1c2c4'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#c1c2c4'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor='#c1c2c4'
                /></View>

              <TouchableOpacity onPress={() => navigation.navigate('FirstPage')} style={styles.cadastroButtom}>
                <Text style={styles.cadastroText}>Cadastrar</Text>
              </TouchableOpacity>

        </View>
    );
};

export default Cadastro;
