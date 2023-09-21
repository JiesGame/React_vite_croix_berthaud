import { useState, useEffect } from "react";
import { familyMembersAndActivitiesFetch } from "../services/axiosUser";
import { useAtom } from "jotai";
import { userAtom } from "../store/atoms";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [user] = useAtom(userAtom);

  useEffect(() => {
    familyMembersAndActivitiesFetch(user.id, setFamilyMembers);
  }, []);

  return (
    <div>
      <h1 className="md:text-4xl text-2xl dark font-semibold flex justify-center text-center pt-10 w-full">
        Profil de {user.email}
      </h1>
      <div className="flex items-center justify-center my-2">
        <div className="w-[30rem] h-fit">
          <div className="bg-white shadow-lg rounded h-full">
            <div className="mt-8 light-gray-border border-[1px] rounded-lg">
              <h2 className="flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-semibold">
                {familyMembers.length > 1 ? "Mes Inscriptions" : "Mon Inscription"}
              </h2>
              <div className="flex justify-between border-b border-t-0 border-[1px] light-gray-border">
                <p className="flex pl-4 py-2 dark font-bold text-center w-full justify-center border-r">
                  Membres
                </p>
                <p className="flex justify-center pr-4 py-2 dark font-bold text-center light-gray-border border[1px] w-full">
                  Activités
                </p>
              </div>
              {familyMembers &&
                familyMembers.map((familyMember, index) => (
                  <div
                    key={index}
                    className="flex justify-between dark font-medium light-gray-border border-[1px]">
                    <p className="flex justify-center w-full border-r items-center p-4">
                      {familyMember.firstname} {familyMember.lastname}
                    </p>
                    <div className="flex flex-col items-center w-full justify-center p-4">
                      {familyMember.activities &&
                        familyMember.activities.map((activity, index) => (
                          <p key={index}>{activity.name}</p>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Link className="button primary-bg text-white font-bold py-2 px-4 w-fit rounded focus:outline-none focus:shadow-outline cursor-pointer" to="/change_profile" data-te-dropdown-item-ref>
              Editer mon profil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
