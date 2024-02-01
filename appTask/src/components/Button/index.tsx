import { Text, TouchableOpacity, View } from "react-native";
import {AntDesign } from '@expo/vector-icons';
import { Conteiner, Bott } from "./styles";
import { colors } from "../../styles/variaveis";
import { useNavigation } from '@react-navigation/native';


export function Button({navigation}: {navigation: any}) {
    const handlePress = () => {
        navigation.navigate('DetailTask');
      };
    return(
         <Conteiner>
      <Bott onPress={handlePress}>
        <View>
          <AntDesign name="plus" size={30} color={colors.secundary} />
        </View>
      </Bott>
    </Conteiner>
    );
}