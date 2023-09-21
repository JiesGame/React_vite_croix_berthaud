/* eslint-disable react/no-unescaped-entities */
import '../App.css';
import { saveAs } from 'file-saver';
import lcbCGU from "../assets/public/RèglementIntérieur-LaCroixBerthaud.pdf"

export const Cgu = () => {
  const handleDownload = () => {
    const confirmation = window.confirm("Voulez-vous télécharger le fichier PDF ?");
    if (confirmation) {
      saveAs(lcbCGU, "RèglementIntérieur-LaCroixBerthaud.pdf");
    }
  };

  return (
    <article className=''>
      <div className="mx-[17%]">
        <div className="border-2 rounded-lg shadow-lg w-full h-fit my-10">
        <div>
        <div className="primary-bg rounded-t py-3 text-center">
            <h1 className="text-white text-3xl">Maison de quartier - La Croix Berthaud</h1>
            <hr className="light-gray-border border-[1px] mx-[3%] mt-2"/>
            <h1 className="text-white text-3xl mt-2">Conditions générales d'utilisation</h1>
        </div>
        </div>
        <hr className="light-gray-border border-[1px] mx-[3%]"/>
        <div className='ml-7'>
          <p className='mr-7 text-sm pt-2'>
            Les présentes conditions générales d'utilisation (dites « <span className='font-bold'>CGU</span> ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par <span className='font-bold'>MAISON DE QUARTIER DE LA CROIX BERTHAUD</span> et de définir les conditions d’accès et d’utilisation des services par « <span className='font-bold'>l'Utilisateur</span> ».<br />
            Les présentes CGU sont accessibles sur le site à la rubrique « <span className='font-bold'>CGU</span> ».<br />
            Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque
            utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « <span className='font-bold'>J'accepte les Conditions Générales d'Utilisation</span> ».
            En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site.<br />
            Localhost se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.
          </p>
          <p className="text-xl primary mr-7 font-bold pt-5">
            Les mentions légales
          </p>
          <p className='mr-7 text-sm pt-4'>
            L'édition du site Localhost est assurée par la Société association à but non lucratif MAISON DE QUARTIER DE LA CROIX BERTHAUD, dont le siège social est situé au :<br />
            <br />
            Square Henri Dunant 42400 SAINT-CHAMOND<br />
            Téléphone : 07 82 60 57 87<br />
            Adresse e-mail : contact@la-croix-berthaud.fr<br />
          </p>
          <p className="text-xl primary mr-7 font-bold pt-5">
            Accès au site
          </p>
          <p className='mr-7 text-sm pt-4'>
            Le site Localhost permet à l'Utilisateur un accès gratuit aux services suivants :<br />
            Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.<br />
            <br />
            L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s’inscrire en remplissant le formulaire. En acceptant de s’inscrire aux services réservés, l’Utilisateur membre s’engage à fournir des informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email.<br />
            <br />
            Pour accéder aux services, l’Utilisateur doit ensuite s'identifier à l'aide de son adresse e-mail et de son mot
            de passe saisies lors de son inscription.<br />
            Tout Utilisateur membre régulièrement inscrit pourra également supprimer son compte, supprimant ainsi l'ensemble de ses données personnelles, en se rendant à la page dédiée sur son espace personnel. Celle-ci sera effective immédiatement.
            Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité de Localhost. Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à l’éditeur
            de toute interruption ou suspension de service, même sans préavis.<br />
            <br />
            L'Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse email de l’éditeur communiqué à l’ARTICLE 1.<br />
          </p>
          <p className="text-xl primary mr-7 font-bold pt-5">
            Collecte des données
          </p>
          <p className='mr-7 text-sm pt-4'>
            Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.<br />
            <br />
            En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles.<br />
            <br />
            L'Utilisateur exerce ce droit via son espace personnel.
          </p>
          <p className="text-xl primary mr-7 font-bold pt-5">
            Propriété intellectuelle
          </p>
          <p className='mr-7 text-sm pt-4'>
            Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.<br />
            <br />
            L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
            Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.<br />
            <br />
            Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.
          </p>
          <p className="text-xl primary mr-7 font-bold pt-5">
            Responsabilité
          </p>
          <p className='mr-7 text-sm pt-4'>
            Les sources des informations diffusées sur le site Localhost sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.<br /> Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site Localhost ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.<br />
            <br />
            L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.<br />
            <br />
            Le site Localhost ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.<br />
            <br />
            La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.
          </p>
          <p className="text-xl primary mr-7 font-bold pt-5">
            Liens hypertextes
          </p>
          <p className='mr-7 text-sm pt-4'>
            Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site Localhost. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
          </p>
          <p className="text-xl primary mr-7 font-bold pt-5">
            Cookies
          </p>
          <p className='mr-7 text-sm pt-4'>
            L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.<br />
            <br />
            Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site Localhost. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.<br />
            <br />
            L’information contenue dans les cookies est utilisée pour améliorer le site Localhost.En naviguant sur le site, L’Utilisateur les accepte.<br />
            L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies. A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.<br />
            <br />
            L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.
          </p>
          <p className="text-xl primary mr-7 font-bold pt-5">
            Droit applicable et juridiction compétente
          </p>
          <p className='mr-7 text-sm pt-4'>
            La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître. Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites dans la section « <span className='font-bold'>Les mentions légales</span> ».
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