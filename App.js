import { Button, StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const PAGE_A = 'https://en.wikipedia.org/wiki/A';
const PAGE_B = 'https://en.wikipedia.org/wiki/B';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Open page A" onPress={() => WebBrowser.openBrowserAsync(PAGE_A)} />
      <View style={styles.gap} />
      <Button title="Open page B" onPress={() => WebBrowser.openBrowserAsync(PAGE_B)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gap: {
    height: 24,
  },
});
