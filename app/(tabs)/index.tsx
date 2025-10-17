import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import { SearchBar } from '@/components/SearchBar';
import { SearchResult } from '@/components/SearchResult';

interface RecordItem {
  recordid: string;
  fields: {
    id_ref_zdc?: string;
    [key: string]: unknown;
  };
}
type Results = RecordItem[];

export default function TabOneScreen() {
  const [isSearchDisplayed, setIsSearchDisplayed] = useState<boolean>(false);
  const [queryString, setQueryString] = useState<string>("");
  const [results, setResults] = useState<Results | null>(null);

  async function FetchResults(queryString: string) {

    const res = await fetch(
      "https://data.iledefrance-mobilites.fr/api/records/1.0/search/?rows=40&sort=res_com&q=" +
      queryString +
      "&dataset=emplacement-des-gares-idf&timezone=Europe/Berlin&lang=fr"
    )

    const data = await res.json()
    setResults(data.records)


  }


  useEffect(() => {
    if (!queryString) return;
    FetchResults(queryString)
    //console.log("Temporary results:", tempRes)
  }, [queryString])

  return (
    <View style={styles.container}>
      <Text>Here is the search section</Text>
      <SearchBar queryString={queryString} setQueryString={setQueryString} />
      <FlatList
        data={results ?? []}
        keyExtractor={(item) => item.fields.id_ref_zdc ?? item.recordid}
        renderItem={({ item }) =>
          item.fields.id_ref_zdc ? (
            <SearchResult stationId={item.fields.id_ref_zdc} />
          ) : null
        }

      />

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
