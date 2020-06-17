import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

//screens
import Task from "../screen/tasks";
import Calendar from "../screen/calendar";
import Settings from "../screen/settings";

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
