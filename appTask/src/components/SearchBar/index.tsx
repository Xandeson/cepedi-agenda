import { TextInput, StyleSheet } from "react-native";
import { Input, SearchContainer } from "./styles"
import { AntDesign } from '@expo/vector-icons';

export function SearchBar(){
    return (
        <SearchContainer>
            <Input/>
            <AntDesign name="search1" size={24} color="black" />
        </SearchContainer>
    )
}