import { Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import FetchResults from '@/functions/FetchResults';

import { SearchBar } from '@/components/SearchBar';
import { SearchResult } from '@/components/SearchResult';


export default function TabOneScreen() {
  const [isSearchDisplayed, setIsSearchDisplayed] = useState<boolean>(false);
  const [queryString, setQueryString] = useState<string>("");

  useEffect(() => {
    const tempRes = FetchResults(queryString)
    console.log("Temporary results:", tempRes)
  }, [queryString])

  return (
    <View style={styles.container}>
      <Text>Here is the search section</Text>
      <SearchBar queryString={queryString} setQueryString={setQueryString} />
      <SearchResult />
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
