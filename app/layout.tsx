import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'PulsaKilat - Isi Pulsa & Paket Data Cepat dan Aman',
  description: 'Nikmati kemudahan mengisi pulsa dan paket data semua operator dengan harga terbaik. Proses cepat, transaksi aman, dan layanan 24/7.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${roboto.variable} font-body text-text bg-background`}>
        {children}
      </body>
    </html>
  );
}
