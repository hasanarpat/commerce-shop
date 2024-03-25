import { array3, products } from '@/app/data';
import React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

import Image from 'next/image';
import Link from 'next/link';
import ProductCarousel from '@/components/shared/ProductCarousel';
import { Button } from '@/components/ui/button';
import { CiHeart } from 'react-icons/ci';
import { MdAddShoppingCart, MdThumbDown, MdThumbUp } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { CgCopy } from 'react-icons/cg';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const colors = ['Red', 'Green', 'Black', 'Gray', 'Dark Blue', 'Cream'];

const ProductPage = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { id } = params;

  const { size, color } = searchParams;

  console.log(size, color);

  const product = { ...products.filter((item) => item.id === id) };

  return (
    <div className='p-2 md:p-4 lg:p-10 xl:px-16'>
      <div className='w-full flex flex-col gap-2 lg:gap-6'>
        <div className='w-full flex flex-col md:flex-row gap-2 lg:gap-4 h-[720px] md:h-[360px] lg:h-[480px] xl:w-[70%] xl:mx-auto'>
          <div className='flex-1 bg-secondary rounded'>
            <ResizablePanelGroup
              direction='horizontal'
              className='rounded-lg border border-primary w-full'
            >
              <ResizablePanel
                defaultSize={50}
                className='border-primary border-r w-full h-full'
              >
                <div className='w-full h-full'>
                  <span className=''>
                    <Dialog>
                      <DialogTrigger asChild className='w-full h-full'>
                        <div className='relative w-full h-full'>
                          <Image
                            alt=''
                            src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            fill
                            className='object-cover'
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className='max-w-lg lg:max-w-6xl w-full rounded-lg'>
                        <DialogHeader>
                          <DialogTitle>Product Details</DialogTitle>
                          <DialogDescription>
                            You can zoom in and out pictures.
                          </DialogDescription>
                        </DialogHeader>
                        <div className='flex items-center justify-center'>
                          <Carousel className='w-full max-w-xs md:max-w-md'>
                            <CarouselContent>
                              {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                  <div>
                                    <Card>
                                      <CardContent className='aspect-square w-full h-full p-0'>
                                        <div className='relative w-full h-full'>
                                          <Image
                                            alt=''
                                            src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                            fill
                                            className='object-cover'
                                          />
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction='vertical'>
                  <ResizablePanel
                    defaultSize={25}
                    className='border-primary border-b'
                  >
                    <div className='w-full h-full'>
                      <span>
                        <Dialog>
                          <DialogTrigger asChild className='w-full h-full'>
                            <div className='relative w-full h-full'>
                              <Image
                                alt=''
                                src='https://images.pexels.com/photos/1198215/pexels-photo-1198215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                fill
                                className='object-cover'
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className='max-w-lg lg:max-w-6xl w-full rounded-lg'>
                            <DialogHeader>
                              <DialogTitle>Product Details</DialogTitle>
                              <DialogDescription>
                                You can zoom in and out pictures.
                              </DialogDescription>
                            </DialogHeader>
                            <div className='flex items-center justify-center'>
                              <Carousel className='w-full max-w-xs md:max-w-md'>
                                <CarouselContent>
                                  {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                      <div>
                                        <Card>
                                          <CardContent className='aspect-square w-full h-full p-0'>
                                            <div className='relative w-full h-full'>
                                              <Image
                                                alt=''
                                                src='https://images.pexels.com/photos/1440399/pexels-photo-1440399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                                fill
                                                className='object-cover'
                                              />
                                            </div>
                                          </CardContent>
                                        </Card>
                                      </div>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                              </Carousel>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={75}>
                    <div className='w-full h-full'>
                      <span>
                        <Dialog>
                          <DialogTrigger asChild className='w-full h-full'>
                            <div className='relative w-full h-full'>
                              <Image
                                alt=''
                                src='https://images.pexels.com/photos/1440399/pexels-photo-1440399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                fill
                                className='object-cover'
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className='max-w-lg lg:max-w-6xl w-full rounded-lg'>
                            <DialogHeader>
                              <DialogTitle>Product Details</DialogTitle>
                              <DialogDescription>
                                You can zoom in and out pictures.
                              </DialogDescription>
                            </DialogHeader>
                            <div className='flex items-center justify-center'>
                              <Carousel className='w-full max-w-xs md:max-w-md'>
                                <CarouselContent>
                                  {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                      <div>
                                        <Card>
                                          <CardContent className='aspect-square w-full h-full p-0'>
                                            <div className='relative w-full h-full'>
                                              <Image
                                                alt=''
                                                src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                                fill
                                                className='object-cover'
                                              />
                                            </div>
                                          </CardContent>
                                        </Card>
                                      </div>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                              </Carousel>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
          <div className='flex-1 p-2 lg:px-4 flex flex-col items-start'>
            <div className='flex flex-col w-full'>
              <h4 className='text-3xl'>{product[0].title}</h4>
              <p className='my-1 text-sm text-justify px-2'>
                {product[0].description}
              </p>
              <p className='text-lg'>Sizes:</p>
              <div className='my-2'>
                <ul className='flex items-center justify-between xl:justify-center gap-2 lg:gap-4 xl:gap-6 flex-wrap bg-secondary p-1 md:p-3 lg:px-4 w-full rounded-2xl'>
                  {product[0].size.map((productSize) => (
                    <li
                      key={productSize}
                      className={cn(
                        'cursor-pointer min-w-24 flex-grow text-center text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary xl:p-1 xl:px-2',
                        size === productSize.toLowerCase() &&
                          'bg-emerald-600 text-white'
                      )}
                    >
                      <Link
                        href={{
                          pathname: `/products/${id}`,
                          query: {
                            size: productSize.toLowerCase(),
                            color,
                          },
                        }}
                      >
                        {productSize}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='my-1 flex flex-col'>
                <span className='text-lg'>Colors:</span>
                <ul className='flex items-center justify-between xl:justify-center gap-2 lg:gap-4 flex-wrap bg-secondary p-1 md:p-3 lg:px-4 w-full rounded-2xl'>
                  {colors.map((itemColor) => (
                    <li
                      key={itemColor}
                      className={cn(
                        'cursor-pointer min-w-24 flex-grow text-center text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary xl:p-1 xl:px-2',
                        color === itemColor.toLowerCase() &&
                          'bg-emerald-600 text-white'
                      )}
                    >
                      <Link
                        href={{
                          pathname: `/products/${id}`,
                          query: {
                            size,
                            color: itemColor.toLowerCase(),
                          },
                        }}
                      >
                        {itemColor}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex items-center justify-between xl:justify-center gap-2 flex-wrap my-2'>
                <p className='block w-full'>Categories:</p>
                <Link
                  href={`/categories/${product[0].category}`}
                  className='text-center flex-grow bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary p-1 px-2 rounded-lg ml-1'
                >
                  {product[0].category}
                </Link>
                <Link
                  href={`/categories/metal`}
                  className='text-center flex-grow bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary p-1 px-2 rounded-lg ml-1'
                >
                  Metal
                </Link>
                <Link
                  href={`/categories/fashion`}
                  className='text-center flex-grow bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary p-1 px-2 rounded-lg ml-1'
                >
                  Fashion
                </Link>
                <Link
                  href={`/categories/female`}
                  className='text-center flex-grow bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary p-1 px-2 rounded-lg ml-1'
                >
                  Female
                </Link>
              </div>
              {product[0].isInOffer === true && (
                <div className='bg-secondary rounded p-1 px-2'>
                  <p className='text-lg'>Offer:{product[0].offer}</p>
                  <span className='text-xl text-emerald-400'>
                    You have saved $12.23
                  </span>
                </div>
              )}
              <p className='mb-1'>Gender: {product[0].gender.toUpperCase()}</p>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center md:mt-16 lg:mt-0 lg:w-1/2 lg:mx-auto p-2 md:p-4'>
          <div className='flex-1 flex items-center justify-center gap-2'>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='secondary'>Share</Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-md lg:max-w-lg'>
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    You can select any size or color and send the exact link to
                    anyone to view.
                  </DialogDescription>
                </DialogHeader>
                <div className='flex items-center space-x-2'>
                  <div className='grid flex-1 gap-2'>
                    <Label htmlFor='link' className='sr-only'>
                      Link
                    </Label>
                    <Input
                      id='link'
                      defaultValue={`https://localhost:3000/products/${id}${
                        size && color && `?size=${size}&color=${color}`
                      }`}
                      readOnly
                    />
                  </div>
                  <Button type='submit' size='sm' className='px-3'>
                    <span className='sr-only'>Copy</span>
                    <CgCopy className='h-4 w-4' />
                  </Button>
                </div>
                <DialogFooter className='sm:justify-start'>
                  <DialogClose asChild>
                    <Button type='button' variant='secondary'>
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='secondary' className='flex-grow max-w-48'>
                  Add to Cart
                  <MdAddShoppingCart className='text-2xl ml-3' />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit Product Properties</SheetTitle>
                  <SheetDescription>
                    Make changes to product properties here. Click Add to Cart
                    when you're done.
                  </SheetDescription>
                </SheetHeader>
                <div className='grid gap-4 py-4'>
                  <div className='w-full h-full'>
                    <Card>
                      <CardContent className='aspect-square w-full h-full p-0'>
                        <div className='relative w-full h-full'>
                          <Image
                            alt=''
                            src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            fill
                            className='object-cover'
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className=''>
                    <Label htmlFor='username' className='text-right'>
                      Color
                    </Label>
                    <ul className='flex items-center justify-center flex-wrap gap-1'>
                      {colors.map((itemColor) => (
                        <li
                          key={itemColor}
                          className={cn(
                            'cursor-pointer flex-grow text-center text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary',
                            color === itemColor.toLowerCase() &&
                              'bg-emerald-600 text-white'
                          )}
                        >
                          <Link
                            href={{
                              pathname: `/products/${id}`,
                              query: {
                                size,
                                color: itemColor.toLowerCase(),
                              },
                            }}
                          >
                            {itemColor}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className=''>
                    <Label htmlFor='username' className='text-right'>
                      Color
                    </Label>
                    <ul className='flex items-center justify-center flex-wrap gap-1'>
                      {product[0].size.map((productSize) => (
                        <li
                          key={productSize}
                          className={cn(
                            'cursor-pointer flex-grow text-center text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary',
                            size === productSize.toLowerCase() &&
                              'bg-emerald-600 text-white'
                          )}
                        >
                          <Link
                            href={{
                              pathname: `/products/${id}`,
                              query: {
                                size: productSize.toLowerCase(),
                                color,
                              },
                            }}
                          >
                            {productSize}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className=''>
                    <RadioGroup
                      defaultValue='option-one'
                      className='flex flex-col'
                    >
                      <div>
                        <Label htmlFor='username' className='text-right'>
                          Color
                        </Label>
                      </div>
                      <div className='flex gap-2'>
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem value='option-one' id='option-one' />
                          <Label htmlFor='option-one'>Erkek</Label>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem value='option-two' id='option-two' />
                          <Label htmlFor='option-two'>Kadın</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <span className='mb-1'>Quantity</span>
                    <div className='flex items-center justify-center gap-1'>
                      <Button>+</Button>
                      <Button variant='outline' className='cursor-not-allowed'>
                        1
                      </Button>
                      <Button>-</Button>
                    </div>
                    <span className='my-1'>$64,99</span>
                  </div>
                </div>
                <SheetFooter className='xl:mt-40'>
                  <SheetClose asChild>
                    <Button type='submit' className='flex-grow max-w-48'>
                      Add to Cart
                      <MdAddShoppingCart className='text-2xl ml-3' />
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Button variant='secondary' className='min-w-[72px] xl:w-32'>
              <span className='text-3xl text-red-500 group transition-all duration-100 ease-linear'>
                <CiHeart className='fill-red-500 stroke-red-500 group-hover:hidden' />
                <FaHeart className='hidden group-hover:block' />
              </span>
            </Button>
          </div>
        </div>
        <div className='w-full flex gap-2 xl:w-2/3 xl:mx-auto'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Product Details</AccordionTrigger>
              <AccordionContent>
                <div className='bg-secondary p-2'>
                  <div>
                    Mavinin eşlik ettiği çiçek desenleri ile yatak odanıza
                    benzersiz bir zarafet ve ferahlık katacak Amelia Mavi Tek
                    Kişilik Nevresim Takımı, şıklığı ile de göz kamaştırır.
                    <div className='my-2'>
                      %100 pamuk oluşan Amelia Nevresim Takımı’nın içeriğinde
                      nevresim, çarşaf ve yastık kılıfı bulunmaktadır.
                    </div>
                    <div className='my-3'>
                      Karaca Home Amelia Mavi %100 Pamuk Tek Kişilik Lastikli
                      Çarşaflı Nevresim Takımı Set İçeriği Nevresim: 160 cm x
                      220 cm Mavi Yatak Çarşafı: 180 cm x 240 cm (Lastikli)
                      Yastık Kılıfı : 50 cm x 70 cm (1 Adet)
                    </div>
                    <div className='my-1'>
                      Malzeme: %100 Pamuk Özellikler Çamaşır makinesinde
                      yıkanabilir. 30 derecede yıkanması tavsiye edilir. Kurutma
                      makinesi kullanımına uygundur. Kuru temizleme yapılabilir.
                    </div>
                  </div>
                  <Table className='lg:mt-2'>
                    <TableBody className='border border-gray-500 [&>*:nth-child(odd)]:bg-gray-500'>
                      <TableRow className='p-0'>
                        <TableCell className='font-bold p-0'>Tipi</TableCell>
                        <TableCell className='p-0'>Tek Kişilik</TableCell>
                      </TableRow>
                      <TableRow className='p-0'>
                        <TableCell className='font-bold p-0'>Çarşaf</TableCell>
                        <TableCell className='p-0'>Lastikli</TableCell>
                      </TableRow>
                      <TableRow className='p-0'>
                        <TableCell className='font-bold p-0'>tema</TableCell>
                        <TableCell className='p-0'>
                          Tek Desenli Nevresim
                        </TableCell>
                      </TableRow>
                      <TableRow className='p-0'>
                        <TableCell className='font-bold p-0'>
                          Kumaş Dokuması
                        </TableCell>
                        <TableCell className='p-0'>Pamuk</TableCell>
                      </TableRow>
                      <TableRow className='p-0'>
                        <TableCell className='font-bold p-0'>
                          Yastık Adedi
                        </TableCell>
                        <TableCell className='p-0'>1 Adet</TableCell>
                      </TableRow>
                      <TableRow className='p-0'>
                        <TableCell className='font-bold p-0'>
                          Yurt Dışı Satış
                        </TableCell>
                        <TableCell className='p-0'>Yok</TableCell>
                      </TableRow>
                      <TableRow className='p-0'>
                        <TableCell className='font-bold p-0'>
                          Stok Kodu
                        </TableCell>
                        <TableCell className='p-0'>BLABLA08134</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Reviews</AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col p-1 md:p-2 lg:p-3'>
                  <span className='mb-2 text-xl'>
                    Bu ürünle ilgili 104 değerlendirme var.
                  </span>
                  <ScrollArea className='flex flex-col gap-2 lg:gap-4 h-[420px] rounded-md border p-2'>
                    {/* COMMENT ITEM */}
                    <div className='flex items-start gap-2 md:gap-4'>
                      <Avatar className='h-16 w-16'>
                        <AvatarImage
                          src='https://github.com/shadcn.png'
                          alt='@shadcn'
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-col items-start gap-2'>
                        <div className='flex items-center gap-2'>
                          <div className='flex gap-1'>
                            <div className='star' />
                            <div className='star' />
                            <div className='star' />
                            <div className='star' />
                            <div className='star' />
                          </div>
                          <span className='text-muted-foreground text-xs'>
                            29 Kasım 2022, Salı
                          </span>
                        </div>
                        <div className='bg-secondary flex flex-col gap-2 p-3 rounded-lg'>
                          <p>
                            Ürün resimde görüldüğü gibi geldi çok güzel ve şık
                            Karaca kalitesi yine yanıltmadı 👍
                          </p>
                          <hr className='h-[2px] bg-primary' />
                          <div className='flex items-center justify-start gap-2'>
                            <span className='text-xs text-muted-foreground'>
                              Kullanıcı bu ürünü Karaca Home satıcısından aldı.
                            </span>
                            <div className='w-1 h-1 rounded-full bg-gray-500' />
                            <span>Ebatlar 160 x 220 cm</span>
                            <div className='w-1 h-1 rounded-full bg-gray-500' />
                            <span>
                              Renk <b>Mavi</b>
                            </span>
                          </div>
                        </div>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center gap-1 text-2xl'>
                            <MdThumbUp className='hover:fill-emerald-500 cursor-pointer' />
                            <span className='text-sm font-thin'>0</span>
                          </div>
                          <div className='flex items-center gap-1 text-2xl'>
                            <MdThumbDown className='hover:fill-zinc-500 cursor-pointer' />
                            <span className='text-sm font-thin'>0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Separator className='my-2' />
                    <div className='flex items-start gap-2 md:gap-4'>
                      <Avatar className='h-16 w-16'>
                        <AvatarImage
                          src='https://github.com/shadcn.png'
                          alt='@shadcn'
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-col items-start gap-2'>
                        <div className='flex items-center gap-2'>
                          <div className='flex gap-1'>
                            <div className='star' />
                            <div className='star' />
                            <div className='star' />
                            <div className='star' />
                            <div className='star' />
                          </div>
                          <span className='text-muted-foreground text-xs'>
                            29 Kasım 2022, Salı
                          </span>
                        </div>
                        <div className='bg-secondary flex flex-col gap-2 p-3 rounded-lg'>
                          <p>
                            Ut ea cillum culpa nulla. Eiusmod do incididunt ex
                            laborum proident duis ex. Quis excepteur id do
                            adipisicing aliqua non veniam irure sit incididunt
                            laboris consequat excepteur. Occaecat magna veniam
                            incididunt esse occaecat ut non quis in veniam
                            ullamco. Do mollit in nisi do ex anim non.👍
                          </p>
                          <hr className='h-[2px] bg-primary' />
                          <div className='flex items-center justify-start gap-2'>
                            <span className='text-xs text-muted-foreground'>
                              Kullanıcı bu ürünü Karaca Home satıcısından aldı.
                            </span>
                            <div className='w-1 h-1 rounded-full bg-gray-500' />
                            <span>Ebatlar 160 x 220 cm</span>
                            <div className='w-1 h-1 rounded-full bg-gray-500' />
                            <span>
                              Renk <b>Mavi</b>
                            </span>
                          </div>
                        </div>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center gap-1 text-2xl'>
                            <MdThumbUp />
                            <span className='text-sm font-thin'>0</span>
                          </div>
                          <div className='flex items-center gap-1 text-2xl'>
                            <MdThumbDown />
                            <span className='text-sm font-thin'>0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Separator className='my-2' />
                    <div className='flex items-start gap-2 md:gap-4'>
                      <Avatar className='h-16 w-16'>
                        <AvatarImage
                          src='https://github.com/shadcn.png'
                          alt='@shadcn'
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-col items-start gap-2'>
                        <div className='flex items-center gap-2'>
                          <div className='flex gap-1'>
                            <div className='star' />
                            <div className='star' />
                            <div className='star' />
                            <div className='star' />
                            <div className='star' />
                          </div>
                          <span className='text-muted-foreground text-xs'>
                            29 Kasım 2022, Salı
                          </span>
                        </div>
                        <div className='bg-secondary flex flex-col gap-2 p-3 rounded-lg'>
                          <p>
                            Ürün resimde görüldüğü gibi geldi çok güzel ve şık
                            Karaca kalitesi yine yanıltmadı 👍
                          </p>
                          <hr className='h-[2px] bg-primary' />
                          <div className='flex items-center justify-start gap-2'>
                            <span className='text-xs text-muted-foreground'>
                              Kullanıcı bu ürünü Karaca Home satıcısından aldı.
                            </span>
                            <div className='w-1 h-1 rounded-full bg-gray-500' />
                            <span>Ebatlar 160 x 220 cm</span>
                            <div className='w-1 h-1 rounded-full bg-gray-500' />
                            <span>
                              Renk <b>Mavi</b>
                            </span>
                          </div>
                        </div>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center gap-1 text-2xl'>
                            <MdThumbUp />
                            <span className='text-sm font-thin'>0</span>
                          </div>
                          <div className='flex items-center gap-1 text-2xl'>
                            <MdThumbDown />
                            <span className='text-sm font-thin'>0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Payment Methods</AccordionTrigger>
              <AccordionContent>
                Yes. Its animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>Question & Answer</AccordionTrigger>
              <AccordionContent>
                Yes. Its animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='w-full my-4'>
          <ProductCarousel array={array3} isProduct={true} title='Similar' />
          <ProductCarousel
            array={array3}
            isProduct={true}
            title='Others Buy Also'
          />
        </div>
        <div className='w-full my-4'>
          <Table className='caption-top'>
            <TableCaption className='text-emerald-600 text-2xl rounded border border-b-0'>
              Most Sellers in this category.
            </TableCaption>
            <TableBody className='border'>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>1</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-1/2 bg-orange-500 rounded-full' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%50</span>
                      <div className='w-3 h-3 rounded-full bg-orange-500' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>2</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-[67%] bg-green-500 rounded-full clip' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%67</span>
                      <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[9px] border-b-green-500 border-r-[6px] border-r-transparent' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>3</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-[18%] bg-green-500 rounded-full clip' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%18</span>
                      <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[9px] border-b-green-500 border-r-[6px] border-r-transparent' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>4</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-[26%] bg-green-500 rounded-full clip' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%26</span>
                      <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[9px] border-b-green-500 border-r-[6px] border-r-transparent' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>5</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-[37%] bg-green-500 rounded-full clip' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%37</span>
                      <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[9px] border-b-green-500 border-r-[6px] border-r-transparent' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>6</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-[9%] bg-green-500 rounded-full clip' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%9</span>
                      <div className='w-0 h-0 border-l-[6px] border-l-transparent border-b-[9px] border-b-green-500 border-r-[6px] border-r-transparent' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>7</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-1/2 bg-red-500 rounded-full' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%72</span>
                      <div className='w-0 h-0 border-l-[6px] border-l-transparent border-t-[9px] border-t-red-500 border-r-[6px] border-r-transparent' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>8</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-[30%] bg-red-500 rounded-full' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%30</span>
                      <div className='w-0 h-0 border-l-[6px] border-l-transparent border-t-[9px] border-t-red-500 border-r-[6px] border-r-transparent' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>9</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-[29%] bg-red-500 rounded-full' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%29</span>
                      <div className='w-0 h-0 border-l-[6px] border-l-transparent border-t-[9px] border-t-red-500 border-r-[6px] border-r-transparent' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  <span className='rounded-full border p-2'>10</span>
                </TableCell>
                <TableCell>
                  <Image
                    alt=''
                    src='https://images.pexels.com/photos/20510926/pexels-photo-20510926/free-photo-of-deniz-gun-batimi-moda-plaj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    width={60}
                    height={40}
                    className='object-cover'
                  />
                </TableCell>
                <TableCell className='text-left'>
                  <div className='flex flex-col items-start'>
                    <p>Themorad 2'li Döküm Tava Sahan Seti 20x26 cm. Gri</p>
                    <span className='text-xl font-bold'>487,99 TL</span>
                  </div>
                </TableCell>
                <TableCell className='text-center px-1'>
                  <div className='w-full flex items-center gap-1'>
                    <div className='h-3 w-full bg-gray-300 rounded-full flex items-center'>
                      <div className='h-[10px] w-[18%] bg-red-500 rounded-full' />
                    </div>
                    <div className='flex items-center'>
                      <span className='text-xs'>%18</span>
                      <div className='w-0 h-0 border-l-[6px] border-l-transparent border-t-[9px] border-t-red-500 border-r-[6px] border-r-transparent' />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
