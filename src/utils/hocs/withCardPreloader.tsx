import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import Router from "next/router";
import Preloader from "@/components/common/Preloader";
import GalleryViewLayout from "@/components/layouts/Gallery";

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
      <GalleryViewLayout title="Gallery">
        <Preloader variant="card" />
      </GalleryViewLayout>
    ) : (
      <Component {...(props as unknown as PropsWithChildren<T>)} />
    );
  };
}

export default withCardPreloader;
