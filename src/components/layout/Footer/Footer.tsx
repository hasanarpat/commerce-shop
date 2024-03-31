const Footer = () => {
  return (
    <footer className='bg-accent-foreground text-accent'>
      <div className='p-4 md:p-12 flex flex-col sm:flex-row flex-wrap items-start justify-between gap-4'>
        <div className='flex flex-col gap-4 items-start md:items-baseline flex-grow'>
          <h3 className='text-muted'>Services</h3>
          <menu>
            <li>Branding</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Advertisement</li>
          </menu>
        </div>
        <div className='flex flex-col gap-4 items-start md:items-baseline flex-grow'>
          <h3 className='text-muted'>Company</h3>
          <menu>
            <li>About us</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Pres Kit</li>
          </menu>
        </div>
        <div className='flex flex-col gap-4 items-start md:items-baseline flex-grow'>
          <h3 className='text-muted'>Legal</h3>
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
