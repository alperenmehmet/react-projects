import { useColorMode, Button } from '@chakra-ui/react';
import '../navbar/style.css';

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav className='nav'>
      <div className='section-center nav-center'>
        <h2>Where in the world?</h2>
        <Button className='btn' onClick={toggleColorMode}>
          {'light' ? 'Dark' : 'Light'}
        </Button>
      </div>
    </nav>
  );
}
