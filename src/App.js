import './App.css';
import Home from './components/Home'
import Login from './components/Login';
import { HashRouter, Switch , Routes, Route } from 'react-router-dom'
import Project from './components/Project';

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route exact path = "/" element={<Login/>}></Route> {/* When you would like to add a new page, add it here, path = the part after main domain for URL of page and element is the page element to redirect to */}
          <Route path = "/home" element={<Home/>}></Route>
          <Route path = "/project" element={<Project/>}></Route>
        </Routes>
    </HashRouter>   
  );
}

export default App;