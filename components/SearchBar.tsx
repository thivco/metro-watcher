import { Text, View, TextInput } from 'react-native';

import { useState } from 'react';

interface Props {
  queryString: string,
  setQueryString: (value: string) => void;
}

export function SearchBar(
  props: Props
) {


  function onChangeText(inputString: string) {
    props.setQueryString(inputString)
  }
  return (
    <View>

      <Text>Yo</Text>
      <TextInput onChangeText={onChangeText} />
    </View>
  )
}
