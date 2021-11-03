import React from 'react'
import { Button, IconButton, Paper, Avatar, Link, Dialog, Typography, DialogContent, DialogContentText } from '@material-ui/core'
import { 
    SearchOutlined, 
    SmsOutlined, 
    NotificationImportantOutlined,
    Menu,
    PersonOutline
} from "@material-ui/icons"

import styles from './Header.module.scss'
import { AuthDialog } from '../AuthDialog/AuthDialog'

export const Header: React.FC = () => {
    const [authVisible, setAuthVisible] = React.useState(false);

    const handleAuthVisible = () => {
        setAuthVisible(!authVisible);
    };

    return (
        <Paper classes={{ root: styles.root}} elevation={0}>
            <div className="d-flex align-center"> 
                <IconButton>
                    <Menu/>
                </IconButton>

                <Link href="/">
                    <a>
                        <svg className={styles.logo} viewBox="0 0 24 25">
                            <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
                            <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
                            <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
                        </svg>
                    </a>
                </Link>

                <div className={styles.searchBlock}>
                    <SearchOutlined />
                    <input placeholder="Поиск" />
                </div>
                
                <Link href="/write">
                    <a>
                        <Button variant="contained" className={styles.penButton}>
                            Новая запись
                        </Button>
                    </a>
                </Link>

            
            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <SmsOutlined/>
                </IconButton>

                <IconButton>
                    <NotificationImportantOutlined/>
                </IconButton>

                <Button onClick={handleAuthVisible}>
                    <PersonOutline/>
                    Войти
                </Button>

                {/*<Avatar onClick={handleAuthVisible} className="ml-15" />*/}
            </div>

            <AuthDialog visible={authVisible} onClose={handleAuthVisible}/>
        </Paper>
    )
} 
