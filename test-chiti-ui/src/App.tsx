import React, { useState } from 'react';
import { ChitiButton, ChitiCard, ChitiBadge, ChitiInput, ChitiToggle, Skeleton } from '@chiti/ui';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toggleChecked, setToggleChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('✅ ChitiButton haptic feedback worked! 🎵');
    }, 1000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      color: '#ffffff',
      fontFamily: 'Inter, sans-serif',
      padding: '40px 20px'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px'
        }}>
          @chiti/ui Test Suite
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#a1a1aa',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Testing enterprise-grade React components with haptic feedback and 3D physics
        </p>
      </div>

      {/* Component Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '32px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        {/* Buttons Section */}
        <ChitiCard>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: '#ffffff' }}>🎯 Buttons</h3>
            <p style={{ margin: '0 0 20px 0', color: '#a1a1aa', fontSize: '14px' }}>
              Polymorphic buttons with haptic audio feedback
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ChitiButton variant="cinematic" audioHapticTick={true} onClick={handleButtonClick}>
              🎵 Cinematic (Haptic)
            </ChitiButton>

            <ChitiButton variant="glass" audioHapticTick={true}>
              ✨ Glass Effect
            </ChitiButton>

            <ChitiButton variant="saas" audioHapticTick={false}>
              🔧 SaaS Mode (No Haptic)
            </ChitiButton>

            <ChitiButton variant="error" disabled>
              🚫 Disabled State
            </ChitiButton>
          </div>
        </ChitiCard>

        {/* Form Components */}
        <ChitiCard>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: '#ffffff' }}>📝 Form Components</h3>
            <p style={{ margin: '0 0 20px 0', color: '#a1a1aa', fontSize: '14px' }}>
              Interactive form elements with real-time feedback
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#ffffff', fontSize: '14px' }}>
                Input Field
              </label>
              <ChitiInput
                type="text"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ChitiToggle
                checked={toggleChecked}
                onChange={(e) => setToggleChecked(e.target.checked)}
              />
              <span style={{ color: '#a1a1aa', fontSize: '14px' }}>
                Toggle: {toggleChecked ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>
        </ChitiCard>

        {/* Status & Loading */}
        <ChitiCard>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: '#ffffff' }}>📊 Status & Loading</h3>
            <p style={{ margin: '0 0 20px 0', color: '#a1a1aa', fontSize: '14px' }}>
              Badges for status and skeleton loaders for loading states
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <ChitiBadge variant="success">Active</ChitiBadge>
              <ChitiBadge variant="warning">Warning</ChitiBadge>
              <ChitiBadge variant="error">Error</ChitiBadge>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#a1a1aa', fontSize: '14px', minWidth: '60px' }}>
                  Loading:
                </span>
                <Skeleton width="120px" height="16px" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#a1a1aa', fontSize: '14px', minWidth: '60px' }}>
                  Avatar:
                </span>
                <Skeleton width="32px" height="32px" borderRadius="50%" />
              </div>
            </div>
          </div>
        </ChitiCard>

        {/* Interactive Demo */}
        <ChitiCard>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: '#ffffff' }}>🎮 Interactive Demo</h3>
            <p style={{ margin: '0 0 20px 0', color: '#a1a1aa', fontSize: '14px' }}>
              Experience the full Chiti ecosystem in action
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              padding: '16px',
              background: 'rgba(124, 58, 237, 0.1)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <ChitiBadge variant="success">System Online</ChitiBadge>
                <span style={{ color: '#a1a1aa', fontSize: '14px' }}>Uptime: 99.9%</span>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {loading ? (
                  <>
                    <Skeleton width="80px" height="32px" />
                    <Skeleton width="100px" height="32px" />
                  </>
                ) : (
                  <>
                    <ChitiButton variant="saas" size="sm">Refresh</ChitiButton>
                    <ChitiButton variant="error" size="sm">Shutdown</ChitiButton>
                  </>
                )}
              </div>

              <div style={{ fontSize: '14px', color: '#a1a1aa' }}>
                Input: "{inputValue}" | Toggle: {toggleChecked ? 'Enabled' : 'Disabled'}
              </div>
            </div>

            <ChitiButton
              variant="cinematic"
              audioHapticTick={true}
              onClick={handleButtonClick}
              disabled={loading}
              style={{ width: '100%' }}
            >
              {loading ? '🔄 Processing...' : '🚀 Test Full Experience'}
            </ChitiButton>
          </div>
        </ChitiCard>

      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '80px',
        padding: '40px 20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h2 style={{ margin: '0 0 16px 0', color: '#ffffff' }}>
          🎉 @chiti/ui Test Complete!
        </h2>
        <p style={{
          margin: '0 0 24px 0',
          color: '#a1a1aa',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          All components are working perfectly with haptic feedback, smooth animations,
          and enterprise-grade UX patterns.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://chitiusdv30.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <ChitiButton variant="glass">📖 View Documentation</ChitiButton>
          </a>

          <a
            href="https://github.com/prabhakarmdes12-cmyk/chiti_technologies_Design_System_v3"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <ChitiButton variant="saas">📦 View on GitHub</ChitiButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
