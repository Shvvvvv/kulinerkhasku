import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import logo from '../../assets/Icon/fast-food.png';
import ButtonGreen from '../../components/button-green';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getHistoryByID} from '../../redux/actions';
import {useNavigation} from '@react-navigation/native';

const Card = props => {
  const nav = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        height: 70,
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
      }}>
      <Image
        source={logo}
        style={{
          height: '100%',
          width: '15%',
          borderRadius: 10,
          marginRight: 15,
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <Text style={{color: '#000'}}>{props.toko}</Text>
        <Text style={{color: '#33907C'}}>Rp 12.000,-</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <ButtonGreen
          judul="Kunjungi"
          p={25}
          l={100}
          link={() => {
            nav.navigate('ListProductByToko', {idToko: props.id});
          }}
        />
      </View>
    </View>
  );
};

const OrderHistory = ({navigation}) => {
  const dispatch = useDispatch();
  const [userx, setUserx] = useState({});
  const history = useSelector(state => state.userReducer.historyUser);
  const getAll = async () => {
    await AsyncStorage.getItem('dataLogin', (error, result) => {
      if (result) {
        let data = JSON.parse(result);
        setUserx({
          id: data.id,
          token: data.token,
        });
        dispatch(getHistoryByID(data.id, data.token));
        // console.log('kesini');
      }
    });
  };
  useEffect(() => {
    const refresh = navigation.addListener('focus', function () {
      getAll();
    });
    // return refresh;
  }, []);

  useEffect(() => {}, [userx]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <View style={{height: '10%', backgroundColor: '#33907C', padding: 20}}>
        <Text style={{fontSize: 25, color: 'white'}}>Riwayat Penelusuran</Text>
      </View>
      <View style={{backgroundColor: '#E5E5E5', flex: 1}}>
        <View
          style={{
            height: '13%',
            backgroundColor: '#E5E5E5',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text style={{color: 'black', marginRight: 60, fontSize: 23}}>
            Riwayat
          </Text>
          {/* <Text
            style={{
              color: '#33907C',
              backgroundColor: '#E6ECF0',
              borderRadius: 5,
              padding: 3,
              width: '27%',
              height: 27,
              textAlign: 'center',
            }}>
            Januari 2022
          </Text> */}
        </View>
        <ScrollView style={{paddingHorizontal: 15}}>
          {history.map(val => {
            return (
              <Card
                key={val.id}
                toko={val?.stores?.store_name}
                id={val?.stores?.id}
              />
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  navBottom: {
    backgroundColor: '#eee',
    width: '100%',
    height: 55,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
