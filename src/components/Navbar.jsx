/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useRef } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { articlesCategoryFetch } from "../services/axiosArticle";
import { articlesSearchFetch } from "../services/axiosArticle";

export const Navbar = () => {
  const [userInfo] = useAtom(userAtom)
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";
  const isLoggedIn = Cookies.get('token') !== undefined ? true : false;
  const [isMobile, setIsMobile] = useState(false);
  const [isBurger, setIsBurger] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const [dataArticles, setDataArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    articlesSearchFetch(searchQuery, setSearchData, navigate);
    setSearchQuery('');
  };

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

  const handleHyperLink = () => {
    const confirmation = window.confirm("Voulez-vous ouvrir un nouvel onglet Facebook ?");
    if (confirmation) {
      window.open('https://www.facebook.com/lacroixberthaud/?locale=fr_FR', '_blank');
    }
  };

  const toggleBurger = () => {
    setIsBurger(!isBurger);
  }

  const [dropdownStates, setDropdownStates] = useState({
    maison_de_quartier: false,
    programme: false,
    a_l_affiche: false,
    activites_enfants: false,
    activites_adultes: false,
    news: false
  });

  const handleDropdownClick = (category) => {
    articlesCategoryFetch(setDataArticles, category);
    setDropdownStates((prevState) => {
      const updatedStates = {};
      Object.keys(prevState).forEach((key) => {
        updatedStates[key] = key === category ? !prevState[key] : false;
      });
      return updatedStates;
    });
    clearTimeout(dropdownTimeoutRef.current);
  };
  
  const handleMouseLeave = (category) => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownStates((prevState) => ({
        ...prevState,
        [category]: false
      }));
    }, 2000);
  };

  if (!isNotFoundPage) {
    return (
      <>
        <nav className="primary-bg w-full">
          <div className="flex">
            <span onClick={handleHyperLink} rel="noopener noreferrer" className="hidden sm:block">
              <img src={fb} alt="facebook" className="h-8 mt-[2px] sm:mt-[5px] ml-2 fbiconNav cursor-pointer" />
            </span>
            <div className="w-full flex justify-end whitespace-nowrap md:text-lg">
              <input
                placeholder="Recherche ..."
                className="white dark-bg rounded-md h-[30px] mt-[4px] lg:mt-[7px] px-2 w-[100px] sm:w-[140px] lg:w-auto mr-2 sm:mr-0"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
                <img src={glass} onClick={handleSearch} alt="glass" className="w-8 ml-1 mr-2 hidden sm:block cursor-pointer" />
              <div className="whitespace-nowrap select-none" data-te-dropdown-ref>
                <a className="flex items-center hidden-arrow whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none gap-1" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                  {!isMobile && (
                    (isLoggedIn ? <p className="light-bg pb-[6px] pt-[8px] sm:px-[20px] px-[17px] koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">Mon compte</p> : <p className="light-bg pb-[6px] pt-[8px]  sm:px-[14px] px-[7px] koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">Nous rejoindre</p>)
                  )}
                </a>
                <ul className="absolute left-0 right-auto hidden list-none overflow-hidden border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                  {!isLoggedIn &&
                  <>
                    <li className="px-[13px] md:px-[18px] py-1 light-bg text-center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">
                      <Link to="/login" data-te-dropdown-item-ref >Se connecter</Link>
                    </li>
                    <li className="px-[5px] md:px-[18px] py-1 light-bg text center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">
                      <Link to="/register" data-te-dropdown-item-ref >Nouveau compte</Link>
                    </li>
                  </>
                  }
                  {isLoggedIn &&
                  <>
                    { userInfo?.is_admin &&
                      <li className="px-[10px] md:px-[14px] py-1 light-bg text-center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">
                        <Link to="/admin_articles">Administration</Link>
                      </li>
                    }
                    <li className="px-[10px] md:px-[14px] py-1 light-bg text-center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">
                      <Link to="/inscription" data-te-dropdown-item-ref >Inscription</Link>
                    </li>
                    <li className="px-[10px] md:px-[14px] py-1 light-bg text-center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]">
                      <Link to="/profile" data-te-dropdown-item-ref > profil</Link>
                    </li>
                    <li>
                      <Logout />
                    </li>
                  </>
                  }
                </ul>
              </div>
              { userInfo?.is_admin ?
                <Link to="/admin_create_article" className="light mt-2 pb-[6px] sm:px-[14px] px-[7px] koulen font-medium hover:text-[#052130]">
                  Nouvel article
                </Link>
              :
              <Link to="/donation" className="light mt-2 pb-[6px] sm:px-[14px] px-[7px] koulen font-medium hover:text-[#052130]">
                Faire un don
              </Link>
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
          <div className={`navbar select-none	md:flex dark-bg white flex whitespace-nowrap justify-between text-lg lg:text-xl ${isBurger ? "block flex-col md:flex-row" : "hidden"}`}>
            <article
              className="ml-[2%] lg:ml-[6%] 2xl:ml-[9%] pb-4 cursor-pointer"
              onClick={() => handleDropdownClick('maison_de_quartier')}
              onMouseLeave={() => handleMouseLeave('maison_de_quartier')}
            >
              Maison de quartier
              {dropdownStates.maison_de_quartier && (
                <div className="px-[10%] text-center dropdown-content cursor-pointer w-full left-0 py-3 sm:py-6 primary-bg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3">
                    {dataArticles.map((article) => (
                      <Link
                        to={`/article/${article.id}`}
                        key={article.id}
                        className={`cursor-pointer pb-4 white text-lg`}
                      >
                        ● {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
            <article
              className="ml-[2%] sm:ml-0 cursor-pointer pb-4"
              onClick={() => handleDropdownClick('programme')}
              onMouseLeave={() => handleMouseLeave('programme')}
            >
              Programme
              {dropdownStates.programme && (
                <div className="px-[10%] text-center dropdown-content cursor-pointer w-full left-0 py-3 sm:py-6 primary-bg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3">
                    {dataArticles.map((article) => (
                      <Link
                        to={`/article/${article.id}`}
                        key={article.id}
                        className={`cursor-pointer pb-4 white text-lg`}
                      >
                        ● {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
            <article
              className="ml-[2%] sm:md-[0%] cursor-pointer pb-4"
              onClick={() => handleDropdownClick('a_l_affiche')}
              onMouseLeave={() => handleMouseLeave('a_l_affiche')}
            >
              A l'affiche
              {dropdownStates.a_l_affiche && (
                <div className="px-[10%] text-center dropdown-content cursor-pointer w-full left-0 py-3 sm:py-6 primary-bg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3">
                    {dataArticles.map((article) => (
                      <Link
                        to={`/article/${article.id}`}
                        key={article.id}
                        className={`cursor-pointer pb-4 white text-lg`}
                      >
                        ● {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
            <article
              className="ml-[2%] sm:md-[0%] cursor-pointer pb-4"
              onClick={() => handleDropdownClick('activites_enfants')}
              onMouseLeave={() => handleMouseLeave('activites_enfants')}
            >
              Activités enfants
              {dropdownStates.activites_enfants && (
                <div className="px-[10%] text-center dropdown-content cursor-pointer w-full left-0 py-3 sm:py-6 primary-bg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3">
                    {dataArticles.map((article) => (
                      <Link
                        to={`/article/${article.id}`}
                        key={article.id}
                        className={`cursor-pointer pb-4 white text-lg`}
                      >
                        ● {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
            <article
              className="ml-[2%] sm:md-[0%] cursor-pointer pb-4"
              onClick={() => handleDropdownClick('activites_adultes')}
              onMouseLeave={() => handleMouseLeave('activites_adultes')}
            >
              Activités adultes
              {dropdownStates.activites_adultes && (
                <div className="px-[10%] text-center dropdown-content cursor-pointer w-full left-0 py-3 sm:py-6 primary-bg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3">
                    {dataArticles.map((article) => (
                      <Link
                        to={`/article/${article.id}`}
                        key={article.id}
                        className={`cursor-pointer pb-4 white text-lg`}
                      >
                        ● {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
            <article
              className="ml-[2%] sm:md-[0%] mr-[2%] lg:mr-[6%] 2xl:mr-[9%] cursor-pointer pb-4"
              onClick={() => handleDropdownClick('news')}
              onMouseLeave={() => handleMouseLeave('news')}
            >
              News
              {dropdownStates.news && (
                <div className="px-[10%] text-center dropdown-content cursor-pointer w-full left-0 py-3 sm:py-6 primary-bg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3">
                    {dataArticles.map((article) => (
                      <Link
                        to={`/article/${article.id}`}
                        key={article.id}
                        className={`cursor-pointer pb-4 white text-lg`}
                      >
                        ● {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
          <div className="primary-bg w-full h-3" />
        </nav>
      </>
    );
  }
};