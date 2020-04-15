import React from "react";

const Header = ()=>{


    const egenskap="main"
    //jsx måste returneras komponent namn och filname? ska börjas med stora bokstav
        return(
     
        <div>
            <div className={egenskap}>
                Hello Boglárka!
    {/*             {true? "hello ": "not welcome"} */}
            </div>
            <h1> Boglárka nem figyel ide</h1>
        </div>
    
        )
    }
    
export default Header;
