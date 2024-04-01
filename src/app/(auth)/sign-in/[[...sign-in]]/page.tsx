import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='w-full h-screen grid place-content-center bg-gradient-to-br from-emerald-500 to-cyan-600'>
      <SignIn />
    </div>
  );
}
