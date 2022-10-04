import React from "react";


const Tweet = ({el}) =>{
    const parsedDate = new Date(el.createdAt).toLocaleDateString("ko-kr");  //날짜 변환 함수

    return(
        <li>
            <div className="tweet-wrapper">
                <div className="tweet-img-wrapper">
                    <img src={el.picture}></img>
                </div>
                <div className="tweet-text-wrapper">
                    <h4 className="tweet-username">{el.username}&nbsp;&nbsp;<span>{parsedDate}</span>
                        <div className="tweet-icon-container">
                            <div className="icon-wrapper">
                                <i 
                                className=
                                {el.marked?"fa-solid fa-bookmark":"fa-regular fa-bookmark"}  // 클릭시 아이콘 색깔 변경
                                ></i>
                            </div>
                            <div className="icon-wrapper">
                                <i 
                                className="fa-solid fa-xmark"
                                ></i>
                            </div>   
                        </div>
                    </h4>
                                     
                    <div>{el.content}</div>
                </div>
            </div>
        </li>
    )
}
export default Tweet