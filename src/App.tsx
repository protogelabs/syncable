import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BackgroundCircles, Button } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BackgroundCircles>

      <Button text="Hello"/>
    </BackgroundCircles>
  )
}

export default App
