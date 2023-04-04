import React from "react";
import { Navbar } from ".";

const Main = () => {
    return(
        <div class="main">
            <Navbar />
            <div class ="main_text">
                <h1 id = "name">
                    Alexandra M. Danielson
                </h1>
                <h2>
                    Web Developer
                </h2>
                <h2> 
                    Artist
                </h2>
                <h3 id="design_code">
                    I design and code beautiful things
                </h3>
            </div>
        </div>
    )
}

export default Main