import React from 'react';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';

export default function App() {

  const openSettings = () => {
    Linking.openSettings();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Sync App</Text>

      <Button
        title="Enable Notification Access"
        onPress={openSettings}
      />

      <Text style={{ marginTop: 20 }}>
        Enable notification access manually from settings.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});