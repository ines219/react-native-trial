import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationState } from "../store/root_reducer";
import { timerStart, timerStop } from "../store/actions";

interface TimerProps {
    timerStatus: boolean,
    timerValue: number,
    timerStartFunction: () => void,
    timerStopFunction: () => void
}

const CounterScreen = ({timerStatus, timerValue, timerStartFunction, timerStopFunction}: TimerProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tmrTxt}>{timerValue}</Text>
            <View style={styles.tmrContainer}>
                <Button disabled={timerStatus} title='Start' onPress={timerStartFunction} />
                <Button disabled={!timerStatus} title='Stop' onPress={timerStopFunction} />
            </View>
        </View>
    )
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    timerStatus: state.timer.status,
    timerValue: state.timer.seconds
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    timerStartFunction: () => dispatch(timerStart()),
    timerStopFunction: () => dispatch(timerStop())
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tmrContainer: {
    width: '20%'
  },
  tmrTxt: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps) (CounterScreen);