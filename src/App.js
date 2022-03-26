import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import QuestionAnswer from './components/QA-section/Question-answer';


function App() {
  return (
    <div>
      <header>
        <h2 className='text-center py-4 text-white bg-info mb-0'>Asd Book House</h2>
      </header>
      <Shop></Shop>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
