import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CounterScreen from '../screens/CounterScreen';
import LoginScreen from '../screens/LoginScreen';
import { connect } from 'react-redux';
import { ApplicationState } from '../store/root_reducer';
import { Dispatch } from 'redux';
import SplashScreen from '../screens/SplashScreen';
import TimerScreen from '../screens/TimerScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

const CounterStack = createStackNavigator();

function CounterStackScreen() {
  return (
    <CounterStack.Navigator>
      <CounterStack.Screen name='Counter' component={CounterScreen} />
    </CounterStack.Navigator>
  )
}

const TimerStack = createStackNavigator();

function TimerStackScreen() {
  return (
    <TimerStack.Navigator>
      <TimerStack.Screen name='Timer' component={TimerScreen} />
    </TimerStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

interface NavStackProps {
    isLoading: Boolean,
    userToken: any
}

const NavStack = ({isLoading, userToken}: NavStackProps) => {
    return (
        <NavigationContainer>
            {isLoading ? (
                <SplashScreen/>
            ) : userToken == null ? (
                <LoginScreen/>
            ) : (
                <Tab.Navigator>
                    <Tab.Screen name='Home' component={HomeStackScreen} />
                    <Tab.Screen name='Counter' component={CounterStackScreen} />
                    <Tab.Screen name='Timer' component={TimerStackScreen} />
                </Tab.Navigator>
            )}
      </NavigationContainer>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
      isLoading: state.auth.isLoading,
      userToken: state.auth.userToken
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    };
}; 

export default connect(mapStateToProps, mapDispatchToProps) (NavStack);