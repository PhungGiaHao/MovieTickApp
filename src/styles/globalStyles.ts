import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../theme/theme";

export const globalStyles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Black,
        paddingHorizontal: '14@s',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
