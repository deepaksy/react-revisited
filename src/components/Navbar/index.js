import styles from './index.module.css'
import logo from '../../logo.svg'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';

const Navbar = () =>{
    return(
        <header className={styles.navbar}>
            <nav className={styles.navbar_container}>
            <div className={styles.navbar_l1}>
                <img src={logo} alt='navbar-logo' aria-label='react-logo' className={styles.react_logo} />
                <Typography 
                sx={{
                    marginLeft:1,
                    paddingLeft:1
                }}
                variant='h6' component={'p'}>
                    React
                </Typography>
            </div>
            <div>
                <IconButton aria-label='github'>
                    <a rel='noreferrer' href='https://www.github.com/deepaksy/react-revisited' target='_blank'>
                    <GitHubIcon sx={{
                        color:'white'
                    }}/>
                    </a>
                </IconButton>
            </div>
        </nav>
        </header>
    )
}

export default Navbar