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
    spacing: {
      spacing1: string;
      spacing2: string;
      spacing3: string;
      spacing4: string;
      spacing5: string;
      spacing6: string;
      spacing7: string;
      spacing8: string;
      spacing9: string;
    };
    fontSize: {
      title1: string;
      title2: string;
      body1: string;
      body2: string;
      body3: string;
      body4: string;
    };
    fontWeight: {
      bold: number;
      extraBold: number;
    };
  }
}
