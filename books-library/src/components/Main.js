import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setsearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAHOUR2DamXk60HSdpPoz7J5LFqSmQhH-g')
            .then(res=>setData(res.data.items))
            .catch(err=>(err))
        }
    }
    return(
        <>
           <div className="header">
            <div className="row1">
                <h1>A Room Without Books Is Like <br/> a body without a soul.</h1>
            </div>
            <div className="row2">
                <h2>Find your Book</h2>
                <div className="search">
                     <input type="text" placeholder="Enter Your Book name"
                     value={search} onChange={e=>setsearch(e.target.value)}
                     onKeyPress={searchBook}/>
                     <button><i class="bi bi-search"></i></button>
                </div>
                <img src="./images/bg1.png" alt="library" />
            </div>
           </div>
        <div className="container">
            {
                <Card book1={bookData}/>
            }  
             </div>
        </>
    )
}
export default Main;