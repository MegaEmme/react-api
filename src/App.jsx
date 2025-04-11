import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
function App() {
  const [actor, setActor] = useState([]);
  const endpointActresses = "https://www.freetestapi.com/api/v1/actresses";
  const endpointActors = "https://www.freetestapi.com/api/v1/actors";
  function fetchActress() {
    axios.get(endpointActresses)
      .then(res => {
        setActor(res.data)
      })
  };
  function fetchActors() {
    axios.get(endpointActors)
      .then(res => {
        setActor(res.data)
      })
  };
  console.log(actor);
  // useEffect(fetchActress, []);
  // useEffect(fetchActors, []);
  return (
    <>
      <h1>Lista Attori/Attrici</h1>
      <div className="buttons">
        <button onClick={fetchActors}>Attori</button>
        <button onClick={fetchActress}>Attrici</button>
      </div>
      <Card Actor={actor} />
    </>
  )
};
export default App;
