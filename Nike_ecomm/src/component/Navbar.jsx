import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React, {useEffect, useState} from "react";
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice";






const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY)

    const onCartToggle =()=> {
      dispatch(setOpenCart({cartState: true}))
    }
    
    const onNavScroll =()=>{
        if(window.scrollY){
            setNavState(true);
        } else{
            setNavState(false);
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', onNavScroll)
      return () => {
        window.removeEventListener('scroll', onNavScroll)
      }
    }, [])
    
  return (
    <>
      <header className={ navState ? 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme' : 'absolute top-7 left-0 right-0 opacity-100 z-50'}>
        <nav className="flex items-center justify-between nike-container">
            <div className="flex items-center">
                <img src={logo} alt="logo/img" className={`w-16 h-auto ${navState && "filter brightness-0"}`} />
            </div>
            <ul className="flex items-center justify-center gap-2">
                <li className="grid items-center">
                    <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                </li>
                <li className="grid items-center">
                    <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                </li>
                <li className="grid items-center">
                    <button type="button" className="border-none outline-none active:scale-110 transition-all duration-300 relative" onClick={onCartToggle}><ShoppingBagIcon className={`icon-style ${navState && "filter brightness-0"}`}/>
                    <div className={navState ? 'absolute top-4 right-0 bg-black text-slate-100 shadow-slate-100 h-3 w-3 text-[0.65rem] font-medium leading-tight rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300' : 'absolute top-4 right-0 bg-white text-slate-900 shadow-slate-100 h-3 w-3 text-[0.65rem] font-medium leading-tight rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300'}>{totalQTY}</div></button>
                </li>
            </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;


