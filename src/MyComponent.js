import React, { useState } from 'react';
import axios from "axios";

function MyComponent() {
    const [userId, setUserId] = useState("1"); // ʾ��userid
    const [passWrd, setPassWrd] = useState("zmjxx2003121"); // ʾ��userid
    const [text,setText] = useState("Nothing");

    const sendPostRequest = async () => {
        try {
            const response = await fetch('http://localhost:8080/hello', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                        userid: userId, // ����userid
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
            <button onClick={sendPostRequest} className="Btn">����POST����</button>
        </div>
    );
}

export default MyComponent;
