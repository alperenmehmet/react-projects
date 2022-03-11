import { useColorMode } from '@chakra-ui/react';
import '../navbar/style.css';

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav className='nav'>
      <div className='section-center nav-center'>
        <h2>Where in the world?</h2>
        <button className='btn' onClick={toggleColorMode}>
          {'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  );
}
