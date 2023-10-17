import React from "react";
import Header from "./Components/Header"
import Main from "./Components/Main"
import Boost from "./Components/Boost";
import Footer from "./Components/Footer";
import Middle from "./Components/Middle";



const UrlShortening = () => {
    return (
        <div>
            <Header />
            <Main />
            <Middle />
            <Boost />
            <Footer />
        </div>
    )
}
export default UrlShortening;