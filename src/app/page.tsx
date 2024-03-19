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
        <div className='w-full p-2 md:p-4 lg:px-24 grid'>
          <div
            className='mx-8 flex flex-wrap items-start justify-center gap-x-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2
          '
          >
            {array2.map((item, index) => (
              <Card
                key={index}
                className='flex-grow min-h-[500px] flex flex-col justify-between'
              >
                <CardContent className='relative h-full min-h-48 w-full'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover'
                  />
                </CardContent>
                <CardHeader className='flex flex-col justify-between flex-grow h-full'>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <Button>
                    <Link href={item.url}>Go to Offer</Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
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
