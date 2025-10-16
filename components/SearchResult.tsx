import { Text, View, TextInput } from 'react-native';

import { useState } from 'react';

interface Query {
  name?: string;
  lineNumber?: number;
  direction?: string;
  isSearchDisplayed: boolean;

}
export function SearchResult(
  props: Query
) {
  const [searchQuery, setSearchQuery] = useState<string>()
  function onChangeText(inputString: string) {
    console.log("New query : ", inputString);
    setSearchQuery(inputString)

  }
  if (props.isSearchDisplayed == false) {
    return null;
  }
  else {

    return (
      <View>
        <TextInput onChangeText={onChangeText} />
        <Text>Station : {searchQuery}</Text>
        <Text>Ligne : {props.lineNumber}</Text>
        <Text>Direction</Text>
      </View>
    )
  }
}
