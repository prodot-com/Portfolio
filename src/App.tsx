import Home from "./App/Home"
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import Resume from "./App/Resume"

const App = () => {
  return (
<div className="min-h-screen w-full bg-white dark:bg-black relative">
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/>
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
