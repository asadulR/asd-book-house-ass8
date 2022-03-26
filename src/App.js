import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
      <header>
        <h2 className='text-center py-4 text-white bg-info mb-0'>Asd Book House</h2>
      </header>
      <Shop></Shop>
    </div>
  );
}

export default App;
