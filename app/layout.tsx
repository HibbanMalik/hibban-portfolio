import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Hibban Ullah — Developer & CS Student', description: 'Hibban Ullah’s portfolio: freelance web development, AI systems, and personal projects. Computer science student at San Francisco State University.' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}
