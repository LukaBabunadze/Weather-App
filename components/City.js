import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Pressable, View, Image } from 'react-native'

const dummyData = {
    Tbilisi: 'https://i.natgeofe.com/n/e1601e92-9017-4b02-ad0e-72c531b09126/tbilisi-city-guide-roofs.jpg', 
    Kutaisi: 'https://www.tripsavvy.com/thmb/p9oZJMswJquF81dKWSCerhvJH64=/4000x2250/smart/filters:no_upscale()/beautiful-aerial-view-of-bagrati-cathedral-in-kutaisi-city-in-georgia--1188643337-8638e92398e84326a385d921d66f984d.jpg',
    Batumi: 'https://www.georgianholidays.com/storage/N1bjaazsv8x6OGkhl3GQn7m1pddNNRHh0rzPbMzY.jpeg', 
};

const City = ({name, main, weather}) => {

    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("Details", {name})} style={s.container}>
            <Image style={s.imageStyle} source={{uri: `${dummyData[name]}`}}/>
            <View style={s.textContainer}>
                <Text style={s.name}>{name}</Text>
                <Text style={s.weatherText}>Temperature: {Math.trunc(main.temp - 273)}©</Text>
                <Text style={s.weatherText}>Feels Like: {Math.trunc(main.feels_like - 273)}©</Text>
                <Text style={s.weatherText}>Weather: {weather[0].main}</Text>
            </View>
        </Pressable>
  )
}

export default City

const s = StyleSheet.create({
    container: {
        backgroundColor: '#7A86B6',
        marginHorizontal: 22,
        height: '50%',
        alignSelf: 'center',
        width: 270,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        paddingBottom: 10,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 10,
        
    },
    name: {
        fontSize: 18,
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Inter_600SemiBold',
        fontWeight: '700',
        marginBottom: 4,
    },
    imageStyle: {
        height: '75%',
        width: '100%',
    },
    textContainer: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    weatherText: {
        color: '#e3e1e1',
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Inter_600SemiBold',
        fontSize: 13.5,
    }
})