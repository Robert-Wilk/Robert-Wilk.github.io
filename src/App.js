import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Showcase from './pages/Showcase';
import Resume from './pages/Resume';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scroll/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
      <>
          <Router>
              <ScrollToTop />
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/Resume" element={<Resume />}/>
                <Route path="/Portfolio" element={<Portfolio />}/>
                <Route path="/Portfolio/:id" element={<Showcase />}/>
                <Route path="*" element={<NoMatch />}/>
              </Routes>
              <Footer />
          </Router>
    </>
  );
}