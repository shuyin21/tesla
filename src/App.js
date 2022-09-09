
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exect path='/' element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
