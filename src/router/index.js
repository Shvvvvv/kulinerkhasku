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
  ListProduct,
  Login,
  Onboarding,
  SignupPelancong,
  SignupToko,
  Splash,
  Verify,
} from '../pages';
import AddProduct from '../pages/AddProduct';
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
import InfoToko from '../pages/InfoToko';
import ForgotPassword from '../pages/ForgotPassword';
import EditProduct from '../pages/EditProduct';
import EditStore from '../pages/EditStore';

const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProductStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          headerShown: false,
        }}
      />
    </HistoryStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="ListProduct"
        component={ListProduct}
        options={{
          headerShown: false,
        }}
      />
    </ProductStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeDashboard"
        component={HomeDashboard}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="HasilPencarian"
        component={HasilPencarian}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ListProduct"
        component={ListProduct}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

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
  // const user = useSelector(state => state.userReducer.dataUser.data);
  const getAll = async () => {
    // const id = await AsyncStorage.getItem('idUser');
    // const name = await AsyncStorage.getItem('name');
    // const phone = await AsyncStorage.getItem('phone');
    // const email = await AsyncStorage.getItem('email');
    // const role = await AsyncStorage.getItem('role');
    // const status = await AsyncStorage.getItem('status');
    // const token = await AsyncStorage.getItem('token');
    // // console.log(role + ' merupakan rolenya');
    // setUserx({
    //   data: {
    //     id: id,
    //     name: name,
    //     phone: phone,
    //     email: email,
    //     role: role,
    //     status: status,
    //     token: token,
    //   },
    // });
    await AsyncStorage.getItem('dataLogin', (error, result) => {
      if (result) {
        let data = JSON.parse(result);
        console.log(data);
        setUserx({
          id: data.id,
          name: data.name,
          phone: data.phone,
          email: data.email,
          role: data.role,
          status: data.status,
          token: data.token,
        });
      }
    });
  };
  useEffect(() => {
    getAll();
    dispatch({type: 'SUCCES_LOGIN', payload: userx});
    // console.log(userx);
  }, []);

  useEffect(() => {
    // console.log(userx);
  }, [userx]);

  const history = userx?.role === 'Pengunjung' && (
    <Tab.Screen
      name="History"
      component={HistoryStackScreen}
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
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontawe5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={userx?.role === 'Pengunjung' ? 'Product' : 'Store'}
        component={userx?.role === 'Pengunjung' ? ProductStackScreen : MyStore}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontawe5 name="store" color={color} size={size} />
          ),
        }}
      />
      {history}
      <Tab.Screen
        name="Profil"
        component={ProfileStackScreen}
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
        name="LanjutDaftarToko"
        component={LanjutDaftarToko}
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
        name="InfoToko"
        component={InfoToko}
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
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProduct}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditStore"
        component={EditStore}
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
        name="DetailProduk"
        component={DetailProduk}
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
