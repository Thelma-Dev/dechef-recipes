import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <div className="container flexbox">
                <div className="title"><h1>D&#233;CHEF</h1></div>
                <nav>
                    <ul>
                        <li><Link to= "/">About Us</Link></li>
                        <li><Link to= "/">Catalog</Link></li>
                        <li><Link to= "/">Contact Us</Link></li>
                        <li><Link to= "/">Subscribe</Link></li>
                    </ul>
                </nav>
                <div className="hamburger-menu">
                    <input id="menu-toggle" type="checkbox" />
                    <label className="menu-btn" htmlFor="menu-toggle">
                        <span></span>
                    </label>
                </div>
            </div>
        </header>
    );

}


export default Header;