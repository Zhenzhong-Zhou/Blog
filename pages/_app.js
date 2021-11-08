import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

const MyApp = ({Component, pageProps}) => {
  return <Component {...pageProps}/>
};

export default MyApp;