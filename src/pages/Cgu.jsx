/* eslint-disable react/no-unescaped-entities */
import '../App.css';
import { saveAs } from 'file-saver';
import lcbCGU from "../assets/public/CGU-LaCroixBerthaud.pdf"

export const Cgu = () => {
  const handleDownload = () => {
    const confirmation = window.confirm("Voulez-vous télécharger le fichier PDF ?");
    if (confirmation) {
      saveAs(lcbCGU, "CGU-LaCroixBerthaud.pdf");
    }
  };

  return (
    <article className=''>
      <div className="mx-[15%]">
        <div className="border-2 rounded-lg shadow-lg w-full h-fit my-10">
        <div>
        <div className="primary-bg rounded-t py-3 text-center">
            <h1 className="text-white text-3xl">Maison de quartier - La Croix Berthaud</h1>
            <hr className="light-gray-border border-[1px] mx-[3%] mt-2"/>
            <h1 className="text-white text-3xl mt-2">Conditions générales d'utilisation</h1>
        </div>
        <p className="py-4 ml-8 text-sm	">
          info
        </p>
        <p className="py-4 mx-8 text-sm	">
          autre
        </p>
        </div>
        <hr className="light-gray-border border-[1px] mx-[3%]"/>
        <div className='ml-7'>
          <p className="primary text-xl font-medium py-4">
            1/ sous titre
          </p>
          <p className='mr-7'>
            contenu
          </p>
        </div>
        <div className="flex justify-between primary-bg text-white rounded-b py-3 mt-7">
          <div className="ml-7">Télécharger les CGU :<a onClick={handleDownload} className='cursor-pointer light download text-lg font-bold ml-1'>CGU de la Maison de Quartier au format PDF</a></div>
        </div>
        </div>
      </div>
    </article>
  );
};