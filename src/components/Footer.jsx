import { useLocation } from "react-router-dom";
import logoSC from "../assets/img/saint-chamond.svg"
import { useState, useEffect } from "react";

export const Footer = () => {

  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)

  useEffect(() => {
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
    <footer className="primary-bg text-white w-full">
      <div className="md:grid md:grid-cols-3 py-3 mx-6">
        <div className="flex md:justify-start justify-center">
          <div className="md:grid flex gap-3">
            <p className="font-semibold">Maison de quartier</p>
            <p className="font-semibold">La Croix Berthaud</p>
            <hr className="my-1"/>
            <p>Square Henri Dunant</p>
            <p>42400 Saint-Chamond</p>
          </div>
        </div>
        {isMobile ? (
          <div className= "flex flex-col-reverse">
            <div className="md:flex md:justify-center">
              <ul className="md:flex md:place-items-end flex justify-center gap-4 text-center">
                <li>
                  <a href="https://www.facebook.com/lacroixberthaud/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-white dark flex justify-center">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"> 
                      </path>
                    </svg>
                  </a>
                </li>
                <li className="md:mx-2">
                  |
                </li>
                <li>
                  <a href="#" className="text-white hover:underline font-semibold text-lg">
                    Contact
                  </a>
                </li>
                <li className="md:mx-2">
                  |
                </li>
                <li>
                  <a href="#" className="text-white hover:underline font-semibold text-lg">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex md:justify-end justify-center my-4">
              <a href="https://saint-chamond.fr/" target="_blank" rel="noopener noreferrer">
                <img src={logoSC} width={200} height={200} alt="logo Saint-Chamond"/>
              </a>     
            </div>
          </div>
        ) : (
          <>
            <div className="md:flex md:justify-center">
              <ul className="md:flex md:place-items-end flex justify-center gap-4 text-center">
                <li>
                  <a href="https://www.facebook.com/lacroixberthaud/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-white dark flex justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"> 
                      </path>
                    </svg>
                  </a>
                </li>
                <li className="md:mx-2 hidden md:inline-block">
                |
                </li>
                <li>
                  <a href="#" className="text-white hover:underline font-semibold text-lg">
                    Contact
                  </a>
                </li>
                <li className="md:mx-2 hidden md:inline-block">
                |
                </li>
                <li>
                  <a href="#" className="text-white hover:underline font-semibold text-lg">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex md:justify-end justify-center my-4">
              <a href="https://saint-chamond.fr/" target="_blank" rel="noopener noreferrer">
                <img src={logoSC} width={200} height={200} alt="logo Saint-Chamond"/>
              </a>     
            </div>
          </>
        )}
      </div>
    </footer>
    );
  }
};