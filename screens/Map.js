import { useCallback, useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";


function Map({ navigation, route }) {
    const initialLocation = route.params && {
        lat: route.params.initialLat,
        long: route.params.initialLong,
    };

    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const region = {
        latitude: initialLocation ? initialLocation.lat : 37.78,
        longitude: initialLocation ? initialLocation.long : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude;
        const long = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({
            lat: lat,
            long: long,
        });
    }

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert('No location picked', 'Please pick a location on the map', [{ text: 'Okay' }]);
            return;
        }

        navigation.navigate('AddPlace', {
            pickedLat: selectedLocation.lat,
            pickedLong: selectedLocation.long,
        });
    }, [selectedLocation]);

    useLayoutEffect(() => {
        if (initialLocation) {
            return;
        }
        navigation.setOptions({
            headerRight: ({ tintColor }) => (
                <IconButton
                    icon="save"
                    size={24}
                    color={tintColor}
                    onPress={savePickedLocationHandler}
                />
            ),
        });
    }, [navigation, savePickedLocationHandler, initialLocation]);



    return (
        <MapView
            style={styles.map}
            initialRegion={region}
            onPress={selectLocationHandler}
        >
            {selectedLocation && <Marker coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.long }} />}
        </MapView>

    )
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1,
    }
});