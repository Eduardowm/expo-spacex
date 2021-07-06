import { StyleSheet } from "react-native";

const colors = {
    black: "#000000",
    white: "#FFFFFF",
    darkGrey: "#333333",
    lightGrey: "#EEEEEE"
};

export const listViewStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        height: "100%"
    },
    item: {
        display: "flex",
        backgroundColor: colors.white,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 50,
        shadowRadius: 2
    },
    header: {
        backgroundColor: colors.black,
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    headerText: {
        fontSize: 22,
        color: colors.white
    },
    subHeaderText: {
        fontSize: 18,
        color: colors.white
    },
    detailContainer: {
        padding: 20
    },
    detail: {
        paddingTop: 10,
        fontSize: 16,
        textAlign: "justify"
    },
    sectionHeader: {
        backgroundColor: colors.darkGrey,
        paddingVertical: 4,
        paddingHorizontal: 15
    },
    sectionHeaderText: {
        fontSize: 22,
        color: colors.lightGrey
    }
});

export const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: colors.black,
        width: "100%",
        height: 65,
        justifyContent: "flex-end",
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginVertical: 2,
        color: colors.white
    },
    title: {
        color: colors.lightGrey,
        fontSize: 32
    }
});

export const listScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkGrey,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        color: colors.lightGrey
    }
});
