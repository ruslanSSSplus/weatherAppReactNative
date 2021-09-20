import React from 'react';
import {Loading} from "./assets/Loading/Loading";
import {Alert} from "react-native";
import * as Location from 'expo-location';
import axios from "axios";
import {Weather} from "./assets/Weather/Weather";

const API_KEY = '979ab0a1c46cbdc9cb27c613e41479b4'


export default class extends React.Component{

  state = {
    isLoading: true,
  }


  getWeather = async (latitude, longitude) => {
      const {data: {main: {temp}, weather}} = await axios.get(`https:api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      this.setState({temp: temp,
          condition: weather[0].main})
  }

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync()
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
            await this.getWeather(latitude, longitude)

        } catch (error) {
            Alert.alert("can't detect location", 'very sad :(')
        }
    }

  componentDidMount() {
     this.getLocation().then(() => {
         this.setState({isLoading: false})
     })
  }

  render() {
      const {isLoading, temp, condition} = this.state
    return (
    isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} />
        )

  }

}

