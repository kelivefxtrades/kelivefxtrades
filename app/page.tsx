'use client';

import React, { useState } from 'react';

export default function TerminalMaster() {
  const [inviteCode, setInviteCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState('DASHBOARD');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const MASTER_INVITE_CODE = "KELIVE-ALPHA-2026";
    const MASTER_PASSWORD = "XAUUSD_MASTER_ACCESS";

    if (inviteCode === MASTER_INVITE_CODE && password === MASTER_PASSWORD) {
      setError('');
      setIsAuthorized(true);
    } else {
      setError('INVALID CREDENTIALS: Access Denied by Terminal Firewall.');
    }
  };

  if (!isAuthorized) {
    return (
      <main style={styles.container}>
        <div style={styles.gridOverlay}></div>
        <div style={styles.card}>
          <div style={styles.accentBar}></div>
          <div style={styles.headerGroup}>
            <h1 style={styles.title}>KELIVEFXTRADES</h1>
            <p style={styles.subtitle}>PRIVATE INSTITUTIONAL TERMINAL v1.0.4</p>
          </div>
          <div style={styles.badgeContainer}>
            <span style={styles.pulseDot}></span>
            <span style={styles.badgeText}>SECURE INTEL NETWORK ACTIVE</span>
          </div>
          <p style={styles.warningNotice}>
            WARNING: Authorized access only. This private execution layer tracks all incoming IP handshake signatures. Public registration is permanently disabled.
          </p>
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
            <button type="submit" style={styles.submitBtn}>INITIALIZE HANDSHAKE</button>
          </form>
          <div style={styles.footerData}>
            <span>TARGET: XAU/USD MULTI-CONFLUENCE</span>
            <span>PORT: 443 SECURE</span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div style={styles.terminalWrapper}>
      <header style={styles.terminalHeader}>
        <div style={styles.brandSection}>
          <span style={styles.goldText}>KELIVEFXTRADES</span>
          <span style={styles.terminalBadge}>TERMINAL ENGINE V1</span>
        </div>
        <div style={styles.tickerSection}>
          <span style={styles.tickerItem}>⚡ XAU/USD: <span style={styles.goldText}>$2,044.50</span></span>
          <span style={styles.tickerItem}>📊 MIS SCORE: <span style={styles.greenText}>88/100</span></span>
          <span style={styles.tickerItem}>🌐 SESSION: <span style={styles.blueText}>NEW YORK OVERLAP</span></span>
        </div>
      </header>

      <div style={styles.mainLayout}>
        <aside style={styles.sidebar}>
          {['DASHBOARD', 'GOLD ANALYSIS', 'OPTIONS ARCHITECTURE', 'AI ENGINE'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.navButton,
                color: activeTab === tab ? '#FFD700' : '#9CA3AF',
                borderLeft: activeTab === tab ? '3px solid #FFD700' : '3px solid transparent',
                backgroundColor: activeTab === tab ? 'rgba(255, 215, 0, 0.02)' : 'transparent',
              }}
            >
              {tab}
            </button>
          ))}
        </aside>

        <main style={styles.contentArea}>
          {activeTab === 'DASHBOARD' && (
            <div style={styles.gridContainer}>
              <div style={styles.dashboardWidget}>
                <h3 style={styles.widgetHeader}>MARKET INTELLIGENCE CONFLUENCE</h3>
                <div style={styles.misContainer}>
                  <div style={styles.misValue}>88<span style={styles.misPercent}>%</span></div>
                  <div style={styles.misLabel}>STRATEGIC CONFLUENCE BUY ACCUMULATION</div>
                </div>
              </div>

              <div style={styles.dashboardWidget}>
                <h3 style={styles.widgetHeader}>EXECUTION TARGET ZONES</h3>
                <div style={styles.zoneStack}>
                  <div style={styles.sellZone}>🚨 INSTITUTIONAL SELL LIQUIDITY: $2,060.00 - $2,065.00</div>
                  <div style={styles.noTradeZone}>⚠️ NO-TRADE COMPRESSION MATRIX: $2,046.00 - $2,052.00</div>
                  <div style={styles.buyZone}>✅ STRATEGIC ORDER FLOW BUY ZONE: $2,032.00 - $2,038.00</div>
                </div>
              </div>

              <div style={styles.dashboardWidget}>
                <h3 style={styles.widgetHeader}>DEALER & VOLATILITY STATUS</h3>
                <div style={styles.dataGrid}>
                  <div style={styles.dataRow}><span>DEALER DELTA BIAS</span><span style={styles.greenText}>HEAVILY LONG</span></div>
                  <div style={styles.dataRow}><span>CURRENT ATR (14)</span><span>$14.20</span></div>
                  <div style={styles.dataRow}><span>SESSION EXPECTED RANGE</span><span>$28.00</span></div>
                  <div style={styles.dataRow}><span>VWAP DEV LEVEL</span><span style={styles.goldText}>ABOVE BALANCE</span></div>
                </div>
              </div>

              <div style={styles.dashboardWidget}>
                <h3 style={styles.widgetHeader}>INTELLIGENT TRADE RECOMMENDATION</h3>
                <p style={styles.recommendationText}>
                  ORDER FLOW CONFIRMED: Look for low-volume structural mitigation within the identified Buy Zone ($2,032). Invalidate stance on a sustained hourly print below $2,024.00. Target major resistance clusters at the Call Wall.
                </p>
              </div>
            </div>
          )}

          {activeTab !== 'DASHBOARD' && (
            <div style={styles.placeholderContainer}>
              <h2 style={styles.goldText}>{activeTab} PIPELINE ACTIVE</h2>
              <p style={{ color: '#9CA3AF', fontSize: '13px' }}>Neural intelligence models mapping live data matrix layers. View live deployment updates via terminal sync.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: { backgroundColor: '#0B0F19', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: '"Inter", sans-serif', position: 'relative', overflow: 'hidden' },
  gridOverlay: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, rgba(31, 41, 55, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(31, 41, 55, 0.1) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' },
  card: { backgroundColor: '#111827', border: '1px solid #1F2937', borderRadius: '8px', width: '100%', maxWidth: '420px', padding: '32px 24px', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
  accentBar: { position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #FFD700 0%, #3B82F6 100%)', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' },
  headerGroup: { textAlign: 'center', marginBottom: '24px' },
  title: { color: '#FFD700', fontSize: '24px', fontWeight: '800', letterSpacing: '2px', margin: '0 0 4px 0' },
  subtitle: { color: '#9CA3AF', fontSize: '11px', fontWeight: '600', letterSpacing: '1px', margin: 0 },
  badgeContainer: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '6px 12px', borderRadius: '4px', marginBottom: '20px' },
  pulseDot: { width: '6px', height: '6px', backgroundColor: '#22C55E', borderRadius: '50%' },
  badgeText: { color: '#22C55E', fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px' },
  warningNotice: { color: '#9CA3AF', fontSize: '11px', lineHeight: '1.5', textAlign: 'center', backgroundColor: 'rgba(31, 41, 55, 0.4)', padding: '10px', borderRadius: '4px', borderLeft: '2px solid #F59E0B', marginBottom: '24px' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { color: '#FFFFFF', fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px' },
  input: { backgroundColor: '#0B0F19', border: '1px solid #1F2937', borderRadius: '4px', color: '#FFFFFF', padding: '12px', fontSize: '14px', outline: 'none' },
  errorBanner: { backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#EF4444', fontSize: '11px', fontWeight: '600', padding: '10px', borderRadius: '4px', textAlign: 'center' },
  submitBtn: { backgroundColor: '#FFD700', color: '#0B0F19', border: 'none', borderRadius: '4px', padding: '14px', fontSize: '13px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer', marginTop: '8px' },
  footerData: { display: 'flex', justifyContent: 'space-between', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #1F2937', color: '#9CA3AF', fontSize: '9px', fontWeight: '500' },
