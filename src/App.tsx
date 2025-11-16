import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-flexoki-paper text-flexoki-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-flexoki-blue-600">
          Bookmarksdown
        </h1>
        
        <div className="bg-flexoki-50 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-flexoki-purple-600">
            Welcome to your Bookmarksdown app!
          </h2>
          
          <p className="text-flexoki-700 mb-6">
            This is a React app with Tailwind CSS and the Flexoki color palette.
          </p>
          
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-flexoki-blue-600 hover:bg-flexoki-blue-400 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Count is {count}
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-flexoki-red-400 p-4 rounded">
            <p className="text-white font-semibold">Red</p>
          </div>
          <div className="bg-flexoki-orange-400 p-4 rounded">
            <p className="text-white font-semibold">Orange</p>
          </div>
          <div className="bg-flexoki-yellow-400 p-4 rounded">
            <p className="text-white font-semibold">Yellow</p>
          </div>
          <div className="bg-flexoki-green-400 p-4 rounded">
            <p className="text-white font-semibold">Green</p>
          </div>
          <div className="bg-flexoki-cyan-400 p-4 rounded">
            <p className="text-white font-semibold">Cyan</p>
          </div>
          <div className="bg-flexoki-blue-400 p-4 rounded">
            <p className="text-white font-semibold">Blue</p>
          </div>
          <div className="bg-flexoki-purple-400 p-4 rounded">
            <p className="text-white font-semibold">Purple</p>
          </div>
          <div className="bg-flexoki-magenta-400 p-4 rounded">
            <p className="text-white font-semibold">Magenta</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
