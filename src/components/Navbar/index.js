import styles from './index.module.css'
import logo from '../../logo.svg'
const Navbar = () =>{
    return(
        <header>
            <nav className={styles.navbar_container}>
            <div className={styles.navbar_l1}>
                <img src={logo} alt='navbar-logo' aria-label='react-logo' className={styles.react_logo} />
            </div>
        </nav>
        </header>
    )
}

export default Navbar