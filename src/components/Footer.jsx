import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logoSC from "../assets/img/saint-chamond.svg"
import fbf from "../assets/img/fb-footer.svg";
import { useState, useEffect } from "react";
import "../App.css";

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
    <footer className="primary-bg text-white w-full whitespace-nowrap">
      <div className="py-3 mx-6 flex">
        {isMobile ? (
          <div className="w-full">
            <div className="text-center">
              <p className="font-semibold ml-5 mt-1 sm:ml-0 mb-3 sm:mb-[-12px]">Maison de quartier - La Croix Berthaud</p>
              <p className="font-semibold ml-5 mt-2 sm:ml-0 mb-3 sm:mb-[-12px]">Square Henri Dunant, 42400 Saint-Chamond</p>
              <hr className="mt-6" />
            </div>
            <div className= "flex flex-col-reverse">
              <div className="md:flex md:justify-center">
                <ul className="md:flex md:place-items-end flex justify-center gap-4 text-center">
                  <li>
                    <a href="https://www.facebook.com/lacroixberthaud/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-white dark flex justify-center">
                      <img src={fbf} alt="facebook" className="h-8 mt-[-2px] ml-2 fbicon" />
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
                      CGU
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
          </div>
        ) : (
          <>
            <div className="w-full flex justify-between">
              <div>
                <p className="font-semibold ml-5 mt-1 sm:ml-0 mb-3 sm:mb-[-12px]">Maison de quartier</p>
                <p className="font-semibold ml-5 mt-3 sm:ml-0 mb-3 sm:mb-[-12px]">La Croix Berthaud</p>
                <hr className="mt-6" />
                <p className="font-semibold ml-5 mt-2 sm:ml-0 mb-3 sm:mb-[-12px]">Square Henri Dunant</p>
                <p className="font-semibold ml-5 mt-3 sm:ml-0 mb-3 sm:mb-[-12px]">42400 Saint-Chamond</p>
              </div>
              <div className="md:flex md:justify-center">
                <ul className="md:flex md:place-items-end flex justify-center text-center">
                  <li>
                    <a href="https://www.facebook.com/lacroixberthaud/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-white dark flex justify-center">
                      <img src={fbf} alt="facebookFooter" className="w-auto h-8 ml-7 fbicon" />
                    </a>
                  </li>
                  <li className="md:mx-2 hidden md:inline-block mb-1">
                  |
                  </li>
                  <li>
                    <a href="#" className="text-white hover:underline font-semibold text-lg mb-1">
                      Contact
                    </a>
                  </li>
                  <li className="md:mx-2 hidden md:inline-block mb-1">
                  |
                  </li>
                  <li>
                    <Link to="user_charter" className="text-white hover:underline font-semibold text-lg mb-1">
                      Règlement intérieur
                    </Link>
                  </li>
                  <li className="md:mx-2 hidden md:inline-block mb-1">
                  |
                  </li>
                  <li>
                    <Link to="cgu" className="text-white hover:underline font-semibold text-lg mb-1">
                      CGU
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex md:justify-end justify-center my-4 mb-1">
                <a href="https://saint-chamond.fr/" target="_blank" rel="noopener noreferrer">
                  <img src={logoSC} width={200} height={200} alt="logo Saint-Chamond"/>
                </a>     
              </div>
            </div>
          </>
        )}
      </div>
    </footer>
    );
  }
};