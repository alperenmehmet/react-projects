import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import { MovieList } from './components/MovieList'
import { SearchMovie } from './components/SearchMovie'
import { SingleMovie } from './pages/SingleMovie'

function App() {
  return (
    <>
      <SearchMovie />
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </>
  )
}

export default App
