import React from "react";

const Main = () => {
    return(
        <div className="flex-row hero">
            <div className="hero__left">
                <h1 className="hero__h1">
                    More than Just shorter Links</h1>
                <p className="hero__p">
                  Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <button className="hero__btn">
                   Get Started
                </button>
            </div>
            <div className="hero__right">
               <img src="../../images/illustration-working.svg" alt="hero" className="hero__img"/>
            </div>
        </div>
    )
}
export default Main;