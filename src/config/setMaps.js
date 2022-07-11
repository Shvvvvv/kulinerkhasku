import React, {useEffect, useState} from 'react';

import {PermissionsAndroid, Platform, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';

const setMaps = () => {
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  let address = '';
  var watchID = null;

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, [
    currentLatitude,
    currentLongitude,
    getOneTimeLocation,
    subscribeLocationLocation,
    watchID,
  ]);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      async position => {
        // setLocationStatus('You are Here');
        Geocoder.geocodePosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }).then(results => {
          let result = results[0];
          // Address.saveFromMap(result);
          // setCurrentAddress(JSON.stringify(result.formattedAddress));
          address = result.formattedAddress;
          console.log('ini alamat nya :', result.formattedAddress);
          console.log('cek Alamat', address);
          // this.setState({
          //     addressText: result.formattedAddress,
          //     address: result
          // })
        });
        //getting the Longitude from the location json
        const currentLong = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLat = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLat);
        // console.log(currentLatitude);
        // await AsyncStorage.setItem('latitude', currentLat);

        //Setting Longitude state
        setCurrentLatitude(currentLong);
        // console.log(currentLongitude);
        // await AsyncStorage.setItem('latitude', currentLong);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      async position => {
        //Will give you the location on location change
        Geocoder.geocodePosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }).then(results => {
          let result = results[0];
          // Address.saveFromMap(result);
          // setCurrentAddress(JSON.stringify(result.formattedAddress));
          address = result.formattedAddress;
          console.log('ini alamat nya :', result.formattedAddress);
          console.log('cek Alamat', address);
          // this.setState({
          //     addressText: result.formattedAddress,
          //     address: result
          // })
        });
        // setLocationStatus('You are Here');
        console.log('ini location ?', locationStatus);

        //getting the Longitude from the location json
        const currentLong = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLat = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLong);
        // console.log('ini long: ', currentLong);

        //Setting Latitude state
        setCurrentLatitude(currentLat);
        // console.log('ini lat: ', currentLat);

        await AsyncStorage.mergeItem('latitude', currentLatitude);
        await AsyncStorage.mergeItem('longitude', currentLongitude);
        await AsyncStorage.mergeItem('currentAddress', address);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  };
};

export default setMaps;
