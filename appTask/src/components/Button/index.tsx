import { Text, TouchableOpacity, View } from "react-native";
import {AntDesign } from '@expo/vector-icons';
import { Conteiner } from "./styles";
export function Button() {
    return(
        <Conteiner>
            <TouchableOpacity>
                <View>
                    <AntDesign name="plus" size={24} color="#fff" />
                </View>
            </TouchableOpacity>
        </Conteiner>
    );
}