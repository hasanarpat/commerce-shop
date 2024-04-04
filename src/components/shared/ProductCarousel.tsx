import Carousel from '@/components/shared/Carousel';
import { TProduct } from '@/types';

const ProductCarousel = (props: {
  array: TProduct[];
  title?: String;
  isProduct: boolean;
}) => {
  return (
    <Carousel
      classNameContent='flex'
      classNameItem=''
      classNameContainer='p-3 lg:p-12 lg:py-2 min-h-[220px]'
      classNameCard='flex-grow grow ease-in-out duration-100 flex flex-col'
      classNameCardContent=''
      classNameCardHeader=''
      classNameCardFlex=''
      isProduct={props.isProduct}
      array={props.array}
      title={props.title}
    />
  );
};

export default ProductCarousel;
