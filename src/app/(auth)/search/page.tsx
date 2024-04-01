import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { info } from 'console';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import GridCards from '@/components/shared/GridCards';
import { array1, array3 } from '../../data';

const SearchResultsPage = (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  const item = searchParams.searchParams && searchParams.searchParams['item'];
  const latest =
    searchParams.searchParams && searchParams.searchParams['latest'];
  const cheapest =
    searchParams.searchParams && searchParams.searchParams['cheapest'];
  const inOffer =
    searchParams.searchParams && searchParams.searchParams['inOffer'];

  return (
    <div className='p-2 md:p-4 lg:p-12 xl:px-16'>
      <div className='flex flex-col items-start gap-4 lg:gap-8 justify-center'>
        <div className='md:w-1/3 lg:w-1/2 w-full mx-auto flex items-center justify-center gap-4 flex-wrap'>
          <Link
            href={{
              pathname: `/search/`,
              query: {
                item,
                latest:
                  latest !== undefined && latest === 'true' ? 'false' : true,
                cheapest,
                inOffer,
              },
            }}
          >
            <Button
              className={cn(
                latest !== undefined &&
                  latest === 'true' &&
                  'bg-emerald-500 text-white'
              )}
            >
              Yeniden Eskiye Sırala
            </Button>
          </Link>
          <Link
            href={{
              pathname: `/search/`,
              query: {
                item,
                latest,
                cheapest:
                  cheapest !== undefined && cheapest === 'true'
                    ? 'false'
                    : true,
                inOffer,
              },
            }}
          >
            <Button
              className={cn(
                cheapest !== undefined &&
                  cheapest === 'true' &&
                  'bg-emerald-500 text-white'
              )}
            >
              Ucuzdan Pahalıya Sırala
            </Button>
          </Link>
          <Link
            href={{
              pathname: `/search/`,
              query: {
                item,
                latest,
                cheapest,
                inOffer:
                  inOffer !== undefined && inOffer === 'true' ? 'false' : true,
              },
            }}
          >
            <Button
              className={cn(
                inOffer !== undefined &&
                  inOffer === 'true' &&
                  'bg-emerald-500 text-white'
              )}
            >
              Kampanyalı Ürünler
            </Button>
          </Link>
        </div>
        <div className='lg:w-[90%] xl:w-[80%] w-full mx-auto'>
          <GridCards items={[...array3]} />
        </div>
        <div className='bg-secondary w-full mb-2'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
