
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import FirstTab from './components/main';
import Pdff from './components/pdf';
import Firs from './components/neww';
function App() {
  return (
   <>
    <BrowserRouter>
<Routes>
      <Route   path="/" element={<FirstTab/>} />
     
      <Route   path="/h" element={<Firs/>} />
      <Route   path="/hj" element={<Pdff/>} />
      </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
