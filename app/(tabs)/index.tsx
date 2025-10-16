import { Text, View, StyleSheet } from 'react-native';

import { SearchBar } from '@/components/Search';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>

      <Text>Here is the search section</Text>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
