import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Fitness from './pages/Fitness';
import AITherapy from './pages/AITherapy';
import OpenNature from './pages/OpenNature';
import For34 from './pages/For34';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen page-transition">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/ai-therapy" element={<AITherapy />} />
              <Route path="/open-nature" element={<OpenNature />} />
              <Route path="/for-34" element={<For34 />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;