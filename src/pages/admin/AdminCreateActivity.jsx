/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom';
import { createActivityFetch } from '../../services/axiosAdmin';
import { useState } from 'react';

export const AdminCreateActivity = () => {
  const [dataActivity, setDataActivity] = useState({name:"",price:"", period:""})
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataActivity({
      ...dataActivity,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({"activity":dataActivity})
    createActivityFetch(data, navigate);
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={dataActivity.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Prix :</label>
        <input
          type="number"
          id="price"
          name="price"
          value={dataActivity.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="period">Période :</label>
        <input
          type="number"
          id="period"
          name="period"
          value={dataActivity.period}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};