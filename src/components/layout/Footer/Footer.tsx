const Footer = () => {
  return (
    <footer className='bg-emerald-700 text-emerald-200'>
      <div className='p-4 md:p-12 flex flex-col items-center  justify-between gap-4 md:flex-row'>
        <div className='flex flex-col gap-4 w-full items-center md:items-baseline'>
          <h3 className='text-muted-foreground'>Services</h3>
          <menu>
            <li>Branding</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Advertisement</li>
          </menu>
        </div>
        <div className='flex flex-col gap-4 w-full items-center md:items-baseline'>
          <h3 className='text-muted-foreground'>Company</h3>
          <menu>
            <li>About us</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Pres Kit</li>
          </menu>
        </div>
        <div className='flex flex-col gap-4 w-full items-center md:items-baseline'>
          <h3 className='text-muted-foreground'>Legal</h3>
          <menu>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </menu>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
