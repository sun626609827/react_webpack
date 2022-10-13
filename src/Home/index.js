import React, { useCallback, useEffect, useState } from "react";
import {Link } from "react-router-dom";
export default function Home(props) {
  const [flag, setFlag] = useState(true);
  const [show, setShow] = useState(false);
  const getCallback = (val) => {
    // console.log(React);
    React.$navigate('/bizCharts');
    setFlag(!flag);
    console.log(flag);
  };
  const memoizedCallback = useCallback(
    (a, b, c) => {
      getCallback(flag);
      console.log(flag);
    },
    [flag]
  );
  return (
    <div>
      <div>
        <a href="">构建react</a>
        <Link to={"/about"}>关于我们</Link>
        <button onClick={memoizedCallback}>hook callback</button>
      </div>
    </div>
  );
}
