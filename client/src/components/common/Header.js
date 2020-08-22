import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles"
import LogoTranspo from "../../res/img/transpo832.png"

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    <img src={LogoTranspo} className={classes.Applogo} alt="logo" />
            Transpo App by Gen2
          </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Vehicles
            </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Enterprise
            </Link>
                    <Link variant="button" color="textPrimary" href="/dashboard" className={classes.link}>
                        Dashboard
            </Link>
                </nav>
                <Button href="/login" color="primary" variant="outlined" className={classes.link}>
                    Login
          </Button>
            </Toolbar>
        </AppBar>
    )
}