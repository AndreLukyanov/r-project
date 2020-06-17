import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Settings = () => {
  return (
    <View style={styles.setting}>
      <Text style={styles.settingCaption}>Аккаунт</Text>
      <Text style={styles.settingCaption}>Подключить премиум</Text>
      <Text style={styles.settingCaption}>Подключить премиум</Text>
      <Text style={styles.settingCaption}>Тема</Text>
      <Text style={styles.settingCaption}>О приложении</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  setting: {
    paddingHorizontal: 15,
    height: "100%",
    width: "100%",
  },

  settingCaption: {
    paddingVertical: 10
  }
});
