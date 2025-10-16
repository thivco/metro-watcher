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


export default function FetchResults(
  queryString: Props
): Promise<any> {
  const [results, setResults] = useState<any>({})

  async function fetchPosts(queryString: string) {
    setResults(await fetch(
      "https://data.iledefrance-mobilites.fr/api/records/1.0/search/?rows=40&sort=res_com&q=" +
      queryString +
      "&dataset=emplacement-des-gares-idf&timezone=Europe/Berlin&lang=fr"
    ).then(r => r.json()));
  }


  return fetchPosts(queryString)


}
