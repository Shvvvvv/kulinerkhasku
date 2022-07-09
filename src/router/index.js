import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeDashboard,
  ListProduct,
  Login,
  Onboarding,
  SignupPelancong,
  SignupToko,
  Splash,
  Verify,
  InfoToko,
} from '../pages';
import AddProduct from '../pages/AddProduct';
import Artikel from '../pages/Artikel';
import DetailProduk from '../pages/DetailProduk';
import HasilPencarian from '../pages/HasilPencarian';
import Produk from '../pages/ListProduct';
import ListProductByToko from '../pages/ListProductByToko';
import OrderHistory from '../pages/OrderHistory';
import LanjutDaftarToko from '../pages/SignupToko/lanjut';
import MyStore from '../pages/MyStore';
import MyStoreNothingProduct from '../pages/MyStoreNothingProduct';
import MyStoreNothing from '../pages/MyStoreNothing';
import Profile from '../pages/Profile';
import {lebar} from '../assets/style/Style';
import Fontawe5 from 'react-native-vector-icons/FontAwesome5';
import EditProfile from '../pages/EditProfile';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const user = useSelector(state => state.userReducer.dataUser.data);

  const history = user.role === 'Pengunjung' && (
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
        name={user.role === 'Pengunjung' ? 'Product' : 'Store'}
        component={user.role === 'Pengunjung' ? ListProduct : MyStore}
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
