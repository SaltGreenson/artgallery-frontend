import { NextPageContext } from "next";
import { destroyCookie } from "nookies";

export const serverSideAxiosErrorHandler = (
  error: any,
  context: NextPageContext,
  props: object,
  destination = "/log-in"
) => {
  console.log(error);
  if (error.response?.status === 401) {
    destroyCookie(context, "accessToken");
    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...props,
    },
  };
};
