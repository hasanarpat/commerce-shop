import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='w-full h-screen grid place-content-center bg-gradient-to-br from-cyan-600 to-emerald-500'>
      <SignUp />
    </div>
  );
}
