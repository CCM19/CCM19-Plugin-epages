import {BrowserRouter, Route,} from "react-router-dom";
import {QueryProvider} from "./components/index.js";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n.js";
import Routes from "./Routes";

export default function App(){

    const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");


    return (
        <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                        <QueryProvider>
                                <Routes pages={pages}/>
                        </QueryProvider>
                </BrowserRouter>
        </I18nextProvider>
    );
}