import { useEffect, useState } from 'react';
import imgMobile from '../assets/images/image-web-3-mobile.jpg'
import imgDesktop from '../assets/images/image-web-3-desktop.jpg'
import Aside from '../components/Aside.jsx'


const MainContent = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }, []);
  
  return (
    <section className='font-inter md:grid md:grid-cols-3 md:grid-rows-2 md:gap-8 md:mt-8'>
      {windowWidth <= 768 && <img src={imgMobile} alt="imagen web 3" className='py-5' />}
      {windowWidth > 768 && <img src={imgDesktop} alt="imagen web 3" className='md:col-span-2' />}
      <h2 className='text-[44px] font-extrabold leading-10 md:row-start-2 md:leading-[3rem]'>
        The Bright Fututre of Web 3.0?</h2>
      <div className='md:row-start-2'>
        <p className='py-5 text-[14px] leading-6 opacity-75 tracking-[0.5px] 
                    md:p-0 md:pb-6'>
            We dive into the next evolution of the web that claims to put the 
            power of the platforms back into the hands of the people. But is really
            fulfilling its promise?
        </p>
        <button className='bg-soft-red py-4 px-7 text-off-white text-[14px] 
                            font-bold tracking-[6px] hover:bg-very-dark-blue'>
            READ MORE</button>
      </div>
      <div className='md:row-span-2'>
          <Aside />
      </div>
    </section>
  )
}
export default MainContent
