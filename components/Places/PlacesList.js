import { View, Text, StyleSheet, FlatList } from 'react-native';
import PlaceItem from './PlaceItem';

import { Colors } from '../../constants/colors';

function PlacesList({ places }) {

    if (!places || places.length === 0) {
        console.log('No places found', places);
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No places found. Maybe start adding some!</Text>
            </View>
        )
    }

    console.log('Places found:', places);

    return <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem place={item} />}
    />

}

export default PlacesList;

const styles = StyleSheet.create({
    fallbackContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
    },

    fallbackText: {
        fontSize: 16,
        color: Colors.primary200,
    }
});