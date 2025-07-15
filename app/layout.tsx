import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-heading' });
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Pulsa Kilat Nusantara - Isi Ulang Cepat & Terpercaya',
  description: 'Layanan isi ulang pulsa dan paket data tercepat di Indonesia. Aman, mudah, dan harga bersaing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${roboto.variable} font-body text-text bg-background`}>
        {children}
      </body>
    </html>
  );
}
