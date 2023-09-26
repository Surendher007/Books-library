import React from "react";
const Card = ({ bookData }) => {
    console.log(bookData)
    return (
        <>
               <div className = "card" >
            <img src="./images/bg6.png" alt="bg4" />
            <div className="bottom">
                <h3 className="title">React Js</h3>
                <p className="amount">&#8377; 3290</p>
            </div>
        </div>
        
        </>
    )
}
export default Card;