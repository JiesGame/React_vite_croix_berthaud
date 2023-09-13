import { atom } from 'jotai';
import Cookies from 'js-cookie';

const userInfoCookie = Cookies.get('userInfo') === undefined ? false : true;
const parsedID = userInfoCookie ? JSON.parse(Cookies.get('userInfo')).id : "";
const parsedEmail = userInfoCookie ? JSON.parse(Cookies.get('userInfo')).email : "";
const parsedAdmin = userInfoCookie ? JSON.parse(Cookies.get('userInfo')).is_admin : "";


export const userAtom = atom({
  id: parsedID,
  email: parsedEmail,
  token: Cookies.get('token') || "",
  is_admin: parsedAdmin
});