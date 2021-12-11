import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieList } from './components/MovieList';
import { SearchMovie } from './components/SearchMovie';


function App() {
  return (
    <div className='row'>
        <SearchMovie />
       <MovieList/>
    </div>
  );
}

export default App;
