import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import css from './Navigation.module.css'

const activeClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
    return (
        <nav className={css.navigation} >
            <NavLink to='/' className={activeClass}>Home Page</NavLink>
            <NavLink to='/movies'className={activeClass}>Movies</NavLink>
        </nav>
    )
}