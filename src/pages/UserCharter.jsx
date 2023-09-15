/* eslint-disable react/no-unescaped-entities */
import '../App.css';
import { saveAs } from 'file-saver';
import lcbCGU from "../assets/public/CGU-LaCroixBerthaud.pdf"

export const UserCharter = () => {
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
            <h1 className="text-white text-3xl mt-2">Règlement intérieur</h1>
        </div>
        <p className="py-4 ml-8 text-sm	">
          Adopté par l’assemblée générale du 13 mai 2011
        </p>
        <p className="py-4 mx-8 text-sm	">Le présent règlement intérieur est établi conformément à l’article 13 des statuts de l’association. Après adoption en assemblée générale ordinaire, il s’impose à tous les membres de l’association sans exception.</p>
        </div>
        <hr className="light-gray-border border-[1px] mx-[3%]"/>
        <div className='ml-7'>
          <p className="primary text-xl font-medium py-4">
            1/ Adhésion à l’association
          </p>
          <p className='mr-7'>
            L’adhésion est annuelle. Elle est valable du 1er septembre au 31 août. Elle est obligatoire pour accéder aux activités adultes (sauf dans le cas de la première séance d’essai à l’activité). La carte d’adhésion est familiale. Ne sont rattachés à cette carte que les enfants mineurs et les enfants majeurs étudiants (sur présentation d’un justificatif). Si un enfant majeur non étudiant veut participer à une activité, il devra adhérer à titre individuel. Si une personne adhère après l’Assemblée Générale annuelle, sa carte d’adhésion sera aussi valable l’année scolaire suivante.
          </p>
          <p className="primary text-xl font-medium py-4">
            2/ Tarifs des activités
          </p>
          <p className='mr-7'>
            Les tarifs annuels des activités sont déterminés par le conseil d’administration. Il en va de même pour des activités nouvelles mises en place en cours d’année. Le conseil peut établir aussi un dispositif de réduction ou de modulation tarifaire, par exemple en cas de participation d’un adhérent à plusieurs activités, ou pour fidéliser les adhérents. Les inscriptions à une activité se font à l’année. Toutefois, les personnes qui désirent payer en 3 fois doivent remettre 3 chèques au moment de l’inscription. Le second chèque sera retiré en janvier et le troisième en avril. En cas d’inscription en cours d’année à une activité, le trésorier détermine le coût restant à régler à partir des tarifs déterminés par le conseil d’administration. Toute inscription est définitive et ne peut donner lieu à remboursement, sauf en cas de raison de santé justifiée par un certificat médical attestant de l’impossibilité de poursuivre l’activité jusqu’en fin d’année scolaire, ceci à partir d’une interruption d’au moins quatre séances consécutives.
          </p>
          <p className="primary text-xl font-medium py-4">
            3/ Participation aux activités
          </p>
          <p className='mr-7'>
            Pour les activités payantes adultes, la participation nécessite de compléter la fiche d’adhésion, et de régler le coût de l’activité. Toutefois, les personnes qui le souhaitent peuvent effectuer une séance d’essai à une activité qu’elles n’ont pas fréquentée l’année précédente. Si ces personnes ne s’inscrivent pas au terme de cette séance, rien ne leur sera facturé. Si elles souhaitent s’inscrire, la séance d’essai sera comptée dans le coût de la participation annuelle. Un nombre maximum de participants est fixé pour chaque activité, une fois ce nombre atteint, plus aucune inscription n’est prise.
          </p>
          <p className="primary text-xl font-medium py-4">
            4/ Inscriptions
          </p>
          <p className='mr-7'>
            Il ne sera effectué aucune inscription en dehors des permanences, sauf inscription en cours d’année selon les modalités fixées par le conseil d’administration. Aucune inscription incomplète ne sera acceptée (fiche manquante, règlement non effectué). En cas de participation d’un comité d’entreprise ou d’un organisme social, la prise en charge écrite devra être remise dès l’inscription. Dans le cas où l’adhérent ne peut remettre un document de prise en charge de l’organisme, il réglera la totalité de son inscription annuelle, et il sera remboursé par l’association quand celle-ci aura reçu la participation de l’organisme. Sur sa demande, la Maison de Quartier remet à l’adhérent une attestation d’inscription pour lui permettre d’être remboursé par un organisme tiers.
          </p>
          <p className="primary text-xl font-medium py-4">
            5/ Calendrier des activités, modification des cours
          </p>
          <p className='mr-7'>
            Le conseil d’administration établit chaque année le calendrier prévisionnel des cours, à partir duquel les tarifs sont calculés. Ce calendrier est remis à chaque adhérent au moment de l’inscription, ou sur sa demande. Une raison de force majeure (locaux inaccessibles, animateur malade, utilisation des lieux par la ville, etc.) peut conduire à annuler un cours. Dans ce cas, en lien avec l’animateur du cours, une date est fixée pour rattraper ce cours. Si en fin d’année scolaire un cours n’a pu être rattrapé ou effectué du fait de l’association, il ne donne pas lieu à remboursement. A partir de deux cours annulés à l’initiative de l’association, un remboursement est effectué sur demande de l’adhérent. Ceci se fait soit par déduction de la somme correspondante lors des inscriptions de l’année suivante, soit par remboursement en chèque. Une absence à l’initiative d’un adhérent n’est jamais remboursée sauf raison médicale (voir article 2).
          </p>
          <p className="primary text-xl font-medium py-4">
            6/ Fonds de solidarité
          </p>
          <p className='mr-7'>
            Un fonds de solidarité permet qu’un adhérent ou futur adhérent en grande difficulté sociale et économique, puisse bénéficier d’une prise en charge partielle du coût d’une activité. Cette participation ne portera pas sur la cotisation, et est limitée à un plafond précisé par le conseil d’administration. Un comité de trois membres du conseil d’administration est chargé d’étudier, en toute confidentialité les demandes, et de prendre souverainement sa décision.
          </p>
          <p className="primary text-xl font-medium py-4">
            7/ Règles de vie
          </p>
          <p className='mr-7'>
            Les adhérents, en toutes circonstances, s’obligent au respect des personnes et des biens. Cela implique d’abord d’assurer la sécurité des locaux (fermeture des portes et des volets), leur remise en ordre après utilisation, et de veiller à éteindre les lampes au moment du départ. Il est demandé de ne pas faire de bruit à l’extérieur de la salle, et de ne pas perturber le voisinage.
            D’autre part les comportements ou propos vexatoires, les insultes, actes de violence ou d’incivilité, propos discriminatoires, ne sont pas tolérés, et peuvent aller jusqu’à une exclusion prononcée par le conseil d’administration, en vertu de l’article 6 des statuts.
            Il est demandé aux adhérents de respecter les horaires de début et de fin d’activité.
          </p>
          <p className="primary text-xl font-medium py-4">
            8/ Accompagnement scolaire
          </p>
          <p className='mr-7'>
            Pour participer à l’accompagnement scolaire, outre l’adhésion annuelle à l’association, il est nécessaire que la famille et l’enfant signent avec le responsable de l’activité, un contrat éducatif portant sur le mode de fonctionnement de l’accompagnement scolaire, et sur les obligations des parties.
          </p>
          <p className="primary text-xl font-medium py-4">
            9/ Gymnastique volontaire
          </p>
          <p className='mr-7'>
            Pour la gymnastique un certificat médical de non contre-indication à la pratique sportive devra être fourni à l’intervenante avant la fin du mois d’octobre. En cas d’inscription en cours d’année, le certificat doit être remis sous un délai maximum de 3 semaines après le 1er cours.
          </p>
          <p className="primary text-xl font-medium py-4">
            10/ Conseil d’administration
          </p>
          <p className='mr-7'>
            Les convocations au conseil d’administration et les comptes-rendus peuvent être adressés par mèl. Les convocations sont envoyées au moins 5 jours avant la réunion.
            Conformément à l’article 12 des statuts, les administrateurs peuvent exposer des frais qu’ils ont avancés pour remplir leur mission (exemple : timbres, déplacements pour aller chercher du matériel, cartouche d’imprimante pour la gestion administrative ...). Ces frais peuvent leur être remboursés sur justificatif, ou selon leur choix, faire l’objet en cas de non remboursement de la remise d’un justificatif de don utilisable lors de la déclaration d’impôts.
          </p>
          <p className="primary text-xl font-medium py-4">
            11/ Contact et informations
          </p>
          <p className='mr-7'>
            Pour tous renseignements sur une activité, demander avant ou après les cours, afin de ne pas perturber l’activité. Sinon il est possible de prendre rendez-vous avec un des membres du conseil d’administration. Soit par téléphone au 07 82 60 57 87, par mèl ( contact@la-croix-berthaud.fr ) ou en déposant un mot dans la boite aux lettres de la Maison de Quartier.
          </p>
        </div>
        <div className="flex justify-between primary-bg text-white rounded-b py-3 mt-7">
          <div className="ml-7">Télécharger le règlement intérieur :<a onClick={handleDownload} className='cursor-pointer light download text-lg font-bold ml-1'>Règlement intérieur de la Maison de Quartier au format PDF</a></div>
        </div>
        </div>
      </div>
    </article>
  );
};