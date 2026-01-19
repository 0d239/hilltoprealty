import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { About } from './pages/About';
import { Listings } from './pages/Listings';
import { Resources } from './pages/Resources';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
