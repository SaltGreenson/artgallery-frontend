import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Router } from "next/router";
import useActions from "@/utils/hooks/useActions";
import { useSelector } from "react-redux";
import {
  getIsFetchingApp,
  getIsFetchingSuccessApp,
  getMessage,
} from "@/selectors/userSelectors";
import Notification from "@/components/elements/Notification";
import checkNotifyTypeHelper from "@/utils/helpers/checkNotifyType.helper";

type CustomAppProps = AppProps & {
  router: Router;
};

function AppContainer({ Component, pageProps, router }: CustomAppProps) {
  const { checkAuth, clearModalMessage } = useActions();
  const isFetching = useSelector(getIsFetchingApp);
  const isFetchingSuccess = useSelector(getIsFetchingSuccessApp);
  const message = useSelector(getMessage);

  useEffect(
    () => () => {
      if (localStorage.getItem("token")) {
        checkAuth();
      }
    },
    []
  );

  return (
    <>
      <Component {...pageProps} router={router} />
      {!isFetching && message && (
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
