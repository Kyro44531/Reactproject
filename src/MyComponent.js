import React, { useState } from 'react';
import axios from "axios";

function MyComponent() {
    const [userId, setUserId] = useState("1"); // 示例userid
    const [passWrd, setPassWrd] = useState("zmjxx2003121"); // 示例userid
    const [text,setText] = useState("Nothing");

    const sendPostRequest = async () => {
        try {
            const response = await fetch('http://localhost:8080/hello', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                        userid: userId, // 发送userid
                        passwrd:passWrd
                })
            });
            const result = await  response.json();
            setText(result.data);


        } catch (error) {
            console.error('Error:', error);
            setText(error.error);
        }
    };

    return (
        <div>
            <p >{text}</p>
            <button onClick={sendPostRequest} className="Btn">发送POST请求</button>
        </div>
    );
}

export default MyComponent;
