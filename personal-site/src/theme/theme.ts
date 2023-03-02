import { createGlobalStyle} from "styled-components"

// .theme {
//     color: orangered;
//     background-color: #1e2328;
//   }

type AppTheme = {
    color: string,
    backgroundColor: string
}

export const lightTheme : AppTheme = {
    color: '#1e2328',
    backgroundColor: 'orangered'
}

export const darkTheme : AppTheme = {
 color: 'orangered',
 backgroundColor: '#1e2328'
}

export const GlobalStyles = createGlobalStyle<{theme: AppTheme}>`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    font-family: system-ui, sans-serif;
    transition: all 0.50s linear;
  }

  p {
    line-height: 1.5;
  }
`