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
    console.log("New query : ", inputString);
    props.setQueryString(inputString)
  }
  return (
    <View>
      <TextInput onChangeText={onChangeText} />
    </View>
  )
}
