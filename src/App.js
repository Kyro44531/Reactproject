import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import {Route, Router, Routes, Link, BrowserRouter} from 'react-router-dom';
import FirstFrame from "./FirstFrame";
import Signining from "./Signining";
import StartTest from "./StartTest";

function App() {
  return (
      <BrowserRouter>
          123
          <nav>
              <ul>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/FirstFrame'>About</Link>
                  </li>
                  <li>
                      <Link to='/MyComponent'>Contact</Link>
                  </li>
              </ul>
          </nav>
          <Routes>
              <Route path='/' element={<FirstFrame/>} />
              <Route path='/FirstFrame' element={<FirstFrame/>} />
              <Route path='/MyComponent' element={<FirstFrame/>} />
              <Route path='/Signining' element={<Signining/>} />
              <Route path='/StartTest' element={<StartTest/>} />
          </Routes>
      </BrowserRouter>


  );
}

export default App;
