import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme, GlobalStyles } from "../theme/theme";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = useState(false);
	const darkmode = useDarkMode(true);
	const theme = darkmode.value ? darkTheme : lightTheme;

	// don't flicker on SSR
	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<button onClick={darkmode.toggle}>Switch Mode</button>
			<button onClick={darkmode.enable}>Dark Mode</button>
			<button onClick={darkmode.disable}>Light Mode</button>
			{isMounted && <Component {...pageProps} />}
		</ThemeProvider>
	);
}
