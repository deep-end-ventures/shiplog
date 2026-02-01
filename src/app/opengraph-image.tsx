import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ShipLog — AI-Powered Changelog & Release Notes Generator';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #1e293b 50%, #0a1628 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 8, display: 'flex' }}>🚀</div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#f1f5f9',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          ShipLog
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#94a3b8',
            maxWidth: 700,
            textAlign: 'center',
            display: 'flex',
          }}
        >
          AI-Powered Changelog & Release Notes Generator
        </div>
        <div
          style={{
            marginTop: 40,
            padding: '12px 32px',
            background: '#1e40af',
            borderRadius: 12,
            color: '#ffffff',
            fontSize: 22,
            fontWeight: 600,
            display: 'flex',
          }}
        >
          Generate Changelog →
        </div>
      </div>
    ),
    { ...size }
  );
}
