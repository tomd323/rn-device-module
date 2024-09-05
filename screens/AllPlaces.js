import { View, Text, Stylesheet } from 'react-native';
import PlacesList from '../components/Places/PlacesList';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { fetchPlaces } from '../util/database';


function AllPlaces({ route }) {
    const [loadedPlaces, setLoadedPlaces] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        async function loadPlaces() {
            const places = await fetchPlaces();
            setLoadedPlaces(places);
        }

        if (isFocused) {
            loadPlaces();
        }

    }, [isFocused]);

    return (
        <View>
            <PlacesList places={loadedPlaces} />
        </View>
    );

}

export default AllPlaces;
