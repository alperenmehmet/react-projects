import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import { SearchMovie } from './components/SearchMovie';

function App() {
  return (
    <>
      <SearchMovie />
      <Routes>
        <Route path='/' element={<MovieList />} />
        //movie path
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
