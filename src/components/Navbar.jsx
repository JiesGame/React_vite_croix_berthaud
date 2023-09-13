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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isBurger, setIsBurger] = useState(false);

  useEffect(() => {
    initTE({ Collapse, Dropdown });
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
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
          {/* top bar */}
          <div className="flex">
            <a href="https://www.facebook.com/lacroixberthaud/?locale=fr_FR">
              <img src={fb} alt="facebook" className="h-8 mt-[2px] sm:mt-[5px] ml-2" />
            </a>
            <div className="w-full flex justify-end whitespace-nowrap md:text-lg">
              <div className="hidden sm:block">
                <a href="*" className="light pb-[6px] pt-[8px] px-[14px] koulen font-medium hover:text-[#052130]">Nouvel article</a>
                <a href="*" className="light pb-[6px] pt-[8px] px-[14px] koulen font-medium hover:text-[#052130]">Administration</a>
              </div>
              <input placeholder="Ma recherche ..." className="white dark-bg rounded-md h-[30px] mt-[4px] lg:mt-[7px] px-2 w-[100px] sm:w-[140px] lg:w-auto mr-2 sm:mr-0"></input>
              <img src={glass} alt="glass" className="w-8 ml-1 mr-2 hidden sm:block" />
              <a href="*" className="light-bg pb-[6px] pt-[8px] px-[14px] koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">Nous rejoindre</a>
              <a href="*" className="light pb-[6px] pt-[8px] px-[14px] koulen font-medium hover:text-[#052130]">Faire un don</a>
            </div>
          </div>
          {/* banner */}
          <Link to="/" data-te-dropdown-item-ref >
            <div className="dark-bg flex justify-between w-full">
              <img src={logo} alt="logoSM" className="block sm:hidden w-[350px] py-3 m-auto" />
              <img src={logo} alt="logo" className="hidden sm:block w-[200px] lg:w-[260px] py-3 xl:ml-[7%] lg:ml-[4%] sm:ml-[1%]" />
              <div className="hidden sm:block">
                <p className="flex justify-end koulen font white whitespace-nowrap p-0 select-none text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] mt-[40px] xl:mr-[7%] mr-[4%] 2xl:mr-[16%]">LA CROIX BERTH<span className="light">AUD</span></p>
              </div>
            </div>
          </Link>
          {/* bottom bar */}
          <div className="md:hidden">
            <div className="dark-bg pl-2">
              <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleBurger}>
                <img src={burger} alt="burgerMenu" className="w-9" />
              </button>
            </div>
          </div>
          <div className={`md:flex dark-bg white flex whitespace-nowrap justify-between text-lg lg:text-xl pb-2 navbar ${isBurger ? "block" : "hidden"}`}>
            <a className="ml-[1%] lg:ml-[10%] cursor-pointer">Maison de quartier</a>
            <a>Programme</a>
            <a>A l'affiche</a>
            <a>Activités enfants</a>
            <a>Activités adultes</a>
            <a className="mr-[1%] lg:mr-[10%]">News</a>
          </div>
          {/* end */}
          <div className="flex items-center gap-5">
            <Link to="/" className="text-center w-full text-xl font-bold text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" data-te-dropdown-item-ref >Accueil</Link>
          </div>
          <div className="flex justify-end w-auto relative">
            <div id="navButton" className="flex-grow text-lg mr-6">
              <div className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-2" data-te-dropdown-ref>
                <a className="flex items-center hidden-arrow whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none gap-1 mr-10" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                  <img id="dropdown" src={logo} className="rounded-full ml-10" style={{ height: `30px`, width: `30px` }}/>
                  {!isMobile && (
                    (isLoggedIn ? <p>{userInfo.email}</p> : <p>Se connecter / Créer un compte</p>)
                  )}
                </a>
                <ul className="absolute left-0 right-auto z-[1000] m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                  {!isLoggedIn &&
                  <>
                    <li>
                      <Link to="/login" className="block text-center w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" data-te-dropdown-item-ref >Se connecter</Link>
                    </li>
                    <li>
                      <Link to="/register" className="block text-center w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" data-te-dropdown-item-ref >Créer un compte</Link>
                    </li>
                  </>
                  }
                  {isLoggedIn &&
                  <>
                    <li>
                      <Link to="/change_profile" className="block text-center w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" data-te-dropdown-item-ref >Mettre à jour son profil</Link>
                    </li>
                    <li>
                      <Logout />
                    </li>
                  </>
                  }
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
};