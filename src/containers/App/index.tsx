import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Router } from "next/router";
import useActions from "@/utils/hooks/useActions";
import { useSelector } from "react-redux";
import {
  getAuthUser,
  getIsFetchingSuccessApp,
  getMessage,
} from "@/selectors/userSelectors";
import Notification from "@/components/elements/Notification";
import checkNotifyTypeHelper from "@/utils/helpers/checkNotifyType.helper";
import { getFromStorage } from "@/utils/helpers/localStorage.helper";
import MainLayout from "@/components/layouts/Main";

type CustomAppProps = AppProps & {
  router: Router;
};

function AppContainer({ Component, pageProps, router }: CustomAppProps) {
  const { checkAuth, clearModalMessage } = useActions();
  const isFetchingSuccess = useSelector(getIsFetchingSuccessApp);
  const message = useSelector(getMessage);
  const authUser = useSelector(getAuthUser);

  useEffect(
    () => () => {
      if (getFromStorage("token")) {
        checkAuth();
      }
    },
    []
  );

  return (
    <>
      <MainLayout authUser={authUser}>
        <Component {...pageProps} router={router} />
      </MainLayout>
      {message && (
        <Notification
          variant={checkNotifyTypeHelper(isFetchingSuccess)}
          message={message}
          clearMessage={clearModalMessage}
        />
      )}
    </>
  );
}

export default AppContainer;
