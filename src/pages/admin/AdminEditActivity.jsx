import { useState, useEffect } from "react"
import { showActivityFetch, updateActivityFetch } from "../../services/axiosAdmin";
import { useNavigate, useParams } from "react-router-dom";

export const AdminEditActivity = () => {
  const [dataActivity, setDataActivity] = useState({name:"", price:"", period:"" });
  const { id } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataActivity({
      ...dataActivity,
      [name]: value,
    });
  };
  useEffect(() => {
    showActivityFetch(id, setDataActivity);
  },[id]);

  const onSubmit = async () => {
    const data = JSON.stringify({"activity":dataActivity});
    updateActivityFetch(id, data, navigate);
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
  )
}
