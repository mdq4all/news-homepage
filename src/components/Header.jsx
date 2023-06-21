import logo from "../assets/images/logo.svg";
import menuOpen from "../assets/images/icon-menu.svg"
import closeMenu from "../assets/images/icon-menu-close.svg"
import { useEffect, useState } from "react";

const initialState = false;

const Header = () => {

  const [menu, setMenu] = useState(initialState);
  
  //Si el menu esta abierto y se detecta un resize se cierra el menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menu) setMenu(false);
    };
    window.addEventListener('resize', handleResize);
    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menu]);

  return (
    <nav className="flex justify-between items-center py-3">
      {menu && (
        <div className="fixed inset-0 bg-black opacity-50" onClick={() => setMenu(false)}></div>
      )}
      <img src={logo} alt="logo" className="h-8" />
      <img src={menuOpen} alt="burger menu" onClick={() => setMenu(true)}
           className="md:hidden h-5 hover:cursor-pointer" />
      <ul className={`fixed ${menu ? 'right-0 top-0' : '-right-full'} h-screen w-64 
                    bg-off-white p-7 z-10 text-xl font-medium transition-all duration-1000
                    md:relative md:w-auto md:h-auto md:flex md:right-0 md:p-0 md:text-sm`}>
          <div className="flex justify-end">
            <img src={closeMenu} alt="cruz cierre menu" onClick={() => setMenu(false)}
                className="pb-20 md:hidden" />      
          </div>
            <li className="py-2 md:pl-10 md:text-dark-grayish-blue hover:text-soft-red">
              <a href="#">Home</a></li>
            <li className="py-2 md:pl-10 md:text-dark-grayish-blue hover:text-soft-red">
              <a href="#">New</a></li>
            <li className="py-2 md:pl-10 md:text-dark-grayish-blue hover:text-soft-red">
              <a href="#">Popular</a></li>
            <li className="py-2 md:pl-10 md:text-dark-grayish-blue hover:text-soft-red">
              <a href="#">Trending</a></li>
            <li className="py-2 md:pl-10 md:text-dark-grayish-blue hover:text-soft-red">
              <a href="#">Categories</a></li>
        </ul>
    </nav>
  )
}
export default Header
