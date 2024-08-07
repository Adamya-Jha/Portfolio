import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App; 
