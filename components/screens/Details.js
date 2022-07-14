import { Alert, StyleSheet, ActivityIndicator, Text, Platform, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchSevenDays } from '../../api';
import WeekDays from '../WeekDays';

const latsAndLongs = {
    Tbilisi: {latitude: '41.7151', longitude: '44.8271'},
    Batumi: {latitude: '41.6168', longitude: '41.6367'},
    Kutaisi: {latitude: '42.2662', longitude: '42.7180'}
};

const Details = ({route}) => {

    const [forecast, setForecast] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const sevenDaysForecast = async() => {
            await fetchSevenDays(latsAndLongs[route.params.name].latitude, latsAndLongs[route.params.name].longitude)
            .then(res => setForecast(res))
            .then(res => setDataFetched(true))
            .catch(err => Alert.alert(`${err}`));
        }
        sevenDaysForecast();        
    }, [])

    if(dataFetched === false){
        return(
            <View style={s.activityIndicatorStyle}>
                <ActivityIndicator size='large' color='#293462'/>
            </View>
        )
    }

    return (
        <View style={s.container}>
            <Text style={s.title}>{route.params.name}</Text>
                <FlatList 
                    data={forecast.daily} 
                    showsVerticalScrollIndicator={false} 
                    renderItem={({item}) => (
                        <WeekDays 
                            day={forecast.daily.indexOf(item)} 
                            temp={item.temp.day} 
                            weather={item.weather} 
                            feels={item.feels_like.day} 
                        />
                    )}
                />
        </View>
  )
}

export default Details

const s = StyleSheet.create({
    title: {
        alignSelf: 'center',
        marginVertical: 20,
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Inter_700Bold',
        fontSize: 18,
        fontWeight: '700',
        color: '#293462',
    },
    container: {
        paddingHorizontal: 24,
        flex: 1,
    },
    activityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})