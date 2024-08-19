import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import MyComponent from "./MyComponent";

function App() {
  const [showFirstButton, setShowFirstButton] = useState(true);
  const [showNewButtons, setShowNewButtons] = useState(false);
  const [text, setText] = useState("初始文本");
  const [fontSize, setFontSize] = useState(16);

  // 按钮点击事件处理函数
  const handleFirstButtonClick = () => {
    setShowFirstButton(false);
    setShowNewButtons(true);
    setText("新文本");
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
            <div className = "yuanshen">原神之家</div>
          </p>
        </header>
      </div>
      <div className="PushButtom">
        {/* 动态文本 */}
        <p style={{ fontSize: `${fontSize}px` }}>{text}</p>

        {/* 第一个按钮 */}
        {showFirstButton && <button onClick={handleFirstButtonClick}>点击我</button>}

        {/* 新的三个按钮 */}
        {showNewButtons && (
            <div>
              <button>按钮1</button>
              <button>按钮2</button>
              <button>按钮3</button>
            </div>
        )}
      </div>
        <div className="SendPOST">
          <MyComponent id ="btn"/>
        </div>
        </div>
  );
}

export default App;
