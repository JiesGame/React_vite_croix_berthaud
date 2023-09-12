import { useLocation } from "react-router-dom";
import logoSC from "../assets/img/saint-chamond.svg"

export const Footer = () => {

  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";

  if (!isNotFoundPage) {
    return ( 
    <footer className="primary-bg text-white w-full absolute bottom-0">
      <div className="grid grid-cols-3 py-3 mx-6">
        <div className="flex justify-start">
          <div className="grid">
          <p className="font-semibold">Maison de quartier</p>
          <p className="font-semibold">La Croix Berthaud</p>
          <hr className="my-1"/>
          <p>Square Henri Dunant</p>
          <p>42400 Saint-Chamond</p>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="flex place-items-end">
            <li>
            <a href="https://www.facebook.com/lacroixberthaud/?locale=fr_FR" target="_blank" rel="noopener noreferrer" class="text-white dark w-fit">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"></path>
            </svg>
          </a>
            </li>
            <li className="mx-2">|</li>
            <li>
              <a href="#" className="text-white hover:underline font-semibold">Contact</a>
            </li>
            <li className="mx-2">|</li>
            <li>
              <a href="#" className="text-white hover:underline font-semibold">Mentions légales</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <a href="https://saint-chamond.fr/" target="_blank" rel="noopener noreferrer"><img src={logoSC} width={200} height={200} alt="logo Saint-Chamond"/></a>     
        </div>
      </div>
    </footer>
    );
  }
};