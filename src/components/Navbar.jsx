/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import glass from "../assets/img/glass.svg";
import burger from "../assets/img/burger.svg";
import fb from "../assets/img/fb.svg";
import { Logout } from "./Logout";
import "../App.css";
import Cookies from "js-cookie";
import { useAtom } from 'jotai';
import { userAtom } from '../store/atoms';
import "../assets/fonts/Koulen-Regular.ttf";


export const Navbar = () => {
  const [userInfo] = useAtom(userAtom)
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";
  const isLoggedIn = Cookies.get('token') !== undefined ? true : false;
  const [isMobile, setIsMobile] = useState(false);
  const [isBurger, setIsBurger] = useState(false);

  useEffect(() => {
    initTE({ Collapse, Dropdown });
    const handleResize = () => {
      setIsMobile(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleBurger = () => {
    setIsBurger(!isBurger);
  }

  if (!isNotFoundPage) {
    return (
      <>
        <nav className="primary-bg w-full">
          <div className="flex">
            <a href="https://www.facebook.com/lacroixberthaud/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="facebook" className="h-8 mt-[2px] sm:mt-[5px] ml-2 fbiconNav" />
            </a>
            <div className="w-full flex justify-end whitespace-nowrap md:text-lg">
              <input placeholder="Recherche ..." className="white dark-bg rounded-md h-[30px] mt-[4px] lg:mt-[7px] px-2 w-[100px] sm:w-[140px] lg:w-auto mr-2 sm:mr-0"></input>
              <img src={glass} alt="glass" className="w-8 ml-1 mr-2 hidden sm:block" />
              <div className="whitespace-nowrap select-none" data-te-dropdown-ref>
                <a className="flex items-center hidden-arrow whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none gap-1" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                  {!isMobile && (
                    (isLoggedIn ? <p className="light-bg pb-[6px] pt-[8px] px-[20px] koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">Mon compte</p> : <p className="light-bg pb-[6px] pt-[8px] px-[14px] koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">Nous rejoindre</p>)
                  )}
                </a>
                <ul className="absolute left-0 right-auto hidden list-none overflow-hidden border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                  {!isLoggedIn &&
                  <>
                    <li className="px-[10px] md:px-[18px] py-1 light-bg text-center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">
                      <Link to="/login" data-te-dropdown-item-ref >Se connecter</Link>
                    </li>
                    <li className="px-[1px] md:px-[18px] py-1 light-bg text center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">
                      <Link to="/register" data-te-dropdown-item-ref >Nouveau compte</Link>
                    </li>
                  </>
                  }
                  {isLoggedIn &&
                  <>
                    { userInfo?.is_admin &&
                      <li className="px-[10px] md:px-[14px] py-1 light-bg text-center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">
                        <Link to="/admin_home">Administration</Link>
                      </li>
                    }
                    <li className="px-[10px] md:px-[14px] py-1 light-bg text-center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">
                      <Link to="/change_profile" data-te-dropdown-item-ref > profil</Link>
                    </li>
                    <li>
                      <Logout />
                    </li>
                  </>
                  }
                </ul>
              </div>
              { userInfo?.is_admin ?
                <Link to="/admin_create_article" className="light mt-2 pb-[6px] px-[14px] koulen font-medium hover:text-[#052130]">
                  Nouvel article
                </Link>
              :
              <a href="*" className="light mt-2 pb-[6px] px-[14px] koulen font-medium hover:text-[#052130]">
                Faire un don
              </a>
              }
            </div>
          </div>
          <Link to="/" data-te-dropdown-item-ref >
            <div className="dark-bg flex justify-between w-full">
              <img src={logo} alt="logoSM" className="block sm:hidden w-[350px] py-3 m-auto" />
              <img src={logo} alt="logo" className="hidden sm:block w-[200px] lg:w-[260px] py-3 2xl:ml-[8%] xl:ml-[7%] lg:ml-[4%] sm:ml-[1%]" />
              <div className="hidden sm:block">
                <p className="flex justify-end koulen font white whitespace-nowrap p-0 select-none text-[60px] md:text-[76px] lg:text-[100px] xl:text-[120px] mt-[40px] xl:mr-[11%] mr-[4%] 2xl:mr-[26%]">LA CROIX BERTH<span className="light">AUD</span></p>
              </div>
            </div>
          </Link>
          <div className="md:hidden">
            <div className="dark-bg pl-2">
              <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleBurger}>
                <img src={burger} alt="burgerMenu" className="w-9" />
              </button>
            </div>
          </div>
          <div className={`md:flex dark-bg pl-[1%] white flex whitespace-nowrap justify-between text-lg lg:text-xl pb-2 navbar ${isBurger ? "block flex-col md:flex-row" : "hidden"}`}>
            <a className="lg:ml-[6%] 2xl:ml-[9%] cursor-pointer">Maison de quartier</a>
            <a className="cursor-pointer">Programme</a>
            <a className="cursor-pointer">A l'affiche</a>
            <a className="cursor-pointer">Activités enfants</a>
            <a className="cursor-pointer">Activités adultes</a>
            <a className="pr-[1%] lg:pr-[6%] 2xl:pr-[9%] cursor-pointer">News</a>
          </div>
          <div className="primary-bg w-full h-3" />
        </nav>
      </>
    );
  }
};