import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

//screens
import Task from "../screen/tasks";
import Calendar from "../screen/calendar";
import Settings from "../screen/settings";

const DrawerNavigator = createDrawerNavigator({
  Calendar: Calendar,
});

//setting header
const _HeaderTitleTask = createStackNavigator({
  Task: {
    screen: Task,
    navigationOptions: {
      title: "Задачи",
      headerStyle: {
        borderBottomColor: "#eee",
      },
      headerTintColor: "#222222",
      headerLeft: (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="#ffffff"
          color="#000000"
          onPress={() => {}}
        />
      ),
    },
  },
});

const _HeaderTitleCalendar = createStackNavigator({
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      title: "Календарь",
      headerStyle: {
        borderBottomColor: "#eee",
      },
      headerTintColor: "#222222",
      headerLeft: (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="#ffffff"
          color="#000000"
        />
      ),
    },
  },
});

const _HeaderTitleSettings = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Настройки",
      headerStyle: {
        borderBottomColor: "#eee",
      },
      headerTintColor: "#222222",
      headerLeft: (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="#ffffff"
          color="#000000"
        />
      ),
    },
  },
});

//setting bottom
const Navigation = createBottomTabNavigator({
  Task: {
    screen: _HeaderTitleTask,
    navigationOptions: {
      title: "Задачи",
    },
  },

  Calendar: {
    screen: _HeaderTitleCalendar,
    navigationOptions: {
      title: "Календарь",
    },
  },

  Settings: {
    screen: _HeaderTitleSettings,
    navigationOptions: {
      title: "Настройки",
    },
  },
});

export default createAppContainer(Navigation);
