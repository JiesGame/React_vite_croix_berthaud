export const Contact = () => {
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
                <span className="font-semibold">• téléphone</span> : 07 82 60 57 87
              </li>
              <li className="my-2">
                <span className="font-semibold">• mail</span> : <a href ="mailto:contact@la-croix-berthaud.fr" className="hover:underline">contact@la-croix-berthaud.fr</a>
              </li>
              <li className="my-2">
                <span className="font-semibold">• nous écrire à l'adresse suivante</span> :
                <p className="pl-4 mt-2">
                  Square Henri Dunant
                </p>
                <p className="pl-4 mb-4">
                  42400 Saint-Chamond
                </p>
              </li>
            </ul>
            <p className="pb-6">Vous pouvez également venir au moment d'une activité</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
