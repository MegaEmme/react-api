import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
function App() {
  const [actor, setActor] = useState([]);
  const [filter, setFilter] = useState('')
  const endpointActresses = "https://www.freetestapi.com/api/v1/actresses";
  const endpointActors = "https://www.freetestapi.com/api/v1/actors";
  const endpointFilter = `https://www.freetestapi.com/api/v1/actresses?search=${filter}`
  const endpointFilterTwo = `https://www.freetestapi.com/api/v1/actors?search=${filter}`
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
  function fetchFilter() {
    axios.get(endpointFilter)
      .then(res => {
        setActor(res.data)
      })
  };
  function fetchFilterTwo() {
    axios.get(endpointFilterTwo)
      .then(res => {
        setActor(res.data)
      })
  };

  console.log(actor);
  // useEffect(fetchActress, []);
  // useEffect(fetchActors, []);
  useEffect(fetchFilter, [filter])
  useEffect(fetchFilterTwo, [filter])
  return (
    <>
      <h1>Lista Attori/Attrici</h1>
      <div className="buttons">
        <button onClick={fetchActors}>Attori</button>
        <button onClick={fetchActress}>Attrici</button>
        <hr />
        <input type="text"
          placeholder='Cerca attore'
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <hr />
      </div>
      <Card Actor={actor} />
    </>
  )
};
export default App;
