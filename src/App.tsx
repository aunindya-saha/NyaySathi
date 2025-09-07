import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Knowledge from './pages/Knowledge';
import Chat from './pages/Chat';
import CaseTracker from './pages/CaseTracker';
import Report from './pages/Report';
import Community from './pages/Community';
import About from './pages/About';
import Privacy from './pages/Privacy';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/seba" element={<Services />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/knowledge/:category" element={<Knowledge />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/case" element={<CaseTracker />} />
              <Route path="/report" element={<Report />} />
              <Route path="/community" element={<Community />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
