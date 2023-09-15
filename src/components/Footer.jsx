import { useLocation } from "react-router-dom";
import logoSC from "../assets/img/saint-chamond.svg"
import fb from "../assets/img/fb.svg";
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
    <footer className="primary-bg text-white w-full whitespace-nowrap">
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
                    <img src={fb} alt="facebook" className="h-8 mt-[2px] sm:mt-[5px] ml-2 fbicon" />
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
                    <img src={fb} alt="facebook" className="h-8 mt-[2px] ml-2 fbicon" />
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
                    Règlement intérieur
                  </a>
                </li>
                <li className="md:mx-2 hidden md:inline-block">
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
          </>
        )}
      </div>
    </footer>
    );
  }
};