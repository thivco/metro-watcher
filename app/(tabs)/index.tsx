import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import { SearchBar } from '@/components/SearchBar';
import { SearchResult } from '@/components/SearchResult';

interface RecordItem {
  recordid: string;
  fields: {
    id_ref_zdc?: string;
    nom_gares: string;
    [key: string]: unknown;
  };
}

type Results = RecordItem[];

export default function TabOneScreen() {
  const [isSearchDisplayed, setIsSearchDisplayed] = useState<boolean>(false);
  const [queryString, setQueryString] = useState<string>("");
  const [results, setResults] = useState<Results | null>(null);

  const BASE_URL = "https://data.iledefrance-mobilites.fr/api/records/1.0/search/";

  async function fetchResults(queryString: string) {

    const res = await fetch(
      "https://data.iledefrance-mobilites.fr/api/records/1.0/search/?rows=40&sort=res_com&q=" +
      queryString +
      "&dataset=emplacement-des-gares-idf&timezone=Europe/Berlin&lang=fr"
    )
    const data = await res.json()
    setResults(data.records)
  }

  async function fetchDepartures(stationId: string) {
    const url = `${BASE_URL}?dataset=arrets-lignes-tps-reel&q=${stationId}&rows=20&timezone=Europe/Berlin&lang=fr`;
    const response = await fetch(url);
    const data = await response.json();
    return data.records;
  }


  useEffect(() => {
    if (!queryString || queryString.length < 3) return;
    fetchResults(queryString)
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
            <SearchResult
              stationName={item.fields.nom_gares}
              stationId={item.fields.id_ref_zdc} />
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
