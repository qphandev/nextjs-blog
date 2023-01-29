/**
 * Loading Global CSS
 * Similar to Layout, this wraps all of the pages in your application
 * You can use this component to keep "state" when navigating pages (kinda like a context store?)
 * Whenever you add this page, you gotta restart the server
 */
import "../styles/global.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}