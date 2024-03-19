import Image from 'next/image';

const Hero = (props: {
  image: string;
  title: string;
  logo: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  isProduct?: boolean;
}) => {
  return (
    <div className='w-full h-96 2xl:h-[480px] my-2'>
      <div className='w-full h-full relative'>
        <Image
          alt='banner'
          src={props.image}
          fill
          className='object-cover aspect-video 2xl:object-center'
        />
        <div className='w-full bg-transparent h-full flex justify-between absolute z-10'>
          <div className='w-[40%] flex justify-start p-1'>
            <span className='text-3xl  md:text-5xl xl:text-6xl h-fit font-extrabold'>
              {props.title}
            </span>
            <Image
              alt='icon'
              src={props.logo}
              width={70}
              height={50}
              className='h-fit'
            />
          </div>
          <div className='w-[50%] flex items-end flex-col justify-end text-xl md:text-3xl'>
            <p className='text-center w-full'>{props.text1}</p>
            <p className='text-center w-full font-extrabold text-2xl md:text-5xl'>
              {props.text2}
            </p>
            <p className='text-center w-full'>{props.text3}</p>
            <p className='text-center w-full text-3xl md:text-8xl'>
              {props.text4}
              {props.isProduct && (
                <span className='text-sm md:text-base align-text-top'>TL</span>
              )}
            </p>
            <p className='text-xs text-center w-full'>
              *Kampanya seçili ürünlerde geçerlidir. Diğer kampanyalarla
              birleştirilemez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
