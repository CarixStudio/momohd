// src/app/layout.tsx (The fix)
import './globals.css'; // Make sure this import is here
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="cover template-index cover-small">{children}</body>
    </html>
  );
}