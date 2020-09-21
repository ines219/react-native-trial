import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { ApplicationState } from '../store/root_reducer';
import { Dispatch } from 'redux';
import { signIn } from '../store/actions';
import { connect } from 'react-redux';
import { Users, UserItem } from '../models/users';

interface LoginProps {
  signInFunction: (username: string, password: string) => void
}

const LoginScreen = ({signInFunction}: LoginProps) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.welcome}>Login into App</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder='Username' />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        secureTextEntry />
        
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.usrBtn}>
          <Text
            style={styles.btnTxt}
            onPress={() => signInFunction(username, password)}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.usrBtn}>
          <Text
            style={styles.btnTxt}
            onPress={() => alert('Sign up works')}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state: ApplicationState) => {
  return {
      
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signInFunction: async (username: string, password: string) => {
      const foundUser = Users.filter((item:UserItem) => {
        return username == item.username && password == item.password
      })

      if (foundUser.length == 0) {
        alert('Username or password is incorrect');
      } else {
        const userToken = String(foundUser[0].userToken);
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {

        }
        dispatch(signIn(userToken))
      }
    }

  };
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: "#fff"
  },
  input: {
    width: '90%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  usrBtn: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: '45%'
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps) (LoginScreen);