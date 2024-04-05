import { useState } from 'react'

import TodoComponent from './Component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoComponent></TodoComponent>
    </>
  )
}

export default App
