import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './components/countries-list/CountriesList';
import { SingleCountry } from './pages/single-country-page/SingleCountry';
import { SearchCountry } from './components/search-country/SearchCountry';

export function App() {
  return (
    <>
      <Navbar />
      <SearchCountry />
      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='/:id' element={<SingleCountry />} />
      </Routes>
    </>
  );
}
