import './Signining.css'
import {Component} from "react";
import {useLocation} from "react-router-dom";

const Signining =()=>{
    const location = useLocation();
    const {result}=location.state||{};

    return (
            <div className="Signining">
                {result.data}
                <div className="SignDiv"><button className="SignButton">开始测试</button></div>
                <div className="SignDiv"><button className="SignButton">添加题目</button></div>
                <div className="SignDiv"><button className="SignButton">查看成绩</button></div>
            </div>
        );
}

export default Signining;