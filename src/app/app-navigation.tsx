import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '@pages/main-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Payments } from '@pages/payments';
import { ProfileIcon, PaymentIcon, MainIcon, AtmsIcon } from '@shared/ui/icons';
import React from 'react';

import { Context } from '@shared/store/store';
import { ListCompany } from '@pages/list-company';
import { PaymentPage } from '@pages/payment-page';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export const AppNavigation = () => {

  const data = React.useContext(Context);

  return (
    <Stack.Navigator 
      initialRouteName={'HomeScreen'}
      screenOptions={{ headerShown: false, headerStyle: {backgroundColor:'#312C39'}} }
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListCompany" component={ListCompany}/>
      <Stack.Screen name="PaymentPage" component={PaymentPage}/>
    </Stack.Navigator>
  );
};



export const HomeScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {

          switch (route.name) {
            case 'Главная':
              return <MainIcon size={size} color={color} />;
             
            case 'Платежи':
              return <PaymentIcon size={size} color={color} />;
             
            case 'Банкоматы':
              return <AtmsIcon size={size} color={color} />;
            
            case 'Профиль':
              return <ProfileIcon size={size} color={color} />;
            
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#F678BA',
        inactiveTintColor: '#C2C1C6',
        style: {
          backgroundColor: '#312C39',
        },
      }}
    >
      <Tabs.Screen name="Главная" component={MainScreen} />
      <Tabs.Screen name="Платежи" component={Payments} />
      <Tabs.Screen name="Банкоматы" component={MainScreen} />
      <Tabs.Screen name="Профиль" component={MainScreen} />
    </Tabs.Navigator>
  );
};
