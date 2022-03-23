import React from "react";
import Footer from "../Footer/Footer";
import Classess from "./Classes";
import './classes.css';
function FinalClassess (){
    return (
        <>
            <div className="FinalClassess">
                <div className="Container">
                    <h1>CLASSES</h1>
                </div>
            </div>
            <Classess />
            <Footer />
        </>
    )
}
export default FinalClassess;