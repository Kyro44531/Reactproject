import logo from "./logo.svg";
import {Link} from "react-router-dom";
import MyComponent from "./MyComponent";
import {useState} from "react";

function Tempo(){

    const [showFirstButton, setShowFirstButton] = useState(true);
    const [showNewButtons, setShowNewButtons] = useState(false);
    const [text, setText] = useState("Nothing");
    const [fontSize, setFontSize] = useState(16);

    // ��ť����¼�������
    const handleFirstButtonClick = () => {
        setShowFirstButton(false);
        setShowNewButtons(true);
        setText("���ı�");
        setFontSize(24);
    };

    return (
        <div className="App">
        <div className="Origin">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                    Oh My Gosh
                    <div className = "yuanshen">ԭ��֮��</div>
                </p>
            </header>
        </div>
        <div className="PushButtom">
            {/* ��̬�ı� */}
            <p style={{ fontSize: `${fontSize}px` }}>{text}</p>

            {/* ��һ����ť */}
            {showFirstButton && <button onClick={handleFirstButtonClick}>�����</button>}

            {/* �µ�������ť */}
            {showNewButtons && (
                <div>
                    <button>��ť1</button>
                    <button>��ť2</button>
                    <button><Link to= '/FirstFrame'>��ť3</Link></button>
                </div>
            )}
        </div>
        <div className="SendPOST">
            <MyComponent id ="btn"/>
        </div>
    </div>);
}

export  default Tempo();