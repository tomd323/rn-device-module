import { View } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";


function AddPlace({ navigation }) {

    function createPlaceHandler(place) {
        navigation.navigate('AllPlaces', {
            place: place
        });
    }
    return (
        <View>
            <PlaceForm onCreatePlace={createPlaceHandler} />
        </View>
    );
}

export default AddPlace;
