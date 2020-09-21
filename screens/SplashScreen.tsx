import * as React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Dispatch } from 'redux';
import { restore } from '../store/actions';
import { ApplicationState } from '../store/root_reducer';
import { connect } from 'react-redux';

interface SplashProps {
    restoreFunction: () => Promise<void>
}

const SplashScreen = ({restoreFunction}: SplashProps) => {
    React.useEffect(() => { restoreFunction() }, []);

    return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      restoreFunction: async () => {
          let userToken;
          try {
              userToken = await AsyncStorage.getItem('userToken');
          } catch (e) {

          }
          dispatch(restore(userToken))
      }

    };
}; 

export default connect(mapStateToProps, mapDispatchToProps) (SplashScreen);