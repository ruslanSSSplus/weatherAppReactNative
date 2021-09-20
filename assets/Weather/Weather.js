import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'На улице дождь',
        subTitle: 'Не забудьте зонтик'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'Идет снег',
        subTitle: 'Оденься потеплее'
    },
    Drizzle:{
        iconName: 'weather-rainy',
        gradient: ['#3A7BD5', '#3A6073'],
        title: 'Моросит чуть-чуть',
        subTitle: 'Не заболей'
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Сейчас гроза',
        subTitle: 'На улицу не ходи'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#947168'],
        title: 'Там пыльно',
        subTitle: 'Будь аккуратнее'
    },
    Mist: {
        conName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Очень туманно',
        subTitle: 'Прям как в Англии'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Почти как туман',
        subTitle: 'Но не туман'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Почти как туман',
        subTitle: 'Но не туман'
    },
    Sand: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Там пыльно',
        subTitle: 'Будь аккуратнее'
    },
    Ash: {
        iconName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Там пыльно',
        subTitle: 'Будь аккуратнее'
    },
    Squall: {
        iconName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'На улице не знаю даже что',
        subTitle: 'Не ходи, оно тебе не надо'
    },
    Tornado: {
        iconName: 'weather-hazy',
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        title: 'Бушует торнадо',
        subTitle: 'Сиди дома'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Погода супер',
        subTitle: 'Сходи, погоняй мяч'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Облачно',
        subTitle: 'Погода хорошая'
    },

}




export function Weather ({temp, condition}) {
    return (

            <LinearGradient style={styles.container}
                            colors={weatherOptions[condition].gradient}>
                <StatusBar barStyle='light-content'/>
            <View  style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color='white'/>
                    <Text style={styles.temp}> {temp}°  </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}> {weatherOptions[condition].title} </Text>
                <Text style={styles.subTitle}> {weatherOptions[condition].subTitle} </Text>
             </View>
            </LinearGradient>


    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain',
        'Snow', 'Dust', 'Mist','Smoke',
        'Haze', 'Fog', 'Sand',
        'Ash', 'Squall', 'Tornado',
        'Clear', 'Clouds']).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    temp: {
        color: 'white',
        fontSize: 42,

    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'center',

    },
    subTitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',

    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',

    }
});