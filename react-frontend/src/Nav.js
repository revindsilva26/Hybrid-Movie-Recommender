import React, {useEffect, useState} from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    return (
        <div className= {`nav ${show && "nav__black"}`}>
            {/* <Link to="/">
                <img
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netflix Logo"
                />
            </Link> */}

            <Link to="/generator">
                <button className="nav__button"> Similar </button>
            </Link>

            <Link to="/personalized">
                <button className="nav__button"> Personalized </button>
            </Link>
            
        </div>
    );
}

export default Nav;
