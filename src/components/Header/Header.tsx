import classes from './Header.module.scss';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export const Header = () => {
    const getActiveClass = ({ isActive }: {isActive: boolean}): string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }

    return (
        <header className={classes.header}>
            <div className={classes.container}>

                <NavLink to="/" className={getActiveClass}>Home</NavLink>
                <NavLink to="/todo" className={getActiveClass}>ToDo</NavLink>
                {/* <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/todo" className={`${classes.link} ${classes.active}`}>ToDo</NavLink> */}
                {/* <Link to="/" className={`${classes.link} ${classes.active}`}>Home</Link>
                <Link to="/todo" className={`${classes.link} ${classes.active}`}>ToDo</Link> */}
                {/* <a className={`${classes.link} ${classes.active}`} href="/">Home</a>
                <a className={`${classes.link} ${classes.active}`} href="/todo">ToDo</a> */}
            </div>
        </header>
    )
}