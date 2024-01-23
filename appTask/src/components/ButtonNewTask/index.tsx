import { Text, TouchableOpacity, View } from "react-native";
import {AntDesign } from '@expo/vector-icons';
import { Conteiner, Bott } from "./styles";
import { colors } from "../../styles/variaveis";

export function ButtonNewTask() {
    return(
        <Conteiner>
            <Bott >
                <View>
                    <AntDesign name="plus" size={30} color={colors.secundary} />
                </View>
            </Bott>
        </Conteiner>

    );
}