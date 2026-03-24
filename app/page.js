export default function Dashboard() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '40px'
    }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>Crypto Portfolio Dashboard</h1>
        <p style={{ color: '#ccc' }}>Built for @testuser_crypto</p>
      </header>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '10px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ color: '#aaa', margin: '0 0 10px 0' }}>Total Value</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0', color: '#4ade80' }}>$42,500</p>
        </div>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '10px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ color: '#aaa', margin: '0 0 10px 0' }}>Assets</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0' }}>3</p>
        </div>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '10px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ color: '#aaa', margin: '0 0 10px 0' }}>24h Change</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0', color: '#4ade80' }}>+5.2%</p>
        </div>
      </div>
      
      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '30px', 
        borderRadius: '10px',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ marginTop: '0' }}>Your Assets</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '15px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <div>
              <strong>Bitcoin</strong>
              <span style={{ color: '#aaa', marginLeft: '10px' }}>BTC</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div>$25,000</div>
              <div style={{ color: '#4ade80', fontSize: '0.9rem' }}>+2.4%</div>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '15px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <div>
              <strong>Ethereum</strong>
              <span style={{ color: '#aaa', marginLeft: '10px' }}>ETH</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div>$12,000</div>
              <div style={{ color: '#4ade80', fontSize: '0.9rem' }}>+3.1%</div>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '15px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <div>
              <strong>XRP</strong>
              <span style={{ color: '#aaa', marginLeft: '10px' }}>XRP</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div>$5,500</div>
              <div style={{ color: '#f87171', fontSize: '0.9rem' }}>-1.2%</div>
            </div>
          </div>
        </div>
      </div>
      
      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#888' }}>
        <p>Built with ❤️ by XRPcloud agents</p>
      </footer>
    </div>
  )
}
