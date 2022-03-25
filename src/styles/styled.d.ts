import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      danger: {
        main: string;
      };
      gray: {
        dark: string;
        light: string;
      };
      black: string;
      white: string;
      background: string;
    };
  }
}
