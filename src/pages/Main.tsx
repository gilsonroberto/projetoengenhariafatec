import { useEffect } from 'react'
import { Cards } from '../components/Cards'
import { NavMenu } from '../components/NavMenu'

export function Main() {
  return (
    <div>
        <NavMenu />
        <div className="main-container">
          <Cards />
        </div>
    </div>
  )
}
