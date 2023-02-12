import { useState } from 'react'
import './App.css'
import image from './assets/virtual-reality-animate.svg'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }
  

  return (
    <div className="App">
      <div className='image'>
        <img src={image} alt="Girl with VR" />
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <h1>Faça seu cadastro</h1>
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
