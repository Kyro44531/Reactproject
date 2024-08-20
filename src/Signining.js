import './Signining.css'
import {Component} from "react";
import {Link, useLocation} from "react-router-dom";

const Signining =()=>{
    const location = useLocation();
    const {result}=location.state||{};

    return (
            <div className="Signining">
                {result.data}
                <div className="SignDiv"><Link to ="/StartTest"><button className="SignButton">开始测试</button></Link></div>
                <div className="SignDiv"><Link to= "/StartTest"><button className="SignButton">添加题目</button></Link></div>
                <div className="SignDiv"><Link to ="/StartTest"><button className="SignButton">查看成绩</button></Link></div>
            </div>
        );
}

export default Signining;