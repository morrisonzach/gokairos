import React, { useEffect } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from "./Navbar";
import "./Nav.css";

function Nav(props) {
    const [isSticky, setSticky] = React.useState(false);
    const ref = React.useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        }
    }, []);

    return (
        <>
            <header ref={ref} className={isSticky ? "navbar-sticky header pl-2" : "header pl-2"}>
                <Navbar />
            </header>
            <div className={isSticky ? "" : "invis"} >
                <Toolbar />
            </div>
        </>
    );
}

export default Nav;