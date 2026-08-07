import React from 'react';

export const metadata = {
  title: 'KeliveFXTrades Terminal',
  description: 'Private Institutional Trading Terminal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0B0F19' }}>
        {children}
      </body>
    </html>
  );
}
