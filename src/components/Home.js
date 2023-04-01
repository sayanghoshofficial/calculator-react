// import useState
import { useState } from "react";
// import style from module styling
import Styles from "../Styles/Home.module.css";
// import cx for concatinates class names
import cx from "classnames";

const Home = () => {
  // create useState constant for input value
  const [input, setInput] = useState("");

  // handled every button on click action
  const haldledButtonOnClick = (value) => {
   if(value === "%"){
    const pert = (input/100);
        setInput(pert);
    }
    else {
      setInput(input + value);
    }
  };
//   clear input box
const allClear = () =>{
    setInput("");
}
  //   use backspace for one by one element remove
  const backSpace = () => {
    setInput(input.slice(0, -1));
  };
  const calculate = () => {
    try {
      
      setInput(eval(input).toString());
    } catch (err) {
      setInput("Error");
      setTimeout(() => {
        setInput("");
      }, 1000);
    }
  };
  //   return function for home elements
  return (
    <div className={Styles.calculatorContainer}>
      <input
        className={Styles.input}
        type="text"
        value={input}
        onChange={(e) => e.target.value}
      />
      <div className={Styles.btnDiv}>
        <button
          onClick={allClear}
          className={Styles.btnAction}
        >
          AC
        </button>
        <button onClick={backSpace} className={Styles.btnAction}>
          C
        </button>
        <button
          onClick={() => haldledButtonOnClick("%")}
          className={Styles.btnAction}
        >
          %
        </button>
        <button
          onClick={() => haldledButtonOnClick("/")}
          className={Styles.btnAction}
        >
          &divide;
        </button>

        <button onClick={() => haldledButtonOnClick(7)}>7</button>
        <button onClick={() => haldledButtonOnClick(8)}>8</button>
        <button onClick={() => haldledButtonOnClick(9)}>9</button>
        <button
          onClick={() => haldledButtonOnClick("*")}
          className={Styles.btnAction}
        >
          x
        </button>

        <button onClick={() => haldledButtonOnClick(4)}>4</button>
        <button onClick={() => haldledButtonOnClick(5)}>5</button>
        <button onClick={() => haldledButtonOnClick(6)}>6</button>
        <button
          onClick={() => haldledButtonOnClick("-")}
          className={Styles.btnAction}
        >
          -
        </button>

        <button onClick={() => haldledButtonOnClick(1)}>1</button>
        <button onClick={() => haldledButtonOnClick(2)}>2</button>
        <button onClick={() => haldledButtonOnClick(3)}>3</button>
        <button
          onClick={() => haldledButtonOnClick("+")}
          className={Styles.btnAction}
        >
          +
        </button>

        <button onClick={() => haldledButtonOnClick(0)}>0</button>
        <button onClick={() => haldledButtonOnClick(".")}>.</button>
        <button
          onClick={calculate}
          className={cx(Styles.btnAction, Styles.btnEqual)}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Home;
