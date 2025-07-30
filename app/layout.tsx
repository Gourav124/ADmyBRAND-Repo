import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Revolutionary AI-Powered Marketing Platform',
  description: 'Transform your marketing with ADmyBRAND AI Suite - the complete AI-powered platform for content creation, brand management, and marketing automation.',
  keywords: 'AI marketing, brand management, content creation, marketing automation, AI copywriting, social media, SaaS',
  authors: [{ name: 'ADmyBRAND Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ADmyBRAND AI Suite - Revolutionary AI-Powered Marketing Platform',
    description: 'Transform your marketing with ADmyBRAND AI Suite - the complete AI-powered platform for content creation, brand management, and marketing automation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Revolutionary AI-Powered Marketing Platform',
    description: 'Transform your marketing with ADmyBRAND AI Suite - the complete AI-powered platform for content creation, brand management, and marketing automation.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}