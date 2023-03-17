import { useState } from "react";
import Styles from "../Styles/Home.module.css";

const Home = () => {
  const [input, setInput] = useState();
  return (
    <div className={Styles.calculatorContainer}>
      <input className={Styles.input} type="text" value={input} />
      <br />
      <button>C</button>
      <button>+/-</button>
      <button>%</button>
      <button className={Styles.btnAction}>÷</button>
      <br />
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className={Styles.btnAction}>x</button>
      <br />
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className={Styles.btnAction}>-</button>
      <br />
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className={Styles.btnAction}>+</button>
      <br />
      <button className={Styles.btnZero}>0</button>
      <button>.</button>
      <button className={Styles.btnAction}>=</button>
    </div>
  );
};

export default Home;
