import React from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { Button, IconButton } from "@material-ui/core";
import { AccountBox, Assignment, Info, Redeem } from "@material-ui/icons";
import logo from "./../img/logo.jpg";
import "./Nav.css";

function Navbar(props) {
    const [isNavVisible, setIsNavVisible] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = React.useState(true);
    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 800px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
            handleMediaQueryChange(mediaQuery)
        };
    }, [isSmallScreen]);
    const Logo = (props) => (
        <div style={{ marginTop: "10px" }}>
            <a href={props.href}>
                <img src={props.src} className={props.class} alt={props.alt} />
            </a>
        </div>
    );

    return (
        <>
            <Logo href="/" src={logo} class="logo" alt="logo" />
            {(!isSmallScreen || isNavVisible) && (
                <nav className="nav my-auto">
                    <a href="/about">
                        <Button color="primary" startIcon={<Info className="nav-icon" style={{ fontSize: "1.5rem" }} />} >
                            about
                        </Button>
                    </a>
                    <a href="/projects">
                        <Button color="primary" startIcon={<Assignment className="nav-icon" style={{ fontSize: "1.5rem" }} />} >
                            projects
                        </Button>
                    </a>
                    <a href="/donate">
                        <Button color="primary" startIcon={<Redeem className="nav-icon" style={{ fontSize: "1.5rem" }} />} >
                            donate
                        </Button>
                    </a>
                    <a href="/account">
                        <IconButton variant="contained" color="primary" aria-label="account">
                            <AccountBox className="nav-icon" style={{ fontSize: "2.5rem" }} />
                        </IconButton>
                    </a>
                </nav>
            )}
            <div className="toggleDiv py-2">
                <Hamburger size={30} label="menu toggle" toggled={isNavVisible} toggle={setIsNavVisible} />
            </div>
        </>
    );
}
export default Navbar;