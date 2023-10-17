import React from "react";

const Middle = () => {
    return (
        <section className="middle">
            <div className="box middle__text">

                <div>
                    <h1 className="middle__h2">Advanced Statistics</h1>
                    <p className="middle__p">Track how your links are performing across the web with our advanced statistics dashboard. </p>
                </div>
              
                <div className="middle__flex flex-row">
                    <div className="middle__col middle__brand">
                        <h5 className="middle__h5">
                            Brand Recognition
                        </h5>
                        <p className="middle__flex--p">
                            Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                        </p>
                        <div className="middle--icon--div">
                            <img src="../../images/icon-brand-recognition.svg" alt="brand" className="middle__icon"/>
                        </div>
                    </div>
                    <div className="middle__col middle__detail">
                        <h5 className="middle__h5">
                            Detailed Records
                        </h5>
                        <p className="middle__flex--p">
                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                        <div className="middle--icon--div">
                            <img src="../../images/icon-detailed-records.svg" alt="brand" className="middle__icon"/>
                        </div>
                    </div>
                    <div className="middle__col middle__fully">
                        <h5 className="middle__h5">
                                Fully Customizable
                        </h5>
                        <p className="middle__flex--p">
                            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                        </p>
                        <div className="middle--icon--div">
                            <img src="../../images/icon-fully-customizable.svg" alt="brand" className="middle__icon"/>
                        </div>
                    </div>
                </div>
                <div className="middle__form">
                    <input type="text" placeholder="URL" className="middle__input"/>
                    <button className="middle__btn">Shorten it</button>
                </div>
            </div>
        </section>
    )
}
export default Middle;