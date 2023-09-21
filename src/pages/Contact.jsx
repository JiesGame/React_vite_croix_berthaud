export const Contact = () => {

  const handleHyperLinkFB = () => {
    const confirmation = window.confirm("Voulez-vous ouvrir un nouvel onglet Facebook ?");
    if (confirmation) {
      window.open('https://www.facebook.com/lacroixberthaud/?locale=fr_FR', '_blank');
    }
  };

  return (
    <div className='flex items-center justify-center my-14'>
      <div className="w-[30rem] h-fit">
        <div className="bg-white shadow-lg rounded h-full">
          <div className='mb-4'>
            <h1 className='flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-bold'>
              NOUS CONTACTER
            </h1>
            <div className="ml-4">
            <h2 className="pt-6 pb-2">
              L'association ne dispose pas de secrétariat permanent, pour nous contacter plusieurs possibilités :
            </h2>
            <ul>
              <li className="my-2">
                <span className="font-semibold">
                  • téléphone
                </span>
                <span className="ml-2">
                  : 07 82 60 57 87
                </span>
              </li>
              <li className="my-2">
                <span className="font-semibold">
                  • mail
                </span>
                <span className="mx-2">
                  :
                </span> 
                <a href ="mailto:contact@la-croix-berthaud.fr" className="hover:underline card_link">
                  contact@la-croix-berthaud.fr
                </a>
              </li>
              <li className="my-2">
                <span className="font-semibold">
                  • nous écrire à l'adresse suivante
                </span>
                <span className="mx-2">
                  :
                </span> 
                <p className="pl-4 mt-2">
                  Square Henri Dunant
                </p>
                <p className="pl-4 mb-4">
                  42400 Saint-Chamond
                </p>
              </li>
              <li className="my-2 flex">
                <span className="font-semibold">
                  • Facebook
                </span>
                <span className="mx-2">
                  :
                </span>  
                <a onClick={handleHyperLinkFB} rel="noopener noreferrer" className="cursor-pointer dark hover:underline card_link">
                  www.facebook.com/lacroixberthaud
                </a>
              </li>
            </ul>
            <p className="py-6">Vous pouvez également venir au moment d'une activité</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
