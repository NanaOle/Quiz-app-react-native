import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import SignUpScreen from './screens/signUpScreen/SignUpScreen'
import CategoryScreen from './screens/categoryScreen/CategoryScreen'
import PublicScreen from './screens/publicScreen/PublicScreen'
import QuestionScreen from './screens/QuestionScreen/QuestionScreen'
import ReviewScreen from './screens/reviewScreen/ReviewScreen'

import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Public" component={PublicScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
