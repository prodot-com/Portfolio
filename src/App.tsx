import Home from "./App/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  return (
<div className="min-h-screen w-full bg-white dark:bg-black relative">
  <SpeedInsights/>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
