import * as React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { Dispatch } from 'redux';
import { signOut } from '../store/actions';
import { connect } from 'react-redux';
import { ApplicationState } from '../store/root_reducer';

interface HomeProps {
    signOutFunction: () => void
}

const HomeScreen = ({signOutFunction}: HomeProps) => {
    return (
        <View style={styles.container}>
            <Text>Home!</Text>
            <Button title='Sign out' onPress={signOutFunction} />
        </View>
    );
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      signOutFunction: async () => {
        try {
            await AsyncStorage.removeItem('userToken');
        } catch (e) {

        }
        dispatch(signOut())
      }
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(mapStateToProps, mapDispatchToProps) (HomeScreen);