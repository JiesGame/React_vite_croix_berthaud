/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { endOfDay, format, differenceInYears } from 'date-fns';
import frLocale from 'date-fns/locale/fr';

export const Inscription = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const schema = yup.object().shape({
    firstname: yup.string().required("Le prénom est requis."),
    lastname: yup.string().required("Le nom de famille est requis."),
    birthdate: yup.date().required("La date de naissance est requise."),
    legaltutorfirstname: yup.string(),
    legaltutorlastname: yup.string(),
    phonenumber: yup.string().matches(phoneRegExp, "Le numéro de téléphone n'est pas valide").required("Un numéro de téléphone est requis."),
    homephonenumber: yup.string().matches(phoneRegExp, "Le numéro de téléphone n'est pas valide"),
    adresse: yup.string().required("L'adresse est requise.")
  });
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {
    console.log(data.birthdate)
    if (data.birthdate) {
      const today = format(endOfDay(new Date()), "dd MMMM yyyy", { locale: frLocale });
      const birth = format(new Date(data.birthdate), "dd MMMM yyyy", { locale: frLocale });
      console.log(today, birth)
      const age = differenceInYears(endOfDay(new Date()), data.birthdate)
      console.log(age)
    }
  }


  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form className="bg-white shadow-lg rounded h-full" onSubmit={handleSubmit(onSubmit)}>
        <div className='px-10 mt-4'>
          <label className="block primary text-xl font-semibold mb-2">
            Prénom
          </label>
          <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="Prénom..." {...register('firstname')} />
          {errors.firstname?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.firstname?.message}</p>}
        </div>
        <div className='px-10 mt-4'>
          <label className="block primary text-xl font-semibold mb-2">
            Nom de famille
          </label>
          <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="Nom..." {...register('lastname')} />
          {errors.lastname?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.lastname?.message}</p>}
        </div>
        <div className='px-10 mt-4'>
          <label className="block primary text-xl font-semibold mb-2">
            Date de naissance
          </label>
          <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="date" placeholder="Date de naissance..." {...register('birthdate')} />
          {errors.birthdate?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.birthdate?.message}</p>}
        </div>
        <div className='px-10 mt-4'>
          <label className="block primary text-xl font-semibold mb-2">
            Prénom du tuteur légal
          </label>
          <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="Prénom du tuteur..." {...register('legaltutorfirstname')} />
          {errors.legaltutorfirstname?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.legaltutorfirstname?.message}</p>}
        </div>
        <div className='px-10 mt-4'>
          <label className="block primary text-xl font-semibold mb-2">
            Nom du tuteur légal
          </label>
          <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="Nom du tuteur..." {...register('legaltutorlastname')} />
          {errors.legaltutorlastname?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.legaltutorlastname?.message}</p>}
        </div>
        <div className='px-10 mt-4'>
          <label className="block primary text-xl font-semibold mb-2">
            Téléphone mobile
          </label>
          <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="Téléphone mobile..." {...register('phonenumber')} />
          {errors.phonenumber?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.phonenumber?.message}</p>}
        </div>
        <div className='px-10 mt-4'>
          <label className="block primary text-xl font-semibold mb-2">
            Téléphone fixe
          </label>
          <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="Téléphone fixe..." {...register('homephonenumber')} />
          {errors.homephonenumber?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.homephonenumber?.message}</p>}
        </div>
        <div className='px-10 mt-4'>
          <label className="block primary text-xl font-semibold mb-2">
            Adresse
          </label>
          <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="Adresse..." {...register('adresse')} />
          {errors.adresse?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.adresse?.message}</p>}
        </div>
        <div className="flex justify-around items-center mb-8 mt-8">
          <input type="submit" className="cursor-pointer primary-bg button text-white font-bold py-2 px-4 w-32 rounded focus:outline-none focus:shadow-outline" value="Connexion"/>
        </div>
      </form>
    </div>
  )
}
