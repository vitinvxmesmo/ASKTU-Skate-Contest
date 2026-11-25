import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'ASKTU Skate Contest 2027', description: 'O primeiro campeonato oficial da Associação dos Skatistas de Unaí.', icons: { icon: '/assets/icone-akstu.svg', shortcut: '/assets/icone-akstu.svg', apple: '/assets/icone-akstu.svg' }, openGraph: { title: 'ASKTU Skate Contest 2027', description: '24 de janeiro de 2027 · Unaí — MG', type: 'website' }, twitter: { card: 'summary_large_image', title: 'ASKTU Skate Contest 2027', description: 'A pista é sua. Mostre o seu skate.' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
