import { useState } from 'react'
import './App.css'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(email, password)
  }
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Email: 
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <label>
          Senha: 
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default App
