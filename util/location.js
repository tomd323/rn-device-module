const GOOGLE_MAPS_API_KEY = 'AIzaSyAy0RzigZzOnpwT9Eis60gun683cIUGf9E';

export function getMapPreview(lat, long) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_MAPS_API_KEY}`
    return imagePreviewUrl;
}

export async function getAddress(lat, long) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch address. Please try again later.');
    }

    const data = await response.json();
    const address = data.results[0].formatted_address;

    return address;
}