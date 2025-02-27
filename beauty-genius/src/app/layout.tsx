import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BeautyGenius - AIパーソナルビューティーコンサルタント',
  description: 'AIテクノロジーを活用し、あなただけにカスタマイズされた美容アドバイスを提供します。',
  keywords: 'AI, 美容, メイクアップ, パーソナライズ, ビューティー, 肌分析, アドバイス',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
