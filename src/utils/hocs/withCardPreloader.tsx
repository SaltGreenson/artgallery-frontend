import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import Router from "next/router";
import Preloader from "@/components/common/Preloader";
import GalleryViewLayout from "@/components/layouts/Gallery";
import { FlexBlock } from "@/components/common/Block";

function withCardPreloader<T>(Component: FC<T>) {
  return function _(props: T) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const startLoading = () => setLoading(true);
      const stopLoading = () => setLoading(false);

      Router.events.on("routeChangeStart", startLoading);
      Router.events.on("routeChangeComplete", stopLoading);
      Router.events.on("routeChangeError", stopLoading);

      return () => {
        Router.events.off("routeChangeStart", startLoading);
        Router.events.off("routeChangeComplete", stopLoading);
        Router.events.off("routeChangeError", stopLoading);
      };
    }, []);

    return loading ? (
      <GalleryViewLayout title="&nbsp;">
        <FlexBlock padding="55px 0 0 0" direction="column" gap="20px">
          <Preloader variant="card" />
          <Preloader variant="card" />
        </FlexBlock>
      </GalleryViewLayout>
    ) : (
      <Component {...(props as unknown as PropsWithChildren<T>)} />
    );
  };
}

export default withCardPreloader;
