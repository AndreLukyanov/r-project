import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default class UiInput extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="Добавить"
          style={styles.input}
          onSubmitEditing={this.props.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#d1cdcd",
    borderRadius: 30,
  },
});
