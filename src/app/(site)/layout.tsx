import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import Provider from '@/lib/provider';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import OfferBanner from '@/components/layout/Banner/OfferBanner';
import BrandsBanner from '@/components/layout/Banner/BrandsBanner';
import { Separator } from '@/components/ui/separator';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'HardStone',
  description: 'Everything about metal, clothes, accesories etc.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Provider>
          <OfferBanner />
          <Separator className='bg-gray-400' />
          <BrandsBanner />
          <Separator className='bg-gray-400' />
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
