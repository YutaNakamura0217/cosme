import type { Metadata } from 'next';
import { Noto_Serif_JP, Playfair_Display } from 'next/font/google';
import '@/app/globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';

// Import Noto Serif JP for Japanese text
const notoSerifJP = Noto_Serif_JP({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
});

// Import Playfair Display for English headings
const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'BeautyGenius - AIパーソナルビューティーコンサルタント',
  description: '洗練されたAIテクノロジーを活用し、あなただけにカスタマイズされた美容アドバイスを提供します。',
  keywords: 'AI, 美容, メイクアップ, パーソナライズ, ビューティー, 肌分析, アドバイス, 高級',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${playfairDisplay.variable}`}>
      <body className={notoSerifJP.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}