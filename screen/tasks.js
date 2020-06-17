import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

//add components
import UiInput from "../core/components/ui/input/input";
import UiButtonAdd from "../core/components/ui/buttons/buttonAdd/buttonAdd";
/* end components*/

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskVisible: false,
      items: [],
    };
  }

  toggleItem() {
    this.setState((state) => ({
      taskVisible: !state.taskVisible,
    }));
  }

  addTask(event) {
    this.state.items.push(event.target.value);
  }

  render() {
    let taskItem;

    if (this.state.taskVisible) {
      taskItem = (
        <View style={styles.taskItem}>
          <Text numberOfLines={1}>{this.state.items}</Text>
        </View>
      );
    }

    return (
      <View style={styles.task}>
        <View style={styles.taskList}>
          <Text style={styles.taskCaption} onPress={() => this.toggleItem()}>
            Сегодня
          </Text>
          {taskItem}
          <Text style={styles.taskCaption}>Завтра</Text>
          <Text style={styles.taskCaption}>Предстоящие</Text>
        </View>
        <View style={styles.taskFooter}>
          <View style={styles.taskFooterWrapper}>
            <UiInput onPress={(event) => this.addTask(event)} />
          </View>
          <View style={styles.taskButton}>
            <UiButtonAdd />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    paddingHorizontal: 15,
    height: "100%",
    width: "100%",
    position: "relative",
  },

  taskList: {
    height: "100%",
    width: "100%",
  },

  taskCaption: {
    color: "#1595d1",
    fontWeight: "bold",
  },

  taskFooter: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    left: 0,
    bottom: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopWidth: 1,
    borderColor: "#d1cdcd",
  },

  taskFooterWrapper: {
    flex: 1,
  },

  taskButton: {
    paddingLeft: 10,
  },
});
