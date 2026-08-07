'use client';

import React, { useState } from 'react';

export default function LoginPage() {
  const [inviteCode, setInviteCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TEMPORARY PRIVATE ACCESS CREDENTIALS FOR TESTING
    // You can change these values to whatever you want
    const MASTER_INVITE_CODE = "KELIVE-ALPHA-2026";
    const MASTER_PASSWORD = "XAUUSD_MASTER_ACCESS";

    if (inviteCode === MASTER_INVITE_CODE && password === MASTER_PASSWORD) {
      setError('');
      setIsAuthorized(true);
      alert('Access Granted. Routing to KeliveFX Terminal...');
      // We will link this to the main dashboard in the next step!
    } else {
      setError('INVALID CREDENTIALS: Access Denied by Terminal Firewall.');
    }
  };

  return (
    <main style={styles.container}>
      {/* Dynamic Background Network Grid Effect */}
      <div style={styles.gridOverlay}></div>

      <div style={styles.card}>
        {/* Terminal Header Accent */}
        <div style={styles.accentBar}></div>

        {/* Branding Headers */}
        <div style={styles.headerGroup}>
          <h1 style={styles.title}>KELIVEFXTRADES</h1>
          <p style={styles.subtitle}>PRIVATE INSTITUTIONAL TERMINAL v1.0.4</p>
        </div>

        {/* Status System Badge */}
        <div style={styles.badgeContainer}>
          <span style={styles.pulseDot}></span>
          <span style={styles.badgeText}>SECURE INTEL NETWORK ACTIVE</span>
        </div>

        {/* Security Warning Notice */}
        <p style={styles.warningNotice}>
          WARNING: Authorized access only. This private execution layer tracks all incoming IP handshake signatures. Public registration is permanently disabled.
        </p>

        {/* Login Credentials Form */}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>INVITATION PASS-TOKEN</label>
            <input 
              type="text" 
              placeholder="XXXX-XXXX-XXXX-XXXX" 
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>TERMINAL ACCESS KEY</label>
            <input 
              type="password" 
              placeholder="••••••••••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          {error && <div style={styles.errorBanner}>{error}</div>}

          <button type="submit" style={styles.submitBtn}>
            INITIALIZE HANDSHAKE
          </button>
        </form>

        {/* Footer Technical Metadata */}
        <div style={styles.footerData}>
          <span>TARGET: XAU/USD MULTI-CONFLUENCE</span>
          <span>PORT: 443 SECURE</span>
        </div>
      </div>
    </main>
  );
}

// STYLING ARCHITECTURE (Matches your exact palette blueprint)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#0B0F19', // Mat Black
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '"Inter", system-ui, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  gridOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(to right, rgba(31, 41, 55, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(31, 41, 55, 0.1) 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    pointerEvents: 'none',
  },
  card: {
    backgroundColor: '#111827', // Main Panels
    border: '1px solid #1F2937', // Borders
    borderRadius: '8px',
    width: '100%',
    maxWidth: '420px',
    padding: '32px 24px',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
  accentBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #FFD700 0%, #3B82F6 100%)', // Gold to Blue transition
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  headerGroup: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  title: {
    color: '#FFD700', // Gold
    fontSize: '24px',
    fontWeight: '800',
    letterSpacing: '2px',
    margin: '0 0 4px 0',
  },
  subtitle: {
    color: '#9CA3AF', // Secondary Text
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1px',
    margin: 0,
  },
  badgeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: 'rgba(34, 197, 94, 0.06)',
    border: '1px solid rgba(34, 197, 94, 0.2)',
    padding: '6px 12px',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  pulseDot: {
    width: '6px',
    height: '6px',
    backgroundColor: '#22C55E', // Success Green
    borderRadius: '50%',
  },
  badgeText: {
    color: '#22C55E',
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },
  warningNotice: {
    color: '#9CA3AF',
    fontSize: '11px',
    lineHeight: '1.5',
    textAlign: 'center',
    backgroundColor: 'rgba(31, 41, 55, 0.4)',
    padding: '10px',
    borderRadius: '4px',
    borderLeft: '2px solid #F59E0B', // Warning Orange Accent
    marginBottom: '24px',
    margin: '0 0 24px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },
  input: {
    backgroundColor: '#0B0F19',
    border: '1px solid #1F2937',
    borderRadius: '4px',
    color: '#FFFFFF',
    padding: '12px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  errorBanner: {
    backgroundColor: 'rgba(239, 68, 68, 0.08)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#EF4444', // Danger Red
    fontSize: '11px',
    fontWeight: '600',
    padding: '10px',
    borderRadius: '4px',
    textAlign: 'center',
  },
  submitBtn: {
    backgroundColor: '#FFD700', // Gold Main Button
    color: '#0B0F19', // Dark Text
    border: 'none',
    borderRadius: '4px',
    padding: '14px',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1px',
    cursor: 'pointer',
    marginTop: '8px',
  },
  footerData: {
    display: 'flex',
    justifyContent: 'between',
    justifyContent: 'space-between',
    marginTop: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #1F2937',
    color: '#9CA3AF',
    fontSize: '9px',
    fontWeight: '500',
    letterSpacing: '0.5px',
  }
};
