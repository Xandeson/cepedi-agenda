import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { colors } from "../../styles/variaveis";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding-top: ${Platform.OS === "android" ? 56 : 0}px;
    justify-content: center;
    align-items: center;
    padding: 0 25px ;
    background-color: ${colors.secundary};
`;
