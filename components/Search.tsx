import { Text, View, TextInput } from 'react-native';

import { useState } from 'react';

export function SearchBar(
) {
  const [searchQuery, setSearchQuery] = useState<string>()
  function onChangeText(inputString: string) {
    console.log("New query : ", inputString);
    setSearchQuery(inputString)

  }
  return (
    <View>
      <TextInput onChangeText={onChangeText} />
      <Text>Station : {searchQuery}</Text>
      <Text>Ligne</Text>
      <Text>Direction</Text>
    </View>
  )
}
