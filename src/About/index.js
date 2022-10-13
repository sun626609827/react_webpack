import React, { useCallback,Suspense } from "react";
const BizCharts = React.lazy(()=>import ('../BizCharts'))
export default function About() {
  const addNum = useCallback(
    async (num1, num2) => {
      let math = await import("math");
      let result = math.add(num1, num2);
      console.log(result);
      return result;
    },
    []
  );
  
  console.log(addNum(3, 3));
  return (
    <div>
      关于使用react-router-V{}
      <hr />
      {/* <form action=""> */}
        <label htmlFor="nameInput">名字:</label>
        <input style={{behavior:'url(#default#savehistory)'}}  type="text" id="nameInput" name="name" autocomplete='off' />
      {/* </form> */}
      <Suspense fallback={<div>Loading.....</div>}>
           <BizCharts/>
      </Suspense>
    </div>
  );
}
