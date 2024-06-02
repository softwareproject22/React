// CookieContext.js
import React, { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';

const CookieContext = createContext();

export const useCookieContext = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['user']);

  const setUserCookie = (userInfo) => {
    setCookie('user', JSON.stringify(userInfo), { path: '/' });
  };

  const getUserCookie = () => {
    //console.log(cookies.user)
    return cookies.user ? cookies.user : null;
  };

  const removeUserCookie =() => {
    setCookie('user', {path: '/', expires: new Date(0)});
  }

  return (
    <CookieContext.Provider value={{ setUserCookie, getUserCookie, removeUserCookie }}>
      {children}
    </CookieContext.Provider>
  );
};