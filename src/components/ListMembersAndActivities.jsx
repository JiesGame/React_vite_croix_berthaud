import { useState, useEffect } from "react";
import { familyMembersAndActivitiesFetch } from "../services/axiosUser";
import { useAtom } from "jotai";
import { userAtom } from "../store/atoms";

export const ListMembersAndActivities = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [userID] = useAtom(userAtom);

  useEffect(() => {
    familyMembersAndActivitiesFetch(setFamilyMembers);
  }, []);

  return (
    <div>
      <h1>ListMembersAndActivities</h1>
      {familyMembers.map((article) => (
       <p>console.log({article})</p>  
      ))}
    </div>
  )
}
