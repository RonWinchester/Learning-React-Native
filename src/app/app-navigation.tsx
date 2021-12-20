import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '@pages/main-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Payments } from '@pages/payments';
import { ProfileIcon, PaymentIcon, MainIcon, AtmsIcon } from '@shared/ui/icons';
import React from 'react';
import { ListCompany } from '@pages/list-company';
import { PaymentPage } from '@pages/payment-page';
import { Popup } from '@shared/ui/core/molecules/Popup/Popup';
import { addPopup, $popup, closePopup } from '../models/popup';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export const AppNavigation = () => {


  const store = $popup.getState();

  const [state, setState] = React.useState(false)

  addPopup.watch(()=>{
    setState(true)
  })

  closePopup.watch(()=>{
    setState(false)
  })

  return (
    <>
    <Stack.Navigator 
      initialRouteName={'HomeScreen'}
      screenOptions={{ headerShown: false, headerStyle: {backgroundColor:'#312C39'}} }
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListCompany" component={ListCompany}/>
      <Stack.Screen name="PaymentPage" component={PaymentPage}/>
    </Stack.Navigator>
    {state && <Popup text={store.text} time={store.time} />}
    </>
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
