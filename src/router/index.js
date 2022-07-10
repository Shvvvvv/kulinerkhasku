import React, {useEffect, useState} from 'react';

import {StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Fontawe5 from 'react-native-vector-icons/FontAwesome5';

import {useDispatch, useSelector} from 'react-redux';

import {lebar} from '../assets/style/Style';
import {
  HomeDashboard,
  InfoToko,
  ListProduct,
  Login,
  Onboarding,
  SignupPelancong,
  SignupToko,
  Splash,
  Verify,
} from '../pages';
import AddProduct from '../pages/AddProduct';
import Artikel from '../pages/Artikel';
import DetailProduk from '../pages/DetailProduk';
import EditProfile from '../pages/EditProfile';
import HasilPencarian from '../pages/HasilPencarian';
import Produk from '../pages/ListProduct';
import ListProductByToko from '../pages/ListProductByToko';
import MyStore from '../pages/MyStore';
import MyStoreNothing from '../pages/MyStoreNothing';
import MyStoreNothingProduct from '../pages/MyStoreNothingProduct';
import OrderHistory from '../pages/OrderHistory';
import Profile from '../pages/Profile';
import LanjutDaftarToko from '../pages/SignupToko/lanjut';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const dispatch = useDispatch();
  const [userx, setUserx] = useState({
    id: 0,
    name: '',
    phone: '',
    email: '',
    role: '',
    status: '',
    token: '',
  });
  const user = useSelector(state => state.userReducer.dataUser.data);
  const getAll = async () => {
    const id = await AsyncStorage.getItem('idUser');
    const name = await AsyncStorage.getItem('name');
    const phone = await AsyncStorage.getItem('phone');
    const email = await AsyncStorage.getItem('email');
    const role = await AsyncStorage.getItem('role');
    const status = await AsyncStorage.getItem('status');
    const token = await AsyncStorage.getItem('token');
    setUserx({
      data: {
        id: id,
        name: name,
        phone: phone,
        email: email,
        role: role,
        status: status,
        token: token,
      },
    });
  };
  useEffect(() => {
    getAll();
    dispatch({type: 'SUCCES_LOGIN', payload: userx});
  }, []);
  console.log(userx.role);
  const history = userx.role === 'Pengunjung' && (
    <Tab.Screen
      name="History"
      component={OrderHistory}
      options={{
        tabBarIcon: ({color, size}) => (
          <Fontawe5 name="clipboard-list" color={color} size={size} />
        ),
      }}
    />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#eee', borderRadius: 20},
        tabBarActiveTintColor: '#33907C',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeDashboard}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontawe5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={userx.role === 'Pengunjung' ? 'Product' : 'Store'}
        component={userx.role === 'Pengunjung' ? ListProduct : MyStore}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontawe5 name="store" color={color} size={size} />
          ),
        }}
      />
      {history}
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontawe5 name="user-alt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupPelancong"
        component={SignupPelancong}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupToko"
        component={SignupToko}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verify"
        component={Verify}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Produk"
        component={Produk}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HasilPencarian"
        component={HasilPencarian}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Artikel"
        component={Artikel}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailProduk"
        component={DetailProduk}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ListProductByToko"
        component={ListProductByToko}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LanjutDaftarToko"
        component={LanjutDaftarToko}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyStore"
        component={MyStore}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyStoreNothing"
        component={MyStoreNothing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyStoreNothingProduct"
        component={MyStoreNothingProduct}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ListProduct"
        component={ListProduct}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  navBottom: {
    backgroundColor: '#eee',
    width: lebar,
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

export default Router;
