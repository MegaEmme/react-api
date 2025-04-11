import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [actor, setActor] = useState([])
  const endpoint = "https://www.freetestapi.com/api/v1/actresses"
  function fetchActor() {
    axios.get(endpoint)
      .then(res => {
        setActor(res.data)
      })
  }
  console.log(actor)
  useEffect(fetchActor, [])
  return (
    <>
      <h1>Lista Attori/Attrici</h1>
      <Card Actor={actor} />
    </>
  )
}

export default App;
