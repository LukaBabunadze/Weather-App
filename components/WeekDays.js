import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const weekArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let date = new Date();

const WeekDays = ({day, temp, weather, feels}) => {

    const [weekDay, setWeekDay] = useState('');

    useEffect(() => {
        if(date.getDay() + day <= 6){
            setWeekDay(date.getDay() + day)
        }else{
            setWeekDay(date.getDay() + day - 7)
        }
    }, [])
    
    return (
        <View style={s.container}>
            <Text style={s.weekDayTitle}>{weekArr[weekDay]}</Text>
            <Text style={s.textStyle}>Temperature: {Math.trunc(temp - 273)}©</Text>
            <Text style={s.textStyle}>Feels Like: {Math.trunc(feels - 273)}©</Text>
            <Text style={s.textStyle}>Weather: {weather[0].description}</Text>
        </View>
    )
}

export default WeekDays

const s = StyleSheet.create({
    container: {
        borderBottomWidth: 1.5,
        marginBottom: 20,
        paddingBottom: 10,
    },
    weekDayTitle: {
        marginBottom: 10,
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Inter_600SemiBold',
        fontSize: 16,
        fontWeight: '700',
        color: '#495C83'
        
    },
    textStyle: {
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Inter_500Medium',
        letterSpacing: -0.5,
        paddingVertical: 2,
    }
})