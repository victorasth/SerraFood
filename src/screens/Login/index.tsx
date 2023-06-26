import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { ImagemLogin } from './../../assets/image/index';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={ImagemLogin}/>

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
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('FirstPage')} style={styles.loginButtom}>
                <Text style={styles.loginText}>Logar</Text>
              </TouchableOpacity>
    </View>
    
  );
};

export default Login;
