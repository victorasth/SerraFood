import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { PizzaHome, Logo } from './../../assets/image/index';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={PizzaHome} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Logo} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cadastroButton} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.cadastroText}>Cadastro</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
