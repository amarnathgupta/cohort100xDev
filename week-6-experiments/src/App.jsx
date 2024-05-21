import axios from 'axios'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'

function App() {
  const [count,setCount] = useState(0);

  const [data, setData] = useState(0)

  const a = useMemo(() => {
    console.log("rendered...");
  },[])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click here ({count})</button><br />
      <ButtonComponent onClick={a} />
    </div>
  );
}

const ButtonComponent = memo(({onClick}) => {
  console.log("Child rendered...")
  return (
    <button onClick={onClick}>click here</button>
  );
})


export default App