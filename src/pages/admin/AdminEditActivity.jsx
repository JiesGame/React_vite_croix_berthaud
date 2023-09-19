import { useState, useEffect } from "react";
import {
  showActivityFetch,
  updateActivityFetch,
} from "../../services/axiosAdmin";
import { useNavigate, useParams } from "react-router-dom";

export const AdminEditActivity = () => {
  const [dataActivity, setDataActivity] = useState({
    name: "",
    price: "",
    period: "",
  });
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
  }, [id]);

  const onSubmit = async () => {
    const data = JSON.stringify({ activity: dataActivity });
    updateActivityFetch(id, data, navigate);
  };

  return (
    <div className="flex items-center justify-center my-14">
      <div className="w-[30rem] h-fit">
        <form className="bg-white shadow-lg rounded h-full" onSubmit={onSubmit}>
          <div className="mt-8">
            <h1 className="flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-semibold">
              Edition de l'activité
            </h1>
            <div className="px-10 mt-4">
              <label
                className="block primary text-xl font-semibold mb-2"
                htmlFor="name">
                Nom :
              </label>
              <input
                className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium dark"
                type="text"
                id="name"
                name="name"
                value={dataActivity.name}
                onChange={handleChange}
              />
            </div>
            <div className="px-10 mt-4">
              <label
                className="block primary text-xl font-semibold mb-2"
                htmlFor="price">
                Prix :
              </label>
              <input
                className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium dark"
                type="number"
                id="price"
                name="price"
                min="0"
                value={dataActivity.price}
                onChange={handleChange}
              />
            </div>
            <div className="px-10 mt-4">
              <label
                className="block primary text-xl font-semibold mb-2"
                htmlFor="period">
                Période :
              </label>
              <input
                className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium dark"
                type="number"
                id="period"
                name="period"
                min="2023"
                value={dataActivity.period}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="button primary-bg text-white font-bold py-2 px-4 w-32 rounded focus:outline-none focus:shadow-outline cursor-pointer mb-10"
                type="submit">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
