import Theme from "../styles/theme";
// import Head from "next/document";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
