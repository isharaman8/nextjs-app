import "../styles/globals.css";
import Navbar from "./components/Navbar/navbar";

function MyApp({ Component, pageProps }) {
	return (
		<div className="mainDiv">
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
