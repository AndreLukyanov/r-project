import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";

export default class Calendar extends Component {
  render() {
    return (
      <View style={styles.calendar}>
        <View>
          <Agenda
            selected={"2020-07-01"}
            items={{
              "2020-07-01": [{ name: "item 1 - any js object" }],
              "2020-07-02": [{ name: "item 1 - any js object" }],
              "2020-07-03": [{ name: "item 1 - any js object" }],
              "2020-08-01": [{ name: "item 1 - any js object" }],
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    height: "100%",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
