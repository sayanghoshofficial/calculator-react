import { useState } from "react";
import Styles from "../Styles/Home.module.css";
import cx from "classnames";

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState();

  const evaluateExpression = (expression) => {
    if (expression === "+") {
      setResult();
    }
  };
  const haldledButtonOnClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };
  const backSpace = () => {
    setInput(input.slice(0, -1));
  };
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput("Error");
    }
  };
  return (
    <div className={Styles.calculatorContainer}>
      <input
        className={Styles.input}
        type="text"
        value={input}
        onChange={(e) => setResult(e.target.value)}
      />
      <div className={Styles.btnDiv}>
        <button
          onClick={() => haldledButtonOnClick("AC")}
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
