import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaApple, FaArrowRightArrowLeft, FaPaypal } from 'react-icons/fa6';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CreditCardIcon } from 'lucide-react';

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const Payment = () => {
  return (
    <main className='lg:py-6 bg-secondary'>
      <div className='lg:w-[60%] 2xl:w-[70%] lg:mx-auto'>
        <div className='flex flex-col lg:flex-row gap-4 relative'>
          <div className='flex-grow grid grid-cols-1'>
            <div className='flex flex-col items-start gap-4 bg-card mt-3 p-4 drop-shadow-md'>
              <p className='text-lg font-semibold'>Shipping Address</p>
              <RadioGroup defaultValue='address' className='w-full'>
                <div className='flex items-start space-x-2'>
                  <RadioGroupItem value='address' id='r1' />
                  <div className='flex flex-col w-full'>
                    <Label htmlFor='r1' className='text-md font-medium'>
                      Send to my address
                    </Label>
                    <form action=''>
                      <div className='w-full flex gap-3 items-center mt-1'>
                        <Label
                          htmlFor='open-address'
                          className='text-sm font-medium min-w-[100px]'
                        >
                          Address
                        </Label>
                        <Input
                          id='open-address'
                          name='open-address'
                          type='text'
                          placeholder='1032 St. 23n. Big Canyon Florida/USA'
                        />
                      </div>
                      <div className='w-full flex gap-3 items-center mt-1'>
                        <Label
                          htmlFor='open-address'
                          className='text-sm font-medium min-w-[100px]'
                        >
                          City
                        </Label>
                        <Input
                          id='city'
                          name='city'
                          type='text'
                          placeholder='Brooklyn'
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='shop' id='r2' />
                  <Label htmlFor='r2' className='text-md font-medium'>
                    Hardstone Shop
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className='bg-gradient-to-r from-emerald-500 to-purple-500 mt-3 drop-shadow-md'>
              <div className='flex flex-col items-start gap-4 bg-card mt-1 p-4'>
                <p className='text-lg font-semibold'>
                  <span className='text-emerald-500'>HardStone</span>
                  <span className='text-purple-500'>Pay</span>
                  <Separator
                    orientation='vertical'
                    className='inline border border-border mx-1'
                  />
                  <span className='text-muted-foreground text-sm font-light'>
                    Secure with one click
                  </span>
                </p>
                <span className='bg-purple-300 text-purple-600 bg-opacity-40 text-sm font-medium w-full p-2 rounded-lg flex items-center justify-between '>
                  <span>Buy now, pay 3 months later</span>
                  <FaArrowRightArrowLeft className='inline' />
                </span>
                <RadioGroup defaultValue='card' className='w-full'>
                  <div className='flex items-start space-x-2'>
                    <RadioGroupItem value='wallet' id='wallet' />
                    <Label
                      htmlFor='wallet'
                      className='text-md font-medium flex flex-col w-full'
                    >
                      <span>Use Hardstone Wallet</span>
                      <span className='text-muted-foreground text-sm font-light'>
                        Hardstone wallet coin: 0 TL
                      </span>
                    </Label>
                  </div>
                  <div className='flex items-start space-x-2'>
                    <RadioGroupItem value='card' id='card' />
                    <Label
                      htmlFor='card'
                      className='text-md font-medium flex flex-col w-full'
                    >
                      Pay with credit card
                      <Card className='lg:max-w-md xl:max-w-xl rounded-2xl drop-shadow-md'>
                        <CardHeader>
                          <CardTitle>
                            <p>Payment Method</p>
                            <span className='text-sm text-muted-foreground font-normal'>
                              Add a new payment method to your account.
                            </span>
                          </CardTitle>
                          <CardDescription className='flex items-center justify-center gap-6 md:gap-12'>
                            <span className='px-8 py-6 border-2 border-card-foreground rounded-xl flex flex-col items-center'>
                              <CreditCardIcon className='w-7 h-7' />
                              <span>Card</span>
                            </span>
                            <span className='px-8 py-6 border-2 border-card-muted rounded-xl flex flex-col items-center'>
                              <FaPaypal className='w-7 h-7' />
                              <span>Paypal</span>
                            </span>
                            <span className='px-8 py-6 border-2 border-card-muted rounded-xl flex flex-col items-center'>
                              <FaApple className='w-7 h-7' />
                              <span>Apple</span>
                            </span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <form action=''>
                            <div className='w-full gap-3 mt-1'>
                              <Label
                                htmlFor='name'
                                className='text-sm font-medium min-w-[100px]'
                              >
                                Name
                              </Label>
                              <Input
                                id='name'
                                name='name'
                                type='text'
                                placeholder='First Last'
                                className='font-normal mt-1'
                              />
                            </div>
                            <div className='w-full gap-3 mt-1'>
                              <Label
                                htmlFor='card-number'
                                className='text-sm font-medium min-w-[100px]'
                              >
                                Card Number
                              </Label>
                              <Input
                                id='card-number'
                                name='card-number'
                                type='text'
                                placeholder=''
                                className='font-normal  mt-1'
                              />
                            </div>
                            <div className='w-full gap-3 mt-1 flex justify-between'>
                              <div className='flex flex-col flex-grow'>
                                <Label
                                  htmlFor='open-address'
                                  className='text-sm font-medium mb-2'
                                >
                                  Expires
                                </Label>
                                <Select>
                                  <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Month' />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Month</SelectLabel>
                                      {months.map((month) => (
                                        <SelectItem
                                          value={month}
                                          key={month}
                                          className='font-medium'
                                        >
                                          {month.toUpperCase()}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className='flex flex-col flex-grow'>
                                <Label className='text-sm font-medium mb-2'>
                                  Year
                                </Label>
                                <Select>
                                  <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Year' />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Year</SelectLabel>
                                      <SelectItem value='2024'>2024</SelectItem>
                                      <SelectItem value='2025'>2025</SelectItem>
                                      <SelectItem value='2026'>2026</SelectItem>
                                      <SelectItem value='2027'>2027</SelectItem>
                                      <SelectItem value='2028'>2028</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className='flex flex-col'>
                                <Label
                                  htmlFor='cvc'
                                  className='text-sm font-medium mb-2'
                                >
                                  CVC
                                </Label>
                                <Input
                                  type='text'
                                  placeholder='CVC'
                                  id='cvc'
                                  name='cvc'
                                  className='w-full'
                                />
                              </div>
                            </div>
                          </form>
                        </CardContent>
                      </Card>
                    </Label>
                  </div>
                  <div className='flex items-start space-x-2'>
                    <RadioGroupItem value='finance' id='finance' />
                    <Label
                      htmlFor='finance'
                      className='text-md font-medium flex flex-col w-full'
                    >
                      <span>Pay with Hardstone Finance</span>
                      <span className='text-muted-foreground text-sm font-light'>
                        Installments for 36 months, but with installment pay
                        easy
                      </span>
                    </Label>
                  </div>
                  <div className='flex items-start space-x-2'>
                    <RadioGroupItem value='credit' id='credit' />
                    <Label
                      htmlFor='credit'
                      className='text-md font-medium flex flex-col w-full'
                    >
                      <span>Shipping Credit</span>
                      <span className='text-muted-foreground text-sm font-light'>
                        Pay installments with 0% fee.
                      </span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className='bg-gradient-to-r from-purple-500 to-emerald-500 mt-3 drop-shadow-md p-4 lg:p-8 text-sm  text-white'>
              Sint consectetur ut pariatur nulla. Voluptate eu et cillum labore
              ex ullamco veniam cupidatat aliquip consectetur proident dolor
              elit duis. Et aute tempor esse deserunt qui tempor dolor do et
              quis laboris quis. Non ipsum quis dolor est cillum mollit ea aute
              ut est ut est Lorem magna. Eiusmod consequat sunt proident
              consequat voluptate commodo ipsum est duis. Est deserunt tempor
              est qui incididunt quis labore exercitation excepteur nulla nisi
              dolor sunt. Non ea nulla nisi sit culpa amet ad dolore officia
              minim est excepteur laboris.
            </div>
          </div>
          <div className='hidden lg:block lg:sticky lg:top-24 max-w-[260px] w-full min-h-96 max-h-[500px] bg-popover mt-2 border border-border'>
            <div className='flex flex-col'>
              <div className='flex flex-col gap-4 p-4'>
                <div className='flex flex-col gap-2'>
                  <p className='text-emerald-500 font-bold text-md'>
                    TOTAL COST
                  </p>
                  <p className='text-3xl font-semibold text-gray-700'>
                    1.399,99<span className='text-lg ml-1'>TL</span>
                  </p>
                </div>
                <div className='w-full flex flex-col'>
                  <div className='items-top flex space-x-2 space-y-2'>
                    <Checkbox id='terms1' className='mt-2' />
                    <div className='grid gap-1.5 leading-none'>
                      <label
                        htmlFor='terms1'
                        className='text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        Accept terms and conditions
                      </label>
                      <p className='text-xs text-muted-foreground'>
                        You agree to our <b>Terms of Service</b> and{' '}
                        <b>Privacy Policy</b>.
                      </p>
                    </div>
                  </div>
                  <Button
                    className='mt-4 bg-emerald-500 text-white w-full text-lg font-semibold py-[28px] rounded-lg'
                    variant='link'
                    type='submit'
                  >
                    Confirm Order
                  </Button>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='w-full flex items-center justify-between text-sm font-medium mb-2'>
                    <span>Shipping</span>
                    <span className='text-green-600'>
                      Free
                      <span className='text-muted-foreground line-through ml-1'>
                        44,90 TL
                      </span>
                    </span>
                  </div>
                  <div className='w-full flex items-center justify-between text-sm font-medium mb-2'>
                    <span>Products</span>
                    <span>2.898,90 TL</span>
                  </div>
                  <div className='w-full flex flex-col items-start justify-between text-sm font-medium mb-2'>
                    <span>Promotions</span>
                    <div className='flex items-start justify-between mt-1'>
                      <span className='flex-grow text-start text-xs text-muted-foreground'>
                        Ayakkabı ve Çantalarda 750 TL ve üzeri 75 TL indirim
                      </span>
                      <span className='w-full text-green-600 text-end'>
                        - 75,00 TL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom-0 sticky z-20 bg-background lg:hidden w-full'>
            <div className='w-full flex flex-col items-center justify-between'>
              <div className='flex flex-col gap-2 w-full'>
                <div className='w-full flex items-center justify-between text-sm font-medium mb-2'>
                  <span>Shipping</span>
                  <span className='text-green-600'>
                    Free
                    <span className='text-muted-foreground line-through ml-1'>
                      44,90 TL
                    </span>
                  </span>
                </div>
                <div className='w-full flex items-center justify-between text-sm font-medium mb-2'>
                  <span>Products</span>
                  <span>2.898,90 TL</span>
                </div>
                <div className='w-full flex flex-col items-start justify-between text-sm font-medium mb-2'>
                  <span>Promotions</span>
                  <div className='flex items-start justify-between mt-1'>
                    <span className='flex-grow text-start text-xs text-muted-foreground'>
                      Ayakkabı ve Çantalarda 750 TL ve üzeri 75 TL indirim
                    </span>
                    <span className='w-full text-green-600 text-end'>
                      - 75,00 TL
                    </span>
                  </div>
                </div>
              </div>
              <Separator />
              <div className='items-top flex items-center justify-start space-x-2 space-y-2 w-full p-2'>
                <Checkbox id='terms1' />
                <div className='grid gap-1.5 leading-none'>
                  <label
                    htmlFor='terms1'
                    className='text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    You agree to our <b>Terms of Service</b> and{' '}
                    <b>Privacy Policy</b>.
                  </label>
                </div>
              </div>
              <Separator />
              <div className='flex items-center justify-between w-full p-2 px-4'>
                <p className='text-emerald-500 font-bold text-sm'>
                  TOTAL COST{' '}
                  <span className='block text-foreground text-xl'>
                    1.399,99<span className='text-sm ml-1'>TL</span>
                  </span>
                </p>
                <Button
                  className='w-fit bg-emerald-500 text-white text-lg font-semibold py-[28px] rounded-lg'
                  variant='link'
                  type='submit'
                >
                  Confirm Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
