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

//dos outros:
export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const Input = styled.TextInput`
  background-color: #222;
  border-radius: 4px 0 0 4px;
  flex: 1;
  height: 56px;
  padding: 16px;
  color: #ffffff;
`;

export const ButtonAdd = styled.TouchableOpacity`
  padding: 16px;
  background-color: #1E1E1E;
  border-radius: 0 4px 4px 0;
`;