import { Text, TouchableOpacity, View } from "react-native";
import {AntDesign } from '@expo/vector-icons';
import { Conteiner, Bott } from "./styles";

export function Button() {
    return(
        <Conteiner>
            <Bott>
                <View>
                    <AntDesign name="plus" size={30} color="#003269" />
                </View>
            </Bott>
        </Conteiner>
    );
}