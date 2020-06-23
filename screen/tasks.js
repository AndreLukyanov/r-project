import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

//add components
import UiInput from "../core/components/ui/input/input";
import UiButtonAdd from "../core/components/ui/buttons/buttonAdd/buttonAdd";
/* end components*/

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskVisible: false,
      todayItems: [],
      identifier: 0,
    };
  }

  toggle() {
    this.setState((state) => ({
      taskVisible: !state.taskVisible,
    }));
  }

  addTask(event) {
    this.state.todayItems.push({
      id: this.state.identifier++,
      text: event.target.value,
    });
    event.target.value = "";
  }

  render() {
    let taskBox;
    if (this.state.taskVisible) {
      taskBox = (
        <View style={styles.taskBox}>
          {this.state.todayItems.map((i) => {
            return <Text>{i.text}</Text>;
          })}
        </View>
      );
    }

    let countItems;
    if (this.state.taskVisible) {
      countItems = (
        <View style={styles.taskAdd}>
          <Image
            style={styles.taskAddIcon}
            source={require("../core/images/plus-white.svg")}
          />
        </View>
      );
    } else if (!this.state.taskVisible && this.state.todayItems.length) {
      countItems = (
        <Text style={styles.taskCount}>{this.state.todayItems.length}</Text>
      );
    }

    return (
      <View style={styles.task}>
        <View style={styles.taskList}>
          <View style={styles.taskItem}>
            <Text style={styles.taskCaption} onPress={() => this.toggle()}>
              Сегодня
            </Text>
            {countItems}
            {taskBox}
          </View>
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: "100%",
    width: "100%",
    position: "relative",
  },

  taskList: {
    height: "100%",
    width: "100%",
  },

  taskItem: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  taskCount: {
    display: "flex",
    paddingHorizontal: 6,
    minWidth: 18,
    borderRadius: 20,
    color: "#ffffff",
    fontSize: 14,
    backgroundColor: "#1595d1",
    justifyContent: "center",
  },

  taskAdd: {
    height: 20,
    width: 20,
    padding: 5,
    backgroundColor: "#1595d1",
    borderRadius: 50,
  },

  taskAddIcon: {
    height: "100%",
    width: "100%",
  },

  taskBox: {
    width: "100%",
    display: "flex",
  },

  taskCaption: {
    paddingRight: 16,
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
