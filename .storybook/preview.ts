import "../src/styles/globals.css";
import * as NextImage from "next/image";
import { RouterContext } from "next/dist/shared/lib/router-context";

const OriginalNextImage = NextImage.default;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
