import React from "react"; 
import '../(styles)/Skillset.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Skillset() {

    return(
       <div className="skillset__container">
            <hr className="skillset__border"/>
                <FontAwesomeIcon icon="fa-brands fa-" />
            <hr className="skillset__border"/>
       </div>
    );
}