import { useAuth } from '../hooks/useAuth'
import userlogo from '../assets/images/abstract-user-flat-4.svg'
import logOut from '../assets/images/logout.png'
import logoNavBar from '../assets/images/logoNav.png'

export function NavMenu() {
    const {user} = useAuth()
    const handleLogOut = () => {
        alert('desloguei')
    }

    const handleReturn = () => {
        window.location.replace('main')
    }


  return (
    <div>
        <nav className="navMain">            
            <img onClick={() => handleReturn()} className='logotipo' src={logoNavBar} alt='' />
            <span onClick={handleLogOut} className='logout'>
                <p>Sair</p>
                <img src={logOut} alt='' />
            </span>            
            <p>
                Bem vindo(a) {user?.name}!
            </p>
            <img className='image-user' src={userlogo} alt='user' />
        </nav>
    </div>
  )
}
