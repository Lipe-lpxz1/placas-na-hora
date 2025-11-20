import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-[#f9f9f9] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Features />
        <Pricing />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;