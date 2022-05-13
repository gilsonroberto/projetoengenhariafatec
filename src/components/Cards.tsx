import '../styles/cards.scss'
import  menu  from '../initial-state/cardMenu'


export function Cards () {
    const handleRedirect = (redirect: string | URL) => {
        window.location.replace(redirect);
    }
  return (
        <div className="container">
            <div className="row">
                {menu.map((item: any) => {
                    return(
                        <span className="card card-color" onClick={() => handleRedirect(item.path)}>
                            <h2>{item.title}</h2>
                            <p>{item.subscript}</p>
                            <img className="image" src={item.image} alt="" />
                        </span>
                    )
                })}
            </div>
        </div>
  )
}
