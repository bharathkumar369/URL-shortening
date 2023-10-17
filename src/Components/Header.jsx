import React from   "react"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState (false);

    const handleToggle = () => {
        setIsMenuOpen(prevOpen => !prevOpen)
    }
    return (
        <header className="box">
            <div className="flex-row align hamburger--div">
                <div>
                    <img src="../../images/logo.svg" alt="logo" className="logo"/>
                </div>
                <div className="header--hamburger">
                    
                    <div onClick={handleToggle}>
                        <img src="../../images/three-horizontal-lines-icon.svg" alt="hamburger-menu" className="hamburger-menu"/>
                    </div>
                    {isMenuOpen && (
                        <ul className="hamburger--ul">
                            <li className="hamburger__item "> Features</li>
                            <li className="hamburger__item">Pricing</li>
                            <li className="hamburger__item">Resources</li>  
                            <li className="hamburger__item">Login</li>
                            <button className="hamburger__item nav__btn">Sign Up</button>              
                        </ul>
                )}
                
            </div>
                <nav className="nav">
                    <ul className="nav--ul ul--left">
                        <li className="nav__item"> Features</li>
                        <li className="nav__item">Pricing</li>
                        <li className="nav__item">Resources</li>                
                    </ul>
                    <ul className="nav--ul align">
                        <li className="nav__item">Login</li>
                        <button className="nav__item nav__btn">Sign Up</button>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
}
export default Header;