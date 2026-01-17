import './globals.css';
import type { Metadata } from 'next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Providers } from '../components/Providers';

export const metadata: Metadata = {
  title: 'MillenniumAI — Enterprise AI & ML Services',
  description: 'MillenniumAI delivers enterprise-grade AI/ML services: LLM training, computer vision, NLP, moderation, and full-stack integrations. Global delivery, security-first.',
  keywords: ['MillenniumAI','AI services','LLM training','computer vision','NLP','AI governance','enterprise AI'],
  openGraph: {
    title: 'MillenniumAI — Enterprise AI & ML Services',
    description: 'Enterprise-grade AI/ML services — LLM training, computer vision, NLP, moderation, and full-stack delivery.',
    url: 'https://www.millenniumai.example',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}