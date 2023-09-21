import { useAtom } from 'jotai';
import { userAtom } from '../store/atoms';
import { useNavigate } from 'react-router-dom';
import { toastInfo, toastError } from '../services/toast';
import { logoutFetch } from '../services/axiosUser'

export const Logout = () => {
  const [userInfo, setUserInfo] = useAtom(userAtom)
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const logoutProfil = await logoutFetch(setUserInfo);
      if(logoutProfil) {
        navigate('/');
        toastInfo('Vous vous êtes déconnectés.');
      }
    } catch(error) {
      toastError ("La déconnexion n'a pas eu lieu.");
    }
  }

  return (
    <button className="px-[4px] md:px-[12px] w-full sm:w-auto py-1 light-bg text-center koulen font-medium hover:bg-[#052130] hover:text-[#0DFDFF]" onClick={logout}>Se deconnecter</button>
  )
};
