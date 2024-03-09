import React from 'react'
import { useState } from 'react'
function App() {
  const [value, setValue] = useState(0)
  return (
    <div>
      <p>{value}</p>
      <button type="button" onClick={()=>{setValue(value + 1)}}>Click Me</button>
      
    </div>
  )
}

export default App