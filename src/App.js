import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './components/Main.jsx';
import Rules from './pages/Rules.jsx';
import { NumberProvider } from './context/NumberContext.js';


function App() {
  return (
    <NumberProvider>
      <Router>
              <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/rules' element={<Rules />} />
              </Routes>
      </Router>
    </NumberProvider>
  );
}

export default App;
