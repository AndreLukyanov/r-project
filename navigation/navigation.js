import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

//screens
import Task from "../screen/tasks";
import Calendar from "../screen/calendar";
import Settings from "../screen/settings";
import Profile from "../screen/profile";

const DrawerNavigator = createDrawerNavigator({
  Profile: { screen: Profile },
});

//setting header
const _HeaderTitleTask = createStackNavigator({
  Task: {
    screen: Task,
    navigationOptions: ({ navigation }) => ({
      title: "Задачи",
      headerStyle: {
        borderBottomColor: "#eee",
      },
      headerTintColor: "#222222",
      headerLeft: (
        <Ionicons
          name="md-menu"
          size={25}
          style={{ paddingHorizontal: 16 }}
          navigate={navigation.navigate}
          onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
        />
      ),
    }),
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
        <Ionicons name="md-menu" size={25} style={{ paddingHorizontal: 16 }} />
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
        <Ionicons name="md-menu" size={25} style={{ paddingHorizontal: 16 }} />
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
      tabBarIcon: <Ionicons name="md-list" size={25} />,
    },
  },

  Calendar: {
    screen: _HeaderTitleCalendar,
    navigationOptions: {
      title: "Календарь",
      tabBarIcon: <Ionicons name="md-calendar" size={25} />,
    },
  },

  Settings: {
    screen: _HeaderTitleSettings,
    navigationOptions: {
      title: "Настройки",
      tabBarIcon: <Ionicons name="md-settings" size={25} />,
    },
  },
});

export default createAppContainer(Navigation);
