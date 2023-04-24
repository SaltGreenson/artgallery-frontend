import React, { FC, useCallback, useMemo } from "react";
import { useRouter } from "next/router";

function withRouter<T>(Component: FC<T>) {
  return function _(props: T & { href: string }) {
    const router = useRouter();
    const { href } = useMemo(() => props, [props]);

    const handleOnClick = useCallback(
      () => async () => {
        await router.push(href);
      },
      [router, href]
    );

    return <Component {...(props as T)} onClick={handleOnClick()} />;
  };
}

export default withRouter;
