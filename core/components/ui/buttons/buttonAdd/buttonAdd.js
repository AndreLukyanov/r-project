import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

export default class UiButtonAdd extends Component {
  render() {
    return (
      <View style={styles.buttonAdd} onPress={this.props.onPress}>
        <Image
          style={styles.buttonAddIcon}
          source={require("../../../../images/plus-white.svg")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonAdd: {
    height: 30,
    width: 30,
    padding: 5,
    backgroundColor: "#1595d1",
    borderRadius: 50,
  },

  buttonAddIcon: {
    height: "100%",
    width: "100%",
  },
});
