import Carousel from '@/components/shared/Carousel';
import ProductCarousel from '@/components/shared/ProductCarousel';
import SuggestionCarousel from '@/components/shared/SuggestionCarousel';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import Image from 'next/image';
import Link from 'next/link';
import { array1, array2, array3 } from './data';
import Hero from '@/components/layout/Hero/Hero';

export default function Home() {
  return (
    <main className=''>
      <section className='p-4 lg:p-12'>
        {/* HERO SECTION */}
        <h1 className=' bg-emerald-500 text-foreground text-3xl text-center p-1'>
          HardStone, metal müziğe gönül veren Neşet Ertaş hayranı metalheadlere
          gelsin!
        </h1>
        <SuggestionCarousel isProduct={false} array={array1} />
      </section>
      <section className='p-4 lg:px-24'>
        {/* SLIDERS */}
        <ProductCarousel array={array3} isProduct={true} title='Trend' />

        <Hero
          image='https://images.pexels.com/photos/211047/pexels-photo-211047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          logo='/assets/images/wolverine-logo.svg'
          title='WOLVERINE'
          text1='%100 DERİ'
          text2='STANFORD BOTLARDA SON FIRSATLAR'
          text3='TEK FİYAT'
          text4='799'
          isProduct={true}
        />

        <Hero
          image='https://images.pexels.com/photos/1646311/pexels-photo-1646311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          logo='/assets/images/ns-02.svg'
          title='NORTH SAILS'
          text1=''
          text2=''
          text3='BORN FROM'
          text4='OCEAN'
        />
        {/* OFFERS SECTION */}
        <div className='w-full p-2 md:p-4 lg:px-24'>
          <div className='flex items-start justify-center gap-2'>
            <ScrollArea className='min-w-md mx-auto whitespace-nowrap rounded-md border'>
              <div className='flex w-max space-x-4 p-4'>
                {array2.map((item) => (
                  <figure key={item.title} className='shrink-0'>
                    <div className='overflow-hidden rounded-md'>
                      <Image
                        src={item.image}
                        alt={`${item.title}`}
                        className='aspect-[3/4] h-fit w-fit object-cover'
                        width={300}
                        height={400}
                      />
                    </div>
                    <figcaption className='pt-2 text-xs text-muted-foreground'>
                      <div className='flex flex-col w-full gap-1'>
                        {item.title}
                        <Button className='w-fit'>
                          <Link href={item.url}>Go to Offer</Link>
                        </Button>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>
        </div>

        <Hero
          image='https://images.pexels.com/photos/999034/pexels-photo-999034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          logo='/assets/images/hd-56.svg'
          title='HARLEY DAVIDSON'
          text1='Bütün Ürünlerde'
          text2='TARZINDAN ÖDÜN VERME'
          text3='İndirim'
          text4='35%'
        />
        <Hero
          image='https://images.pexels.com/photos/5624268/pexels-photo-5624268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          logo='/assets/images/ns-02.svg'
          title='igor'
          text1='Çocuk Ürünlerinde'
          text2='İndirim'
          text3='Şimdi keşfet'
          text4='%25 İNDİRİM'
        />
        <ProductCarousel array={array3} isProduct={true} title='New' />
        <ProductCarousel array={array3} isProduct={true} title='Hard Rock' />
        <ProductCarousel array={array3} isProduct={true} title='Casettes' />
        <ProductCarousel array={array3} isProduct={true} title='Accessories' />
      </section>
    </main>
  );
}
