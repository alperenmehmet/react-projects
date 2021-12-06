import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieList } from './components/MovieList';
import { SearchMovie } from './components/SearchMovie';
import { SideBar } from './components/Sidebar';

function App() {
  return (
    <div className='row'>
      <SearchMovie />
      <SideBar />
      <MovieList />
    </div>
  );
}

export default App;
