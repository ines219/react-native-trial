import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationState } from "../store/root_reducer";
import { counterAdd, counterSubtract } from "../store/actions";

interface CounterProps {
    counterValue: number,
    counterAddFunction: () => void,
    counterSubtractFunction: () => void
}

const CounterScreen = ({counterValue, counterAddFunction, counterSubtractFunction}: CounterProps) => {
    return (
        <View style={styles.container}>
          <View style={styles.ctrContainer}>
            <Button title='-' onPress={counterSubtractFunction} />
            <Text style={styles.ctrTxt}>{counterValue}</Text>
            <Button title='+' onPress={counterAddFunction} />
          </View>
        </View>
    )
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    counterValue: state.counter.count
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    counterAddFunction: () => dispatch(counterAdd()),
    counterSubtractFunction: () => dispatch(counterSubtract())
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ctrContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  ctrTxt: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps) (CounterScreen);