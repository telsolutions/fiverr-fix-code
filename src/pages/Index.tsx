import { LeadCapturePage } from '@/components/LeadCapturePage';

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a1a1a', 
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Index Component Working! 🎯</h1>
      <p>If you can see this, the Index component is rendering correctly.</p>
      <hr style={{ margin: '20px 0' }} />
      <h2>Now trying to render LeadCapturePage:</h2>
      <LeadCapturePage />
    </div>
  );
};

export default Index;
