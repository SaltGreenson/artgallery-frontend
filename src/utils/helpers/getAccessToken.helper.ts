import { NextPageContext } from "next";
import { parseCookies } from "nookies";

export const getAccessTokenHelper = (context: NextPageContext) => {
  const cookies = parseCookies(context);
  return cookies.accessToken;
};
