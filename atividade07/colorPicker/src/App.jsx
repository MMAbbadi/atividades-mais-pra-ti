import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#ababab')

  return (
    <div style={{ backgroundColor: color, display: 'flex', flexDirection: 'column', width:'50vw', height: '50vh'}}>
      <header>
        <h1>Color Picker</h1>
      </header>
      <main style={{display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center'}}>
        <div className="color">
          <p className="color_selector">Color selector:</p>
          <input id="color" value={color} onChange={(e) => setColor(e.target.value)} type="color" />
        </div>
        <div style={{  
              color: 'white',
              width: '100px', height: '100px', 
              display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
            className="picked_color">
            {color}
          </div>
      </main>  
    </div>
  )
}

export default App
