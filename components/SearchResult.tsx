import { Text, View, TextInput } from 'react-native';

import { useState } from 'react';

interface Query {
  stationId: string,
  stationName: string
}
export async function SearchResult(
  props: Query
) {
  if (!props.stationId) return null;
  console.log("New station : ", props.stationId);

  // const stationInfo = await fetch(
  //   "https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:" +
  //   props.stationId +
  //   ":",
  //   {
  //     headers: {
  //       method: "GET",
  //       apikey: "",
  //     },
  //   }
  // )


  return (
    <View>
      <Text>{props.stationName}</Text>
    </View>
  )
}
