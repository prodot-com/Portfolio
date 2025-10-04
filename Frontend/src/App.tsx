import Home from "./Components/Home"

const App = () => {
  return (
<div className="min-h-screen w-full bg-black relative text-neutral-300">
  {/* Black Basic Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}
  />
     {/* Your Content/Components */}
     <Home/>
</div>
  )
}

export default App
