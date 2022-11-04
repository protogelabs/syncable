import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BackgroundCircles, Button } from './components'

import { useTheme } from './hooks/useTheme'

function App() {
  const [resolvedTheme, toggleTheme] = useTheme('dark')

  return (
    <BackgroundCircles>

      <Button text="Hello"/>
    </BackgroundCircles>
  )
}

export default App
