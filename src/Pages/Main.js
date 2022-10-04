import React, { useState } from "react";
import uuid from "react-uuid";
import Tweet from "../Components/Tweet"

const Main = ({user}) =>{

    return(
        <main>
                <div className="main-container__header">
                    <h4>Home</h4>
                </div>
                <div className="tweet-textarea">
                    <img src={user.picture}></img>
                    <div className="tweet-input-container">
                        <textarea placeholder="What's happening?"></textarea>
                        <button>Tweet</button>
                    </div>
                </div>
                <ul className="tweet-container">
                {
                    /*
                    <Tweet/> 반환
                    */ 
                }
                </ul>
                
        </main>
    )
}

export default Main