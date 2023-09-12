/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import glass from "../assets/img/glass.svg";
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

  if (!isNotFoundPage) {
    return (
      <>
        <nav className="">
          {/* top bar */}
          <div className="flex">
            <div className="w-full primary-bg flex justify-end">
              <input placeholder="Ma recherche ..." className="white dark-bg rounded-md h-[30px] mt-[7px] px-2"></input>
              <img src={glass} alt="glass" className="w-8 ml-1 mr-2" />
              <a href="*" className="light-bg pb-[6px] pt-[8px] px-[14px] koulen font-medium text-lg">Nous rejoindre</a>
              <a href="*" className="light pb-[6px] pt-[8px] px-[14px] koulen font-medium text-lg">Faire un don</a>
            </div>
          </div>
          {/* banner */}
          <div className="dark-bg flex">
            <img src={logo} alt="logo" className="w-[260px] py-3 ml-[8%]" />
            <p className="koulen font white mt-[35px] ml-[15%] text-9xl">LA CROIX BERTH<span className="light">AUD</span></p>
          </div>
          {/* bottom bar */}
            <div className="dark-bg white flex justify-between text-xl pb-2">
              <a className="ml-[10%]">Maison de quartier</a>
              <a>Programme</a>
              <a>A l'affiche</a>
              <a>Activités enfants</a>
              <a>Activités adultes</a>
              <a className="mr-[10%]">News</a>
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