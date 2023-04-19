import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Router } from "next/router";
import useActions from "@/utils/hooks/useActions";
import { useSelector } from "react-redux";
import { getIsFetchingSuccessApp, getMessage } from "@/selectors/userSelectors";
import Notification from "@/components/elements/Notification";
import checkNotifyTypeHelper from "@/utils/helpers/checkNotifyType.helper";
import { getFromStorage } from "@/utils/helpers/localStorage.helper";

type CustomAppProps = AppProps & {
  router: Router;
};

function AppContainer({ Component, pageProps, router }: CustomAppProps) {
  const { checkAuth, clearModalMessage } = useActions();
  const isFetchingSuccess = useSelector(getIsFetchingSuccessApp);
  const message = useSelector(getMessage);

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
      <Component {...pageProps} router={router} />
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
