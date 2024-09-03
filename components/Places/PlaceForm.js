import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../constants/colors";

function PlaceForm() {
    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHandler(text) {
        setEnteredTitle(text);
    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} placeholder="Place Name" onChange={changeTitleHandler} value={enteredTitle} />
            </View>
        </ScrollView>
    );
}

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        padding: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
    }
});