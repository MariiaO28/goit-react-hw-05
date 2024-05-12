import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import css from './BackLink.module.css'

export default function BackLink({to, children}) {
    return (
        <Link to={to} className={css.link}>
            <FaArrowLeft size='18px' />
            {children}
        </Link>
    )
}