import './App.css';
import Home from './pages/Home'
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from './pages/Project';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}></Route> {/* When you would like to add a new page, add it here, path = the part after main domain for URL of page and element is the page element to redirect to */}
        <Route path = "/login" element={<Login/>}></Route>
        <Route path = "/project" element={<Project/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;