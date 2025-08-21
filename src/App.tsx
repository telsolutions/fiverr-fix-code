import React from 'react';
import Index from "./pages/Index";

const App = () => {
  console.log('App component rendering...');
  
  return (
    <div>
      <h1 style={{ color: 'white', backgroundColor: '#1a1a1a', padding: '20px' }}>
        App Component Working! 🚀
      </h1>
      <Index />
    </div>
  );
};

export default App;
