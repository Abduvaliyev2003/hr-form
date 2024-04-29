import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import nProgress from "nprogress";
import Router from "next/router";
import { Provider } from "react-redux";
import store from "../store";
import _theme from "../_theme";
import "nprogress/nprogress.css";
import "../styles/global.css";

const progressStart = () => {
    nProgress.start();
};

const progressDone = () => {
    nProgress.done();
    window.scrollTo(0, 0);
};

const progressError = () => {
    nProgress.done();
};

Router.events.on("routeChangeStart", progressStart);
Router.events.on("routeChangeComplete", progressDone);
Router.events.on("routeChangeError", progressError);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ChakraProvider theme={_theme} resetCSS>
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    );
}

export default MyApp;
