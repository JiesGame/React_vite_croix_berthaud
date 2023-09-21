/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { endOfDay, differenceInYears } from 'date-fns';
import { useEffect, useState } from 'react';
import { listActivitiesFetch } from '../services/axiosActivity';

export const Inscription = () => {
  const [member, setMember] = useState('')

  const phoneRegExp = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
  const schema = yup.object().shape({
    firstname: yup.string().required("Le prénom est requis."),
    lastname: yup.string().required("Le nom de famille est requis."),
    birthdate: yup.date().required("La date de naissance est requise.").typeError("La date de naissance est requise."),
    legaltutorfirstname: yup.string().when('birthdate', {
      is: (birthdate) => differenceInYears(endOfDay(new Date()), birthdate) < 18,
      then: () => yup.string().required("Le prénom du tuteur légal est requis lorsque l'âge est inférieur à 18 ans.")
    }),
    legaltutorlastname: yup.string().when('birthdate', {
      is: (birthdate) => differenceInYears(endOfDay(new Date()), birthdate) < 18,
      then: () => yup.string().required("Le nom de famille du tuteur légal est requis lorsque l'âge est inférieur à 18 ans.")
    }),
    phonenumber: yup.string().matches(phoneRegExp, "Le numéro de téléphone n'est pas valide").required("Un numéro de téléphone est requis."),
    homephonenumber: yup.string().test('test-validation', "Le numéro de téléphone n'est pas valide", function(value) {
      if (!value || value.trim() === '') {
        return true;
      }
      return phoneRegExp.test(value);
    }).nullable(),
    adresse: yup.string().required("L'adresse est requise.")
  });
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmitInscription = (data) => {
    setMember(data);
    setInscription(true);
  }

  const [dataActivities, setDataActivities] = useState([]);
  useEffect(() => {
    listActivitiesFetch(setDataActivities)
  },[setDataActivities])
  const onSubmitActivities = (e) => {
    e.preventDefault();
    setCheckedActivitiesTotal(0);
    const sortedActivities = checkedActivities
      .map((activity) => JSON.parse(activity))
      .sort((a,b) => b.price - a.price)
      .map((activity,index) => {
        if (index == 1) {
          activity.price *= 0.9
        } else if (index >= 2) {
          activity.price *= 0.8
        }
        return activity;
      })
  setCheckedActivitiesTotal(sortedActivities.reduce((sum, activity) => sum + activity.price, 0) + 12)
  setCheckedActivities(sortedActivities);
  setSelectActivities(true);
  }
  const [checkedActivities, setCheckedActivities] = useState([]);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const data = dataActivities.find((item) => item.id == value);
    const jsonData = JSON.stringify(data);
    if (checked) {
      setCheckedActivities((prevCheckedActivities) => [...prevCheckedActivities, jsonData]);
    } else {
      setCheckedActivities((prevCheckedActivities) => prevCheckedActivities.filter(activity => activity !== jsonData));
    }
  };
  const [checkedActivitiesTotal, setCheckedActivitiesTotal] = useState(0);
  const [inscription, setInscription] = useState(false);
  const [selectActivities, setSelectActivities] = useState(false);

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form className="bg-white shadow-lg rounded h-full" onSubmit={handleSubmit(onSubmitInscription)}>
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
            Prénom du tuteur légal (si nécessaire)
          </label>
          <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="Prénom du tuteur..." {...register('legaltutorfirstname')} />
          {errors.legaltutorfirstname?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.legaltutorfirstname?.message}</p>}
        </div>
        <div className='px-10 mt-4'>
          <label className="block primary text-xl font-semibold mb-2">
            Nom du tuteur légal (si nécessaire)
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
      <h1>Activités proposées</h1>
       <div>
        <form onSubmit={(e) => onSubmitActivities(e)}>
        {dataActivities && dataActivities.map((data) => (
          <div key={data.name}>
            <input type="checkbox" value={data.id} onChange={handleCheckboxChange}></input>
            <label>{data.name} - {data.price} €</label>
          </div>
        ))}
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>

      {inscription && selectActivities &&
      <div>
        <h1>Récapitulatif</h1>
        <div>
          <p>Voici les activités sélectionnées pour {member.firstname} {member.lastname} :</p>
          {checkedActivities.map((activity, index) => (
            <p key={index}>{activity.name} {activity.price} {index == 1 && "(réduction de 10%)"} {index >= 2 && "(réduction de 20%)"} </p>
          ))}
        </div>
          <p>Soit un total de {checkedActivitiesTotal} €, comprenant les 12 € d'adhésion à l'association.</p>
          
      </div>
      }
    </div>
  )
}
