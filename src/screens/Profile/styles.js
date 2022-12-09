import { palette } from "../../theme/palette";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.lightblue,
        alignItems: 'center', 
        paddingTop: 36
    },
    petsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: palette.orange,
        marginTop: 50,
    }
})