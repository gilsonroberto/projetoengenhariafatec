import '../styles/auth.scss'
import googleIconImg from '../assets/images/google-icon.svg'
import logoPapelaria from "../assets/images/logoCaracas.png"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
// import { useEffect } from 'react'

// import '../styles/global.scss'

export function Home() {

  // useEffect(() => {

  //   const Stream =  [7, 10, 5, 10, 8, 3, 1, 4, 3, 3, 5, 1]
  //   const repeat: number[] = []
  //   const repeatB: number[] = []

    
  //   Stream.forEach((element) => {
  //     if(!repeat.includes(element)) {
  //       if(Stream[element] !== repeat[element]) {
  //         repeat.push(element)
  //       }
  //     }
  //    return console.log(repeat)
  //  })

  // })

  const navigate = useNavigate()
  const {signInWithGoogle, user} = useAuth()

  async function handleLogin() {
    if (!user) {
        await signInWithGoogle()
    }        
    navigate('/main')

}

  
  return (
    <div id='page-auth'>
      <main>
        <div className="main-container">
          <img className="logoPapelaria" src={logoPapelaria} alt="Papelaria Caraca`s" />
          <button onClick={() => handleLogin()} className="create-login">
              <img src={googleIconImg} alt="Logo Google" />
              Faça Login com o Google
          </button> 
        </div>
      </main>
    </div>
  )
}
