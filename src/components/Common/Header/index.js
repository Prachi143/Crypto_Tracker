import React from "react";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Button from "../Button";
function Header(){
    return(
         <div className="navbar">
            <h1 className="logo"></h1>
             <h1>CryptoTracker<span style={{color:"var(--blue)"}}>.</span>
             </h1>
        <div className="links">
            <Link to="/home">
                <p className="link">Home</p>
            </Link>
            <Link to="/compare">
                <p className="link">Compare</p>
            </Link>
            <Link to="/watchlist">
                <p className="link">WatchList</p>
            </Link>
            <Link to="/dashboard">
                <Button
                    text={"Dashboard"}
                    outlined={true}
                    onClick={()=> console.log("Btn Clicked")}
                />
            </Link>
            {/* <a href="#">
                <Button
                    text={"Share"}
                    outlined={true}
                    onClick={()=> console.log("Btn Clicked")}
                />
            </a> */}
        </div>
        <div className="mobile-drawer">
            <TemporaryDrawer/>
             </div>
        </div>
    );
}
export default Header;