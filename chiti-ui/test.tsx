import React from 'react';
import { ChitiButton, ChitiCard, Skeleton } from './src';
import './src/styles/tokens.css';

// Simulated dashboard test to verify component interfaces
export default function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', background: 'var(--chiti-bg-base)' }}>
      <h1 style={{ color: 'var(--chiti-text-main)' }}>@chiti/ui Integration Test</h1>

      <div style={{ display: 'flex', gap: '24px', marginTop: '40px' }}>
        
        {/* Test Card & Tilt Physics */}
        <div style={{ width: '400px' }}>
          <ChitiCard tilt={true}>
            <h3 style={{ color: 'var(--chiti-text-main)' }}>Server Analytics</h3>
            <p style={{ color: 'var(--chiti-text-muted)' }}>Hover me to test 3D physics</p>
            
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Test Skeleton loader */}
              <Skeleton height="32px" borderRadius="100px" />
              <Skeleton height="16px" width="80%" />
            </div>

            <div style={{ marginTop: '32px' }}>
              {/* Test Button & Haptic API */}
              <ChitiButton variant="cinematic" audioHapticTick={true} style={{ width: '100%' }}>
                Restart Node
              </ChitiButton>
            </div>
          </ChitiCard>
        </div>

      </div>
    </div>
  );
}
