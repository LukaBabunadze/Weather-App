import { Alert, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api'
import City from '../City'

const dummyData = ['Tbilisi', 'Kutaisi', 'Batumi']


const HomeScreen = () => {

    const [weather, setWeather] = useState([]);

    useEffect(() => {
        dummyData.map(title => fetchData(title)
        .then(res => setWeather(prev => [...prev, res]))
        .catch(err => Alert.alert(`${err}`))
        );
        
        setWeather([]);
    }, [dummyData])

    return (
      <View>
        {
        weather ? 
        (
          <View style={s.container}>
            <FlatList data={weather} 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              renderItem={({item}) => <City name={item.name} key={item.id} main={item.main} weather={item.weather}/>}
            />
          </View>
        ) 
        : 
        (<Text>Oops something went wrong!!!</Text>)}
        
      </View>
    )
}

export default HomeScreen;

const s = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  }
})