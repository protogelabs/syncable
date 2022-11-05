import { useState } from 'react'
import './App.css'
import { BackgroundCircles, Button,Words } from './components'

import { useTheme } from './hooks/useTheme'

function App() {
  const [resolvedTheme, toggleTheme] = useTheme('dark')

  return (
    <BackgroundCircles>

      <Words/>
    </BackgroundCircles>
  )
}

export default App
