import './App.css';
import Characters from './components/Characters';
import CharCard from './components/CharCard';
import { useEffect, useState } from 'react';

function App() {

  const [characterList, setCharacterList] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => alert("Erro na importação da API!"))
  }, [, page])

  const backPage = () => {
    if (page !== 1) {
      return setPage(page - 1);
    }
  }

  const nextPage = () => {
    if (page !== 34) {
      return setPage(page + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick & Morty</h1>
        <div className="pageChange">
          <button onClick={backPage} style={page === 1 ? { opacity: 0.5 } : { opacity: 1 }}>Previous</button>
          <h2>Page {page}</h2>
          <button onClick={nextPage} style={page === 34 ? { opacity: 0.5 } : { opacity: 1 }}>Next</button>
        </div>
        <Characters characterList={characterList} />
      </header>
    </div>
  );
}

export default App;