// app/_not-found/page.tsx
'use client';

export default function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '100px 20px',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem' }}>404</h1>
      <p>Page Not Found</p>
      <a href="/">Back to Home</a>
    </div>
  );
}