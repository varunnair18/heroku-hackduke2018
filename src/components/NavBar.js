import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './NavBar.css';
import { Link } from 'react-router-dom';



const styles = {
    rightButtons : {
        marginLeft: 'auto',
        marginRight: -12,
    },
    appBar : {
        background: '5D8FAD',
    }
};


const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar style={{background: '5D8FAD'}}>
                <Typography variant="h6" color="inherit" >
                    <Link to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>ucharity</Link>
                </Typography>
                <section style={{marginLeft: 'auto',
    marginRight: -12,}}>
                    <Button color="inherit"><Link to="/donate" style={{ textDecoration: 'none', color: '#ffffff' }}>Donate</Link></Button>
                    <Button color="inherit"><Link to="/donate" style={{ textDecoration: 'none', color: '#ffffff'  }}>About</Link></Button>
                </section>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;