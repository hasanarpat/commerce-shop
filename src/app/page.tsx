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

export default function Home() {
  return (
    <main className=''>
      <section className='p-4 lg:p-12'>
        {/* HERO SECTION */}
        <h1 className=' bg-emerald-500 text-foreground text-3xl text-center p-1'>
          HardStone, metal müziğe gönül veren Neşet ertaş hayranı metalheadlere
          gelsin!
        </h1>
        <SuggestionCarousel isProduct={false} array={array1} />
      </section>
      <section className='p-4 lg:px-24'>
        {/* SLIDERS */}
        <ProductCarousel array={array3} isProduct={true} title='Trend' />

        <div className='w-full p-4 lg:px-24'>
          <div className='mx-8 flex items-start justify-center gap-x-4'>
            {array2.map((item, index) => (
              <Card key={index}>
                <CardContent className='relative h-full min-h-48 w-full'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover'
                  />
                </CardContent>
                <CardHeader>
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
        <ProductCarousel array={array3} isProduct={true} title='New' />
        <ProductCarousel array={array3} isProduct={true} title='Hard Rock' />
        <ProductCarousel array={array3} isProduct={true} title='Casettes' />
        <ProductCarousel array={array3} isProduct={true} title='Accessories' />
      </section>
    </main>
  );
}
