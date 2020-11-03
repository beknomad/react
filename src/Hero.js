import React, {Component} from "react";
//import App from "./App";
//import Note from "./Note/Note";

const Hero = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
    <h2>Амжилттай нэвтэрлээ</h2>
                <button onClick={handleLogout}>Гарах</button>
            </nav>
         
    
        </section>
    );
    
        
    
};


export default Hero;