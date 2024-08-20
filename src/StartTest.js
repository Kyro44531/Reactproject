import {useState} from "react";
import './StartTest.css'

const StartTest =  () =>{
    const [label,setLable]=useState("请自我介绍一下你自己");
    const [cnt,cntPlus] = useState(0);
    function nextQ(){
        if(cnt==0){
            setLable("接下来请回答一下这个英语问题：");
        }else{

        }
        cntPlus(cnt+1);
    }
    return(
        <div className="StartTest">
            <div className="StartDiv1">
                <label id="StartLabel">{label}</label>
            </div>
            <div className="SignDiv">
                <span><button onClick={nextQ} className="StartButton" id="StartleftButton">我会</button></span>
                <span><button className="StartButton">不好意思，这个我不太会</button></span>
            </div>
        </div>
    )
}

export default StartTest;