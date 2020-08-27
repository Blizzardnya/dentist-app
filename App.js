import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  HomeScreen,
  PatientScreen,
  AddPatientScreen,
  AddAppointmentScreen,
} from './screens/index'

const Stack = createStackNavigator()

const headerOptions = {
  headerTintColor: '#2a86ff',
  headerStyle: { elevation: 0.8, shadowOpacity: 0.8 },
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Журнал приёмов', ...headerOptions }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={{ title: 'Карта пациента', ...headerOptions }}
        />
        <Stack.Screen
          name="AddPatient"
          component={AddPatientScreen}
          options={{ title: 'Добавить пациента', ...headerOptions }}
        />
        <Stack.Screen
          name="AddAppointment"
          component={AddAppointmentScreen}
          options={{ title: 'Добавить приём', ...headerOptions }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
