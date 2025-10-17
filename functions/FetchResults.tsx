import { useState } from "react"

type Props = string;
//interface Props {
// queryString: string,
//}

interface FormattedResults {
  stationName: string,
  stationLines: Array<string>,
  stationDestinations: Array<string>
}


export default async function FetchResults(
  queryString: Props
): Promise<any> {



}
