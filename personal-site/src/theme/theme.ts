import { createGlobalStyle } from "styled-components";

// .theme {
//     color: orangered;
//     background-color: #1e2328;
//   }

type AppTheme = {
	color: string;
	backgroundColor: string;
	fontFamily: string;
};

const ThemeBase = {
	fontFamily: "roboto",
};

export const lightTheme: AppTheme = {
	...ThemeBase,
	color: "#1e2328",
	backgroundColor: "orangered",
};

export const darkTheme: AppTheme = {
	...ThemeBase,
	color: "orangered",
	backgroundColor: "#1e2328",
};

export const GlobalStyles = createGlobalStyle<{ theme: AppTheme }>`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    font-family: ${({ theme }) => theme.fontFamily};
    transition: color 0.50s linear, background 0.5s linear;
  }

  p {
    line-height: 1.5;
  }
`;
