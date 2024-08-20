import {Component, useState} from "react";
import './FirstFrame.css'
import {Link,useNavigate} from "react-router-dom";

const FirstFrame=()=>{
    const [userId,setUserId] = useState("114514");
    const [passWrd,setPassWrd] = useState("");
    const navigate = useNavigate();
    const status = useState(0);
    const signin = async (e) => {
        e.preventDefault();
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
                navigate('/Signining',{state:{result}})

    } catch (error) {
                console.error('Error:', error);
            }
    }

    function Showit() {
        return status>0?(
            <div>
                资源请求中....
            </div>
        ):(
            <div>
                Welcome!
            </div>
        )
    }

        return(
            <div className="FirstFrame">
                <Showit/>
                <form onSubmit={signin}>
                <div className="FirstCouple">
                    <label className="FirstLabel">用户名</label>
                    <input className="FirstInput" value={userId} defaultValue="珮琦" onChange={(e)=>setUserId(e.target.value)}/>
                </div>

                <div className="FirstCouple">
                    <label className="FirstLabel" id="pswl">密码</label>
                    <input type={"password"} className="FirstInput" id="psw" value={passWrd} onChange={(e)=>setPassWrd(e.target.value)}/>
                </div>

                <div className="FirstCouple">
                        <button type="submit" id="FirstButton">提交</button>
                </div>
                </form>
            </div>
        );
}
export default FirstFrame;