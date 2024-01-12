import styled from "styled-components/native";
import { Platform } from "react-native";
import { colors } from "../../styles/variaveis";

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-top: ${Platform.OS === "android" ? 56 : 0}px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.secundary};
`