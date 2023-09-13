import { Outlet, Navigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../store/atoms";

export const AdminRoutes =() => {
  const [userInfo] = useAtom(userAtom)

  const auth = userInfo.is_admin != "" ? true : false;
  return(
    auth ? <Outlet/> : <Navigate to="/"/>
  )
}