import { Alert } from "react-native";

export const fetchData = async(title) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${title}&appid=c3b15aa11a2b6994f0f8cd9811a04713`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => Alert.alert(`${err}`));

    return result; 
}

export const fetchSevenDays = async(latitude, longitude) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=c3b15aa11a2b6994f0f8cd9811a04713`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => Alert.alert(`${err}`));

    return result;
}


