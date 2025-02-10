import React from "react";
import { Link } from "react-router-dom";
import payskul from '../assets/LogoTopTab.png';


const Logo = () => {

    return(
        <div>
            <Link to="/">
                      <img src={payskul} alt="Payskul Logo" className="logo" />
                    </Link>
        </div>
    )
}


export default Logo;