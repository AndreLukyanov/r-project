import React, { Component } from "react";
import { View, SectionList, Text, StyleSheet } from "react-native";

export default class Settings extends Component {
  openProfile = () => {
    this.props.navigation.navigate("Calendar");
  };

  render() {
    return (
      <View style={styles.setting}>
        <SectionList
          sections={[
            { title: "Аккаунт", id: 0, data: ["Профиль", "Премиум"] },
            {
              title: "Настройки",
              id: 1,
              data: ["Тема", "Язык", "Звук уведомления"],
            },
            { title: "QUICK.DO", id: 2, data: ["Поддержка", "О приложении"] },
          ]}
          renderSectionHeader={({ section }) => (
            <Text style={styles.settingCaption}>{section.title}</Text>
          )}
          renderItem={({ item }) => (
            <Text style={styles.settingItem} onPress={this.openProfile}>
              {item}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setting: {
    height: "100%",
    width: "100%",
  },

  settingCaption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: "500",
  },

  settingItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#a39f95",
  },
});
